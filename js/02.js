$(function () {
    // 默认隐藏右键菜单
    $(".list").css("display", "none");
    // 页面点击后右键菜单消失
    $(document).click(function () {
        $(".list").css('display', "none");
    });

    // 自定义菜单
    $(document).on("contextmenu", function (event) {
        var event = event || window.event;
        $(".list").css({
            "display": "block",
            "left": event.pageX,
            "top": event.pageY
        });
        // 让原始的右键菜单失效
        return false;
    })

    $("li").click(function () {
        alert($(this).text());
    })
});