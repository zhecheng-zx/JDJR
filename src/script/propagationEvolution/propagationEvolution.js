/**
 * Created by zhangxin on 2017/7/17.
 */
$(function () {
    $(".horizontal.transform-blue .timeline").width(($(".horizontal.transform-blue .timeline>li").eq(1).width()+45)*$(".horizontal.transform-blue .timeline>li").length);
    $(".horizontal.transform-orange .timeline").width(($(".horizontal.transform-orange .timeline>li").eq(1).width()+45)*$(".horizontal.transform-orange .timeline>li").length);
    var options = {
        columns : [ {
            field : 'name',
            align:"center",
            valign: "middle",
            title : "媒体类型",
            formatter:function (value) {
                _html="<span class='blockModel blue'></span>   "+value;
                return _html;
            }
        }, {
            field : 'exponent',
            title : "发布时间",
            width : "100px",
            align:"center",
            valign: "middle"


        }, {
            field : 'number',
            title : "标题",
            align:"center",
            valign: "middle",

        }, {
            field : 'count',
            title : "信息来源",
            align:"center",
            valign: "middle",

        }],
        paginationPreText:"<i class='glyphicon glyphicon-menu-left'></i>",
        paginationNextText:"<i class='glyphicon glyphicon-menu-right'></i>",
        method: 'get',
        sortable:false,
        sortOrder : 'desc',
        pagination : false,
        sidePagination : 'server',
        pageNumber :1,
        pageSize :6,
        dataType: "json",
        url : '../data/table2.json',
        pageList : [ 10000],
        queryParamsType: '',
        onLoadSuccess:function(){
        }
//                queryParams : function(params) {
//                    return{
//                    offset:params.offset,
//                    limit:params.limit
//                   }
//                }

    };

    $('#hotTbale').bootstrapTable(options);
});