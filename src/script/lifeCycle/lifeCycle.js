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

    /*修改echarts开始*/
    var dom = document.getElementById("charts");
    var myChart = echarts.init(dom);
    var colors = ['#48a5ff', '#d14a61', "#8e99a8","#ffffff","#333333","#e6e6e6","#999999"];
    var option = {
        // color: colors,
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data:['七日均线', '压力指数']
        },
        grid: {
            top: 30,
            bottom: 70,
            left:60,
            right:50,
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
            name:"压力指数",
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
        series: [
            {
                name:'标准一',
                type:'line',
                symbol:'none',
                symbolSize:0,
                smooth: true,
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#e6e6e6',
                            type:'dotted'
                        }
                    }
                },
                data: [3.9, 5.9, 4.9, 3.2, 5.2, 6.2, 4.2, 6.6, 5.4, 8.4, 3.3, 2.7]
            },{
                name:'标准二',
                type:'line',
                symbol:'none',
                symbolSize:0,
                smooth: true,
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#e6e6e6',
                            type:'dotted'
                        }
                    }
                },
                data: [-9.9, -5.9, -4.9, -3.2, -5.2, -6.2, -4.2, -6.6, -5.4, -8.4, -3.3, -2.7]
            },{
                name:'压力指数',
                type:'line',
                symbol:'emptyCircle',
                symbolSize:8,
                smooth: true,
                itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#48a5ff'
                        }
                    }
                },
                data: [4, 7, 9, 18.7, 28.3, -13.2, 11.6, 16.6, 25.4, 18.4, 10.3, 0.7]
            },{
                name:'七日均线',
                type:'line',
                smooth:true,
                itemStyle:{
                    normal:{
                        lineStyle:{
                            color:'#d14a61'
                        }
                    }
                },
                data:[]
            }
        ]
    };
    myChart.setOption(option,true);
    myChart.on("legendselectchanged",function (params) {
       if(params.name=="七日均线"&&params.selected['七日均线']==false&&option.series[3].data.length==0){
            option.series[3].data=[5,6,8,20,30,12,11,20,40,30,10,12];
            myChart.setOption(option,true);
       }
    });
    /**修改echarts 结束*/
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
    myChart.on("click",function(params){
        console.log(params)
    })

    $('#hotTbale').bootstrapTable(options);
    $('#sld,#sld2').selectpicker().on('changed.bs.select',function () {
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