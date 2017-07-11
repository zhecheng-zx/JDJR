/**
 * Created by zhangxin on 2017/7/10.
 */
(function () {
    var option={
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
    var indicatorContainer=radialIndicator("#indicatorContainer-1",option);
    setTimeout(function () {
        indicatorContainer.animate(86);
    },1000);
    var dom = document.getElementById("charts");
    var myChart = echarts.init(dom);
    var colors = ['#48a5ff', '#d14a61', "#8e99a8","#ffffff","#333333","#cccccc","#999999"];
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
            bottom: 50
        },
        xAxis: {
            type: 'category',
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
                    color: colors[6]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
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
                    color: colors[6]
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
            name:'2016 降水量',
            type:'line',
            smooth: true,
            areaStyle: {
                normal: {
                    color:"#d6f3fd"
                }
            },
            data: [3.9, 5.9, 11.1, 18.7, 48.3, -69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
    };
    myChart.setOption(option,true);
})(jQuery);