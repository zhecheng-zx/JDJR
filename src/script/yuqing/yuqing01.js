/**
 * Created by zhangxin on 2017/6/27.
 */
$("#header").headroom({
    "tolerance": 5,
    "offset": 205,
    "classes": {
        "initial": "animated",
        "pinned": "slideDown",
        "unpinned": "slideUp"
    }
});
// to destroy
$("#header").headroom("destroy");