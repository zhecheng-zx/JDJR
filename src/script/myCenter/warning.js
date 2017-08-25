/**
 * Created by lifei on 2017/7/19.
 */

$(function () {

    //点击不同的tab  加载响应的内容
    $('.classify-nav li').click(function () {
        $('.classify-nav li').removeClass('active');
        $(this).siblings().find('.triangle').hide();
        $(this).addClass('active');
        $(this).find('.triangle').show();
    });

    $('#add-keyword-rule').click(function () {
        var length = $('#keyword-accordion .panel').length + 1;
        //超出20个规则 提示不能再添加
        if((length - 1) == 20){
            return ;
        }
        var id = "keyword-collapse" + length;
        var $html = $('#keyword-template').children().clone(true);
        $html.find('.panel-heading').attr('href', '#' + id);
        $html.find('a.panel-arrow').attr('href', '#' + id);
        $html.find('.panel-collapse').attr('id', id);
        $html.find('.delete-rule').click(function (e) {
            e.stopPropagation();
            deleteRule(length, 'keyword-accordion');
        });
        $('#keyword-accordion').append($html.show());
        //
        $html.find('span.span-switch').addClass('switch-on').removeClass('span-switch');

        $html.find('ul.list').each(function () {
            var height = $(this).height();
            if(height > $(this).parent().height()) {
                $(this).parent().siblings('.dot').show();
            }
        });
        $html.find('div.dot').click(dotClick);
        honeySwitch.initCertainOne($html.find('.switch-on'));
        $html.find('.rule-select').addClass('selectpicker ').selectpicker();
    });

    $('#add-jingrong-rule').click(function () {
        var length = $('#jingrong-accordion .panel').length + 1;
        //超出20个规则 提示不能再添加
        if((length - 1) == 20){
            return ;
        }
        var id = "jingrong-collapse" + length;
        var $html = $('#jingrong-template').children().clone();
        $html.find('.panel-heading').attr('href', '#' + id);
        $html.find('a.panel-arrow').attr('href', '#' + id);
        $html.find('.panel-collapse').attr('id', id);
        $html.find('.delete-rule').click(function (e) {
            e.stopPropagation();
            deleteRule(length, 'jingrong-accordion');
        });
        $html.find('input.slider').slider({
            step: 0.1,
            formatter: function (value) {
                return value;
            }
        });
        $html.find('.pressure-slide').on('change', function (e) {
            var val = e.value.newValue;
            $(this).closest('.row').find('.pressure-input').val(val);
        });
        $html.find('.negative-slide').on('change', function (e) {
            var val = e.value.newValue;
            $(this).closest('.row').find('.negative-input').val(val);
        });-
        $html.find('.pressure-input').change(function () {
            var val = $(this).val();
            $(this).closest('.row').find('.pressure-slide').slider('setValue', parseFloat(val));
        });
        $html.find('.negative-input').change(function () {
            var val = $(this).val();
            $(this).closest('.row').find('.negative-slide').slider('setValue', parseFloat(val));
        });
        $html.find('span.span-switch').addClass('switch-on').removeClass('span-switch');
        $('#jingrong-accordion').append($html.show());
        honeySwitch.initCertainOne($html.find('.switch-on'));
        $html.find('.rule-select').addClass('selectpicker').selectpicker();
    });

    $('.delete-rule').click(function (e) {
        if($(this).parents(".panel-heading").hasClass("collapsed")){
            e.stopPropagation();
        }
        $('#deleteModel').modal();
    });


    $('.deleteBtn').click(function () {

    });

    //删除关键字规则
    $('.panel-title a.delete').click(function () {

    });

    $('.list').each(function () {
        var height = $(this).height();
        if(height > $(this).parent().height()) {
            $(this).parent().siblings('.dot').show();
        }
    });

    $('.dot').click(function () {
        var sibHeight = $(this).siblings('.list-wrapper').height();
        if(sibHeight > 50){
            $(this).siblings('.list-wrapper').height(50).getNiceScroll().hide();
        }else {
            var height = $(this).siblings('.list-wrapper').find('.list').height(),
                $sib = $(this).siblings('.list-wrapper');
            $sib.show().height(height)
            if($sib.getNiceScroll().length == 0){
                $sib.niceScroll({styler:"fb",cursorcolor:"#ebebeb",iframeautoresize:true,autohidemode:false});
            }else {
                //显示滚动条  没找到方法

            }
            $sib.getNiceScroll().resize();
        }
    });

    $('.checkbox').iCheck({
        checkboxClass: 'icheckbox_flat-blue'
    });

    $('.btn-addkeyword-mail').click(function () {
        var mail = $('#keyword-mail').val();
        if(!mail){
            //暂时alert
            alert('请输入邮箱');
        }

        //ajax请求后台保存 后回调以下代码

    });

    $('input.exist-slider').slider({
        step: 0.1,
        formatter: function (value) {
            return value;
        }
    });

    $('.pressure-slide').on('change', function (e) {
        var val = e.value.newValue;
        $(this).closest('.row').find('.pressure-input').val(val);
    });

    $('.negative-slide').on('change', function (e) {
        var val = e.value.newValue;
        $(this).closest('.row').find('.negative-input').val(val);
    });

    $('.pressure-input').change(function () {
            var val = $(this).val();
            $(this).closest('.row').find('.pressure-slide').slider('setValue', parseFloat(val));
    });

    $('.negative-input').change(function () {
        var val = $(this).val();
        $(this).closest('.row').find('.negative-slide').slider('setValue', parseFloat(val));
    });

    $('.exist-mail i.glyphicon').click(function () {
        $(this).closest('span').remove();
    });
    $(window).on("resize",function(){
	 wrapperHeight();
	});
	function wrapperHeight(){
	 $(".page-wrapper").height($(".page-wrapper>.container").height()+$(".page-wrapper>.container")[0].offsetTop+20);
	}
	wrapperHeight();
    $(document).on("click",".list-wrapper>.list .btn>span",function(e){
        e.stopPropagation();
        console.log(e)
        alert(1);
    });
});


function deleteRule(index, id) {
    $('#deleteModel').modal();
}

function dotClick() {
    var sibHeight = $(this).siblings('.list-wrapper').height();
    if(sibHeight > 50){
        $(this).siblings('.list-wrapper').height(50).getNiceScroll().hide();
    }else {
        var height = $(this).siblings('.list-wrapper').find('.list').height(),
            $sib = $(this).siblings('.list-wrapper');
        $sib.show().height(height)
        if($sib.getNiceScroll().length == 0){
            $sib.niceScroll({styler:"fb",cursorcolor:"#ebebeb",iframeautoresize:true,autohidemode:false});
        }else {
            //显示滚动条  没找到方法

        }
    }
}

/*这段是关键词弹出层需要的js*/
$("[data-toggle='tooltip']").tooltip();
$(".scrollbar").niceScroll({styler:"fb",cursorcolor:"#ebebeb"});
$(".system-keyword>.form-control-static").on("click",function () {
    var _this=$(this);
    $(".backdrop").show();
    _this.parent().addClass("open");
});
$(".system-keyword").on("click",".layer-title>.close",function () {
    closeLayer();
});
$(".search-link").on("click","a",function () {
    var _this= $(this);
    _this.addClass("current").siblings().removeClass("current");
    if(_this.hasClass("all")){
        /*全选*/
        _this.parents(".layer").find(".list>li").addClass("active");
    }else if(_this.hasClass("allnot")){
        /*反选*/
        _this.parents(".layer").find(".list>li").each(function () {
            var $this=$(this);
            if($this.hasClass("active")){
                $this.removeClass("active");
            }else{
                $this.addClass("active");
            }
        });
    }
});
$(".system-keyword .layer").on("click",".list>li",function () {
    if($(this).hasClass("active")){
        $(this).removeClass("active")
    }else{
        $(this).addClass("active")
    };
});
$("#add_keyword").on("hide.bs.modal",function () {
    closeLayer();
});
/*关闭弹层内的弹层layer*/
function closeLayer() {
    $(".backdrop").hide();
    $(".system-keyword").removeClass("open");
}