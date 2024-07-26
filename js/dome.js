$(function () {
    $('#fullpage').fullpage({
        //触屏滚动
        touchSensitivity:10,
        //设置每屏颜色
        // sectionsColor: ['#f00', '#0f0', '#ff0', '#00f', '#f0f'],
        //设置右侧导航圆点
        navigation: true,
        //是否循环滚动，与 loopTop 及 loopBottom 不兼容
        continuousVertical: true,
        //项目导航的位置，可选 left 或 right
        navigationPosition: 'left',
        // 给每屏设 置对应的锚点
        anchors: ["page1", "page2", "page3", "page4", "page5"],
        //绑定菜单，设定的相关属性与anchors 的值对应后，菜单可以控制滚动
        menu: "#menu",
        //
        easingcss3: 'cubic-bezier(0.175,0.885,0.320,1.5)',
        /* 回调函数，滚动到某一屏后的回调函数，接收 anchorLink 和 index 
        两个参数anchorLink 是锚链接的名称，index 是序号，从1开始计算 */
        afterLoad: function (link, index) {
            //第一屏
            if (index == 1) {
                $('.img-1').addClass('active1-1');
                $('.h1').addClass('active1-2');
            }
            //第二屏
            if (index == 2) {
                $('.left img').addClass('img-block');
                $('.left .font').addClass('font-block');
                $('.right').addClass('right-block');
            }
            //第三屏
            if (index == 3){
                $(".zy").addClass('zy-block');
                $(".img-2").addClass('img-2-block');
                $('span').addClass('span-block');
                $('.zy-bottom li i').addClass('i-block');
                $(".zy-bottom li:eq(0)").addClass('html');
                $(".zy-bottom li:eq(1)").addClass('css');
                $(".zy-bottom li:eq(2)").addClass('js');
                $(".zy-bottom li:eq(3)").addClass('bos');
                $(".zy-bottom li:eq(4)").addClass('php');
                $(".zy-bottom li:eq(5)").addClass('my');
            }
            //第四屏
            if (index == 4){
                $('.xmjy li').addClass('li1');
            }
            //第五屏
            if (index == 5){
                $('.lx img').addClass('img-5-block');
                $('.lx span:eq(0)').addClass('span-block0');
                $('.lx span:eq(1)').addClass('span-block1');
                $('.lx span:eq(2)').addClass('span-block2');
                $('.lx span:eq(3)').addClass('span-block3');
            }
        },
        //滚动前的回调函数index 是离开的“页面”的序号，从1开始计算；
        onLeave(index,nextIndex,direction){
            if (index == 1){
                $('.img-1').removeClass('active1-1');
                $('.h1').removeClass('active1-2');
            }
            if (index == 2){
                $('.left img').removeClass('img-block');
                $('.left .font').removeClass('font-block');
                $('.right').removeClass('right-block');
            }
            if (index == 3){
                $(".zy").removeClass('zy-block');
                $(".img-2").removeClass('img-2-block');
                $('span').removeClass('span-block');
                $('.zy-bottom li i').removeClass('i-block');
                $(".zy-bottom li:eq(0)").removeClass('html');
                $(".zy-bottom li:eq(1)").removeClass('css');
                $(".zy-bottom li:eq(2)").removeClass('js');
                $(".zy-bottom li:eq(3)").removeClass('bos');
                $(".zy-bottom li:eq(4)").removeClass('php');
                $(".zy-bottom li:eq(5)").removeClass('my');
            }
            if (index == 4){
                $('.xmjy li').removeClass('li1');
            }
            if (index == 5){
                $('.lx img').removeClass('img-5-block');
                $('.lx span:eq(0)').removeClass('span-block0');
                $('.lx span:eq(1)').removeClass('span-block1');
                $('.lx span:eq(2)').removeClass('span-block2');
                $('.lx span:eq(3)').removeClass('span-block3');
            }
        }
    });
});