/**
 * Created by user on 2017/7/21.
 */

$(function () {
    var data = [
        {
            name: 'Sam S Club正面正面正面',
            value: 10000,
            category: '正面'
        }, {
            name: 'Macys中文',
            value: 6181,
            category: '负面'
        }, {
            name: 'Jurassic World',
            value: 4055,
            category: '负面'
        }, {
            name: 'Charter Communications',
            value: 2467,
            category: '正面'
        }, {
            name: 'Express',
            value: 1112,
            category: '正面'
        }, {
            name: 'Lena Dunham',
            value: 582,
            category: '负面'
        }, {
            name: 'Lewis Hamilton',
            value: 555,
            category: '正面'
        }, {
            name: 'KXAN',
            value: 550,
            category: '正面'
        }, {
            name: 'NCAA baseball tournament',
            value: 273,
            category: '正面'
        }, {
            name: 'Point Break',
            value: 865,
            category: '负面'
        },
        {
            name: 'Amy Schumer负面负面负面',
            value: 4386,
            category: '负面'
        }, {
            name: 'Chick Fil A',
            value: 2244,
            category: '负面'
        }, {
            name: 'Planet Fitness',
            value: 1898,
            category: '正面'
        }, {
            name: 'Pitch Perfect',
            value: 1484,
            category: '正面'
        }, {
            name: 'Home',
            value: 965,
            category: '负面'
        }, {
            name: 'Johnny Depp',
            value: 847,
            category: '正面'
        }, {
            name: 'Mary Ellen Mark',
            value: 1462,
            category: '负面'
        }, {
            name: 'Farrah Abraham',
            value: 566,
            category: '正面'
        }, {
            name: 'Rita Ora',
            value: 360,
            category: '正面'
        }, {
            name: 'Serena Williams',
            value: 2282,
            category: '负面'
        }
    ];

    var chart = echarts.init(document.getElementById('wordcloud'));
    chart.setOption({
        series: [{
            type: 'wordCloud',
            shape: 'circle',
            left: 'center',
            top: 'center',
            width: '90%',
            height: '90%',
            sizeRange: [12, 50],
            rotationRange: [0, 0],
            rotationStep: 45,
            gridSize: 8,
            drawOutOfBounds: false,
            textStyle: {
                normal: {
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    color: function (node) {
                        var data = node.data;
                        if(data.category == '正面'){
                            return 'rgba(' + [30, 144, 255, Math.random()].join(',') + ')';
                        }else {
                            return 'rgba(' + [245, 85, 59, Math.random()].join(',') + ')';
                        }
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: data
        }]
    });

    //初始化滚动条
    $(".title-list").niceScroll({styler: "fb", cursorcolor: "#ebebeb"});
});