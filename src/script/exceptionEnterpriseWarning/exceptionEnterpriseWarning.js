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
    $('#sld').selectpicker().on('changed.bs.select',function () {
        var _input=$(this).parents(".bootstrap-select").next();
        var select_val=$(this).val();
        switch(select_val){
            case "自定义时间":
                _input.removeClass("event-disabled");
                selectDatePicker.init(_input,"right",function () {

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
});