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
        var $html = $('#keyword-template').children().clone();
        $html.find('.panel-heading').attr('href', '#' + id);
        $html.find('a.panel-arrow').attr('href', '#' + id);
        $html.find('.panel-collapse').attr('id', id);
        $html.find('.delete-rule').click(function () {
            deleteRule(length, 'keyword-accordion');
        });

        $('#keyword-accordion').append($html.show());
        honeySwitch.init();
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
        $html.find('.delete-rule').click(function () {
            deleteRule(length, 'jingrong-accordion');
        });
        $('#jingrong-accordion').append($html.show());
        honeySwitch.init();
    });

    $('.delete-rule').click(function () {
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
            $sib.show().height(height).niceScroll({styler:"fb",cursorcolor:"#ebebeb",iframeautoresize:true,autohidemode:false});
            $sib.getNiceScroll().resize();
//                if($sib.getNiceScroll()){
//                    $sib.getNiceScroll().resize().show();
//                }else{
//                    $sib.niceScroll({styler:"fb",cursorcolor:"#ebebeb",iframeautoresize:true});
//                }
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

    $('input.slider').slider({
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
        $sib.show().height(height).niceScroll({styler:"fb",cursorcolor:"#ebebeb",iframeautoresize:true,autohidemode:false});
//                if($sib.getNiceScroll()){
//                    $sib.getNiceScroll().resize().show();
//                }else{
//                    $sib.niceScroll({styler:"fb",cursorcolor:"#ebebeb",iframeautoresize:true});
//                }
    }
}


function initSwitch(){

}
