/**
 * Created by zhangxin on 2017/7/25.
 */
var selectDatePicker={};
selectDatePicker.init=function (ele,opens,callback) {
    var _ele=ele;
    _ele.daterangepicker('destroy');
    _ele.daterangepicker({
        maxDate : moment(), //最大时间
        dateLimit : {
            days : 30
        },//起止时间的最大间隔
        opens:opens,
        autoApply:true,
        format : 'YYYY-MM-DD', //控件中from和to 显示的日期格式
        separator : ' 到 ',
        autoUpdateInput: false,
        locale: {
            applyLabel : '确定',
            cancelLabel : '取消',
            fromLabel : '起始时间',
            toLabel : '结束时间',
            customRangeLabel : '自定义',
            daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
            monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月' ],
            firstDay : 1
        }
    });
    _ele.val('');
    _ele.click();
    _ele.on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('YYYY-MM-DD') + ' 到 ' + picker.endDate.format('YYYY-MM-DD'));
        callback();
    });
    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
}