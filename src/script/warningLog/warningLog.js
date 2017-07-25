/**
 * Created by zhangxin on 2017/7/17.
 */
$(function () {
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
    $.jqPaginator('#pagination', {
        totalPages: 100,
        visiblePages: 10,
        currentPage: 3,
        prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            // $('#p2').text(type + '：' + num);
        }
    });
});