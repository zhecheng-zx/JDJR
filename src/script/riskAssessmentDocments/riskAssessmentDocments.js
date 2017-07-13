/**
 * Created by zhangxin on 2017/7/10.
 */
(function () {
    var radialOption={
        initValue :0,
        displayNumber: false,
        minValue: 0,
        maxValue: 100,
        radius:56,
        barWidth:8,
        frameTime:2,
        barColor : '#179bf3',
        roundCorner : true
    };
    var indicatorContainer=radialIndicator("#indicatorContainer-1",radialOption),
        radialOptions=radialOption;
        radialOptions.barColor="#f95c43";
        radialOptions.radius=26;
        radialOptions.barWidth=4;
        radialOptions.frameTime=1,
        radialOptions.percentage=true,
        radialOptions.displayNumber=true;
        var indicatorContainer2=radialIndicator("#indicatorContainer-2",radialOptions);
        indicatorContainer3=radialIndicator("#indicatorContainer-3",radialOptions);
        indicatorContainer4=radialIndicator("#indicatorContainer-4",radialOptions);
        indicatorContainer5=radialIndicator("#indicatorContainer-5",radialOptions);
        indicatorContainer6=radialIndicator("#indicatorContainer-6",radialOptions);
    setTimeout(function () {
        indicatorContainer.animate(86);
        indicatorContainer2.animate(86);
        indicatorContainer3.animate(6);
        indicatorContainer4.animate(16);
        indicatorContainer5.animate(66);
        indicatorContainer6.animate(46);
    },200);
    $("#btn_box").on("click",".btn-gradual",function () {
        $(this).addClass("btn-transform").siblings().removeClass("btn-transform");
    });
    $(".type-wrapper").hover(function(){
        $(this).children(".type-list-main").addClass("open");
        $(this).find(".arrow-up").css("display","block").siblings().css("display","none");
    },function(){
        $(this).children(".type-list-main").removeClass("open");
        $(this).find(".arrow-up").css("display","none").siblings().css("display","block");
    });
    $(".type-wrapper").on("click",".type",function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    $(".list-box").on("click","li",function(){
       $(this).addClass("active").siblings().removeClass("active"); 
    });
    var step = 113;
    $(".slide-border-box ul li").mouseenter(function() {
        var _ele = $(".slide-border-box ul li"),
            _eleIndex = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        _ele.removeClass("change-red").eq(_eleIndex).addClass("change-red");
        $(this).parents(".panel-body").find(".change-box div.lyt-box").eq(_eleIndex).fadeIn(300).siblings("div.lyt-box").hide();
        $(".slide-border-right").animate({
            top: 25 + step * _eleIndex
        }, 300);
    });
    $(".company-box ul li").mouseenter(function() {
            _eleIndex = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parents(".panel-body").find(".change-box div.lyt-box").eq(_eleIndex).fadeIn(300).siblings("div.lyt-box").hide();
    });
    $(".event-list ul li").mouseenter(function() {
            _eleIndex = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parents(".panel-body").find(".change-box div.charts").eq(_eleIndex).fadeIn(300).siblings("div.charts").hide();
    });
    $(".remind-message-box").on("click",".remind-message .close-remind",function () {
        $(this).parents(".remind-message-box").fadeOut(1200);
    });
    var headroomOption={
        "tolerance": 5,
        "offset": 205,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    };
    $("#header").headroom(headroomOption);
    var type=0;
    $(window).on("scroll",function () {
        var scrollTop=$(this).scrollTop();
        if(scrollTop>type){
            if(scrollTop>=358){
                $("#header").headroom("destroy").fadeOut(500);
            }else{
                $("#header").headroom(headroomOption).fadeIn(500);
            }
            type=scrollTop;
        }else{
            $("#header").headroom(headroomOption).fadeIn(500);
            type=scrollTop
        }
    });
    var dom = document.getElementById("charts");
    var dom2 = document.getElementById("charts2");
    var dom3 = document.getElementById("charts3");
    var dom4 = document.getElementById("charts4");
    var myChart = echarts.init(dom);
    var myChart2 = echarts.init(dom2);
    var myChart3 = echarts.init(dom3);
    var myChart4 = echarts.init(dom4);
    var colors = ['#48a5ff', '#d14a61', "#8e99a8","#ffffff","#333333","#e6e6e6","#999999"];
    var option = {
        color: colors,
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            top: 70,
            bottom: 70
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 30,
                end: 85,
                zoomOnMouseWheel:false,
                handleStyle:{
                    color:"#2074f2"
                }
            },
            {
                type: 'inside',
                realtime: true,
                start: 30,
                end: 85,
                zoomOnMouseWheel:false,
                borderColor:"#2074f2",
                handleStyle:{
                    color:"#2074f2"
                }
            }
        ],
        xAxis: {
            type: 'category',
            axisTick: {
                alignWithLabel: true,
                length:0
            },
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: colors[6]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '整体压力值  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    },
                    precision:2,
                    padding:[8,10,10,10],
                    backgroundColor:colors[4],
                    textStyle:{
                        color:colors[3]
                    }
                }
            },
            splitLine:{
                show:true,
                interval:1,
                lineStyle:{
                    color:["#e6e6e6"]
                }
            },
            axisLabel:{
                textStyle:{
                    color:colors[2]
                }
            },
            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
        },
        yAxis: {
            type: 'value',
            name:"压力值",
            axisTick: {
                alignWithLabel: true,
                length:0,
                lineStyle:{
                    color:"#333333"
                }
            },
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: colors[5]
                }
            },axisPointer: {
                label: {
                    precision:2,
                    padding:[8,10,10,10],
                    backgroundColor:colors[4],
                    textStyle:{
                        color:colors[3]
                    }
                }
            },
            splitLine:{
                show:true,
                interval:1,
                lineStyle:{
                    color:["#e6e6e6"]
                }
            },
            nameTextStyle:{
                color:colors[2]
            },
            axisLabel:{
                textStyle:{
                    color:colors[2]
                }
            }
        },
        series: {
            name:'舆情压力趋势图',
            type:'line',
            symbol:'emptyCircle',
            symbolSize:8,
            smooth: true,
            areaStyle: {
                normal: {
                    color:"#d6f3fd"
                }
            },
            data: [3.9, 5.9, 11.1, 18.7, 48.3, -69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
    };
    var option2 = {
        color: colors,
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            top: 70,
            bottom: 70
        },
        xAxis: {
            type: 'category',
            axisTick: {
                alignWithLabel: true,
                length:0
            },
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: colors[6]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '整体压力值  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    },
                    precision:2,
                    padding:[8,10,10,10],
                    backgroundColor:colors[4],
                    textStyle:{
                        color:colors[3]
                    }
                }
            },
            splitLine:{
                show:true,
                interval:1,
                lineStyle:{
                    color:["#e6e6e6"]
                }
            },
            axisLabel:{
                textStyle:{
                    color:colors[2]
                }
            },
            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
        },
        yAxis: {
            type: 'value',
            axisTick: {
                alignWithLabel: true,
                length:0,
                lineStyle:{
                    color:"#333333"
                }
            },
            axisLine: {
                onZero: true,
                lineStyle: {
                    color: colors[5]
                }
            },axisPointer: {
                label: {
                    precision:2,
                    padding:[8,10,10,10],
                    backgroundColor:colors[4],
                    textStyle:{
                        color:colors[3]
                    }
                }
            },
            splitLine:{
                show:true,
                interval:1,
                lineStyle:{
                    color:["#e6e6e6"]
                }
            },
            nameTextStyle:{
                color:colors[2]
            },
            axisLabel:{
                textStyle:{
                    color:colors[2]
                }
            }
        },
        series: {
            name:'事件聚合趋势图',
            type:'line',
            smooth: true,
            symbol:'emptyCircle',
            symbolSize:8,
            lineStyle:{
                normal:{
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#00a0e9' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#00e0ff' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            // areaStyle: {
            //     normal: {
            //         color:"#d6f3fd"
            //     }
            // },
            data: [3.9, 5.9, 11.1, 18.7, 48.3, -69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
    };
    myChart.setOption(option,true);
    myChart2.setOption(option2,true);
    myChart3.setOption(option2,true);
    myChart4.setOption(option2,true);
})(jQuery);