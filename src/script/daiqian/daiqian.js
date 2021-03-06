/**
 * Created by zhangxin on 2017/7/26.
 */
window.operateEvents={
    'click .search':function (e,value,row,index) {

    },
    'click .delete':function (e,value,row,index) {
        $('#data-Table').bootstrapTable('remove',{
            field:'name',
            values:[row.name]
        })
    }
};
$(function(){
    $('#sld').selectpicker().on('changed.bs.select',function () {
        var _input=$(this).parents(".bootstrap-select").next();
        var select_val=$(this).val();
        switch(select_val){
            case "自定义时间":
                _input.removeClass("event-disabled");
                selectDatePicker.init(_input,"left",function () {

                });
                break;
            case "近三天":
                _input.addClass("event-disabled");
                var _val1=moment().subtract('days', 2),
                    _val2=moment();
                _input.val(_val1.format("YYYY-MM-DD")+' 到 '+_val2.format("YYYY-MM-DD"));
                break;
            case "近七天":
                _input.addClass("event-disabled");
                var _val1=moment().subtract('days', 6),
                    _val2=moment();
                _input.val(_val1.format("YYYY-MM-DD")+' 到 '+_val2.format("YYYY-MM-DD"));
                break;
            case "近三十天":
                _input.addClass("event-disabled");
                var _val1=moment().subtract('days', 29),
                    _val2=moment();
                _input.val(_val1.format("YYYY-MM-DD")+' 到 '+_val2.format("YYYY-MM-DD"));
                break;
        }
    });
    $(".search input[type=text]").on("focus",function () {
        var _this=$(this),
            history_box=_this.parents('.search-box').find(".history-box");
        if(!history_box.hasClass("open")) {
            history_box.addClass("open");
        }
    }).on("keyup",function () {
        var _this=$(this),
            _this_val=_this.val(),
            history_box=_this.parents('.search-box').find(".history-box");
            /*
            * 下面这一句是拼html节点的，可以换用ajax；
            * */
            history_box.find(".history-list").empty().append("<li class='item'>"+_this_val+"这是模糊搜索的结果</li>");
    });
    $(document).on("click",".history-list li.item",function () {
        var _this=$(this);
        $(".search input[type=text]").val(_this.text());
        _this.parents(".search-box").find(".history-box").removeClass("open");
    });
    $("body").on("click",function (e) {
        var _className=e.target.className,
            openClassName=["input","history-list"];
        if(_className.length>0){
            for(var i in openClassName){
                if(_className==openClassName[i]){
                    return;
                }else{
                    $(".history-box").removeClass("open");
                }
            }
        }
    });
    var operateFormatter = function (value, row, index) {
        return [
            "<a href='javascript:void(0);' class='edit search mr20'><span class='glyphicon glyphicon-eye-open'></span> 查看</a>",
            "<a href='javascript:void(0);' class='edit delete'><span class='glyphicon glyphicon-remove'></span> 删除</a>",
        ].join('');
    };
    var stateFormatter=function (value, row, index){
        var name="analysis";
        if(row.state=="数据采集中"){
            name="collect";
        }else if(row.state=="提交完成"){
            name="submit"
        }
        var a="<span class='"+name+"'>"+row.state+"</span>";
        return a;
    };
    var options = {
        columns : [ {
            field : 'name',
            align:"center",
            valign: "middle",
            title : "企业名称<div class='search-div small-search'><i class='glyphicon glyphicon-search search-icon'></i><input type='text' class='form-control search-text' placeholder='请输入搜索关键词'></div>"
        }, {
            field : 'exponent',
            title : "压力指数",
            align:"center",
            valign: "middle"


        }, {
            field : 'number',
            title : "负面数",
            align:"center",
            valign: "middle",

        }, {
            field : 'count',
            title : "舆情数",
            align:"center",
            valign: "middle"

        }, {
            field : 'state',
            align:"left",
            valign: "middle",
            title : "状态",
            formatter: stateFormatter

        },{
            field : 'data',
            align:"right",
            valign: "middle",
            width:"50px",
            title : "提交时间",
            sortable:true
        },{
            field : 'action',
            align:"center",
            valign: "middle",
            title : "操作",
            formatter: operateFormatter,
            events:operateEvents

        }],
        paginationPreText:"<i class='glyphicon glyphicon-menu-left'></i>",
        paginationNextText:"<i class='glyphicon glyphicon-menu-right'></i>",
        method: 'get',
        sortable:true,
        sortOrder : 'desc',
        pagination : true,
        sidePagination : 'server',
        pageNumber :1,
        pageSize :6,
        dataType: "json",
        url : '../data/table2.json',
        pageList : [ 10000],
        queryParamsType: '',
        onLoadSuccess:function(){
//                    $(".no").attr("disabled","disabled")
        }
//                queryParams : function(params) {
//                    return{
//                    offset:params.offset,
//                    limit:params.limit
//                   }
//                }

    };

    $('#data-Table').bootstrapTable(options);
})