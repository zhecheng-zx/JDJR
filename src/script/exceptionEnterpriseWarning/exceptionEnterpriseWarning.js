/**
 * Created by zhangxin on 2017/7/14.
 */
$(function () {
    var options = {
        columns : [ {
            field : 'name',
            align:"left",
            valign: "middle",
            title : "企业名称"
        }, {
            field : 'exponent',
            title : "预警等级",
            width : "100px",
            align:"center",
            valign: "middle"


        }, {
            field : 'number',
            title : "预警内容",
            align:"left",
            valign: "middle",

        }, {
            field : 'count',
            title : "预警时间",
            align:"center",
            valign: "middle"

        }, {
            field : 'state',
            align:"center",
            valign: "middle",
            title : "预警日志",

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
        }
//                queryParams : function(params) {
//                    return{
//                    offset:params.offset,
//                    limit:params.limit
//                   }
//                }

    };

    $('#exceptionEnterpriseWarningTable').bootstrapTable(options);
});