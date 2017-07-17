/**
 * Created by zhangxin on 2017/7/16.
 */
$(function () {
    // var headroomOption={
    //     "tolerance": 5,
    //     "offset": 205,
    //     "classes": {
    //         "initial": "animated",
    //         "pinned": "slideDown",
    //         "unpinned": "slideUp"
    //     }
    // };
    // $("#header").headroom(headroomOption);
    // var type=0;
    // $(window).on("scroll",function () {
    //     var scrollTop=$(this).scrollTop();
    //     if(scrollTop>type){
    //         if(scrollTop>=376){
    //             $("#header").headroom("destroy").fadeOut(500);
    //         }else{
    //             $("#header").headroom(headroomOption).fadeIn(500);
    //         }
    //         type=scrollTop;
    //     }else{
    //         $("#header").headroom(headroomOption).fadeIn(500);
    //         type=scrollTop
    //     }
    // });
    var dom = document.getElementById("charts");
    var myChart = echarts.init(dom);
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
            top: 30,
            bottom: 70,
            left:60,
            right:50,
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
    myChart.setOption(option,true);
    var options = {
        columns : [ {
            field : 'name',
            align:"left",
            valign: "middle",
            title : "标题"
        }, {
            field : 'exponent',
            title : "情感",
            width : "100px",
            align:"center",
            valign: "middle"


        }, {
            field : 'number',
            title : "媒体来源",
            align:"left",
            valign: "middle",

        }, {
            field : 'count',
            title : "发布时间",
            align:"center",
            valign: "middle",
            sortable: true

        }, {
            field : 'state',
            align:"center",
            valign: "middle",
            title : "热度值",
            sortable: true
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

    $('#hotTbale').bootstrapTable(options);
});