/**
 * Created by zhangxin on 2017/8/10.
 */
$(function () {
    $(window).on("resize",function(){
        wrapperHeight();
    });
    function wrapperHeight(){
        $(".page-wrapper").height($(".page-wrapper>.container").height()+$(".page-wrapper>.container")[0].offsetTop+20);
    }
    wrapperHeight();
    $(".collapse").on("shown.bs.collapse",function () {
        wrapperHeight();
    }).on("hidden.bs.collapse",function () {
        wrapperHeight();
    });
});