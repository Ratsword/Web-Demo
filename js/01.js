// 一、点击空白区域自动隐藏模态框
// 方法1
function fun1() {
    // 背景面板
    $(".model").click(function () {
        $(this).fadeOut("normal");
    });
    // 内容面板
    $(".model-dialog").click(function (event) {
        event.stopPropagation();//阻止冒泡，防止事件传播过来
    });
}
// 方法2
function fun2() {
    /* 判断点击事件在区域外：
    ①点击事件的对象不是目标区域本身
    ③事件对象同时也不是目标区域的子元素
    */
    $(".model").click(function(event) {
        var dialog = $(".model-dialog");//目标区域
        if (!dialog.is(event.target) && dialog.has(event.target).length === 0) {
            $(this).fadeOut("normal");
        }
    });
}

$(function() {
    // 这里简单地使用了jQuery的淡入淡出动画效果
    // 1.弹出模态框
    $(".control>button").click(function () {
        $(".model").fadeIn(300);
    });

    // 2.关闭模态框
    $(".btn-close, .close").click(function () {
        $(".model").fadeOut(300);
    });

    // 3.提升体验：点击留白区域
    fun2();
});