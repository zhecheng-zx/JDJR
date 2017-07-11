/**
 * Created by zhangxin on 2017/6/26.
 */
function uleft(option) {
    var timer,
        oContainer=option.oContainer,
        oContent=option.oContent,
        oArrowLeft=option.oArrowLeft,
        oContent_li=oContent.find("li"),
        oContent_li_length=oContent_li.length,
        oContainer_width=oContent_li.width(),
        sidle_curr_size=0;
        sidle_size=Math.floor(oContent_li_length/6);
    oContent.css({
        width:oContent_li_length * oContainer_width
    });
    function end(opt) {
        oContent.stop(true,false).animate({
            left:7 * -(oContainer_width * opt)
        });
    }
    function silder() {
        timer = setInterval(function () {
            sidle_curr_size +=1,
                sidle_curr_size > sidle_size ? (sidle_curr_size=0,oArrowLeft.text(">")) : oArrowLeft.text("<");
                end(sidle_curr_size);
        },3000);
    }
    oArrowLeft.on("click",function () {
        sidle_curr_size +=1,
            sidle_curr_size > sidle_size ? (sidle_curr_size=0,oArrowLeft.text(">")) : oArrowLeft.text("<");
        end(sidle_curr_size);
    });
    oContainer.hover(function() {
        clearInterval(timer)
    }, function() {
        silder()
    }),
    oArrowLeft.hover(function() {
        clearInterval(timer)
    }, function() {
        silder()
    }),
    silder();
}
$(function () {
    uleft({
        oContainer:$(".silder"),
        oContent:$(".uleft"),
        oArrowLeft:$(".uarrow")
    });
    $(".uleft").on("click","a",function () {
       $(this).parent().addClass("active").siblings().removeClass("active");
    });
});