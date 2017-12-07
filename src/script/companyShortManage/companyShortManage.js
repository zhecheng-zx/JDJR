/**
 * Created by zhangxin on 2017/12/7.
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
            "<a href='#myModal1' data-toggle='modal' data-target='#myModal1' class='edit search mr20'><span class='glyphicon glyphicon-eye-open'></span> 添加</a>",
            "<a href='#myModal' data-toggle='modal' data-target='#myModal' class='edit delete'><span class='glyphicon glyphicon-remove'></span> 删除</a>",
        ].join('');
    };
    var options = {
        columns : [ {
            field : 'name',
            align: "left",
            valign: "middle",
            title : "企业名称"
        },{
            field: "shortName",
            align: "left",
            avlign: "middle",
            title: "企业简称"
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
        url : '../data/table3.json',
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