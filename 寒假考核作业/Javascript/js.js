window.onload = function() {
    var input = document.getElementsByClassName('search'); //获取搜索框
    var img = document.getElementsByClassName('pointing'); //获取第二页10个小图片
    var ul = document.getElementById('move-container'); //获取第二页的容器
    var btn = document.getElementById('btn'); //获取搜索按钮
    var opacity = document.getElementById('opacity'); //获取超链接
    var arrow = document.getElementById('arrow-container'); //获取箭头图片的容器
    var arrowbtn = document.getElementById('arrow'); //获取箭头按钮
    var view = document.getElementById('view'); //获取视频背景容器
    var height = view.clientHeight; //获取视频背景的高度
    var display = document.getElementsByClassName('display'); //获取display:none;的div
    var item = document.getElementsByClassName('item-2'); //获取li
    var list = document.getElementsByClassName('list-style'); //获取图片的定义
    var big = document.getElementById('white-big'); //图片的滤镜
    var little = document.getElementById('white-little'); //图片的滤镜
    var index = 0; //表示第几张图片正在展示
    var indexs = 0; //表示第几个小图片放大，文字变蓝
    var images = 0; //表示第三页的第li个盒子变化
    var alpha = 100; //设置透明度
    var first = document.getElementById('changeone');
    var alphatwo = 100; //设置透明度
    var alphathree = 100; //设置透明度
    var alphafour = 100; //设置透明度
    var first = document.getElementById('changeone'); //选出导航栏的超链接
    var second = document.getElementById('changetwo'); //选出导航栏的超链接
    var third = document.getElementById('changethree'); //选出导航栏的超链接
    var fourth = document.getElementById('changefour'); //选出导航栏的超链接
    var pointings = document.getElementsByClassName('pointings'); //获取第三页的图片与文字container
    var image = document.getElementsByClassName('image') //获取需要的图片
    var containerimg = document.getElementsByClassName('container-images'); //获取第三页的大容器
    var box = document.getElementsByClassName('box'); //获取员工的介绍
    var h6 = document.getElementsByTagName('h6'); //获取底部h6
    var imging = document.getElementsByClassName('imging'); //获取底部的图片
    var displayed = document.getElementsByClassName('displaying'); //获取第一个大的隐藏的ul
    var displayedtwo = document.getElementsByClassName('displaying2'); //获取其余小的隐藏的ul
    var d = 100; //设置透明度
    var b = 100; //设置透明度
    var c = 100; //设置透明度
    var time = null; //定时器
    var timetwo = null; //定时器
    var timethree = null; //定时器
    var timefour = null; //定时器
    var timing = null; //定时器
    var timingtwo = null; //定时器
    var timingthree = null; //定时器
    var timephoto = null; //定时器
    var timerphoto = null; //定时器
    first.onmouseover = function() {
        startMove(40);
    }
    first.onmouseout = function() {
        startMove(100);
    }
    second.onmouseover = function() {
        startMovetwo(40);
    }
    second.onmouseout = function() {
        startMovetwo(100);
    }
    third.onmouseover = function() {
        startMovethree(40);
    }
    third.onmouseout = function() {
        startMovethree(100);
    }
    fourth.onmouseover = function() {
        startMovefour(40);
    }
    fourth.onmouseout = function() {
        startMovefour(100);
    }

    function startMove(iTarget) {
        clearInterval(time);
        time = setInterval(function() {
            var speed1 = 0;
            if (alpha < iTarget) {
                speed1 = 10;
            } else {
                speed1 = -10;
            }
            if (alpha == iTarget) {
                clearInterval(time);
            } else {
                alpha += speed1;
                first.style.opacity = alpha / 100;
            }
        }, 30)
    }


    function startMovetwo(iTargettwo) {
        clearInterval(timetwo);
        timetwo = setInterval(function() {
            var speed2 = 0;
            if (alphatwo < iTargettwo) {
                speed2 = 10;
            } else {
                speed2 = -10;
            }
            if (alphatwo == iTargettwo) {
                clearInterval(timetwo);
            } else {
                alphatwo += speed2;
                second.style.opacity = alphatwo / 100;
            }
        }, 30)
    }


    function startMovethree(iTargetthree) {
        clearInterval(timethree);
        timethree = setInterval(function() {
            var speed3 = 0;
            if (alphathree < iTargetthree) {
                speed3 = 10;
            } else {
                speed3 = -10;
            }
            if (alphathree == iTargetthree) {
                clearInterval(timethree);
            } else {
                alphathree += speed3;
                third.style.opacity = alphathree / 100;
            }
        }, 30)
    }

    function startMovefour(iTargetfour) {
        clearInterval(timefour);
        timefour = setInterval(function() {
            var speed4 = 0;
            if (alphafour < iTargetfour) {
                speed4 = 10;
            } else {
                speed4 = -10;
            }
            if (alphafour == iTargetfour) {
                clearInterval(timefour);
            } else {
                alphafour += speed4;
                fourth.style.opacity = alphafour / 100;
            }
        }, 30)
    }
    //导航栏中的超链接透明度变化
    input[0].onmouseover = function() {
        input[0].className = 'search active';
    }
    input[0].onmouseout = function() {
            input[0].className = 'search';
        }
        //搜索框框架的颜色变化

    btn.onmouseover = function() {
        btn.style.opacity = 0.3;
    }
    btn.onmouseout = function() {
        btn.style.opacity = 1;
    }
    opacity.onmouseover = function() {
        opacity.style.opacity = 0.7;
    }
    opacity.onmouseout = function() {
            opacity.style.opacity = 1;
        }
        //图标的透明度变化

    setInterval(function() {
        if (arrow.offsetTop <= 8) {
            arrow.style.top = arrow.offsetTop + 1 + 'px';
        } else {
            arrow.style.top = arrow.offsetTop - 8 + 'px';
        }
    }, 75);
    //小箭头的图片移动效果
    arrowbtn.onclick = function() {
            clearInterval(timer);
            var i = 0;
            var a = document.documentElement.scrollTop;
            if (a >= i) {
                i = a;
            }
            var timer = setInterval(function() {
                if (i <= height) {
                    window.scrollTo(0, i);
                    var m = Math.ceil(1 / 50 * (height - a))
                    i = i + m;
                } else {
                    i = 0;
                    clearInterval(timer);
                }
            }, 6);
        }
        //点击箭头图标向下缓慢移动
    var clearActives = function() {
        for (var i = 0; i < img.length; i++) {
            img[i].className = 'pointing';
        }
    }
    var goIndexs = function() {
        clearActives();
        img[indexs].className = 'pointing active';
    }
    for (i = 0; i < img.length; i++) {
        img[i].onmouseover = function() {
            var pointIndexs = this.getAttribute('data-index');
            indexs = pointIndexs;
            img[indexs].className = 'pointing active';
            goIndexs();
        }
    }
    ul.onmouseout = function() {
            for (var a = 0; a <= 9; a++) {
                img[a].className = 'pointing';
            }
        }
        //第二页图片的动画
    var clearimage = function() {
        for (var i = 0; i < pointings.length; i++) {
            pointings[i].className = 'pointings';
            image[i].className = 'image';
        }
    }
    var goimage = function() {
        clearimage();
        pointings[images].className = 'pointings active';
        image[images].className = 'image active';
    }
    for (var i = 0; i < pointings.length; i++) {
        pointings[i].addEventListener('mouseover', function() {
            var pointingindex = this.getAttribute('data-image');
            images = pointingindex;
            goimage();
        })
    }
    containerimg[0].onmouseout = function() {
            for (var b = 0; b <= 7; b++) {
                image[b].className = 'image';
                pointings[b].className = 'pointings';
            }
        } //第三页鼠标划过的动画

    var clearActive = function() {
        for (var i = 0; i < item.length; i++) {
            item[i].className = 'item-2';
            display[i].className = 'display';
            list[i].className = 'list-style';
        }
    }
    var goIndex = function() {
        clearActive();
        item[index].className = 'item-2 active';
        display[index].className = 'display active';
        list[index].className = 'list-style active';
    }
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener('click', function() {
            var pointIndex = this.getAttribute('data-index');
            big.style.width = '900px';
            little.style.width = '900px';
            index = pointIndex;
            goIndex();
        })
    }

    setInterval(function() {
        var quick = 60;
        if (big.offsetWidth != '0px') {
            big.style.width = big.offsetWidth - quick + 'px';
        } else {
            clearInterval(timephoto);
        }
    }, 30)
    setInterval(function() {
            var quicking = 30;
            if (little.offsetWidth != '0px') {
                little.style.width = little.offsetWidth - quicking + 'px';
            } else {
                clearInterval(timerphoto);
            }
        }, 30)
        //点击文字图片转换的动画


    for (var a = 0; a <= 2; a++) {
        box[a].onmouseover = function() {
            this.className = 'box active';
        }
        box[a].onmouseout = function() {
            this.className = 'box';
        }
    }
    //员工盒子的动画*/
    h6[0].onmouseover = function() {
        o(30);
    }
    h6[0].onmouseout = function() {
        o(100);
    }

    function o(number) {
        clearInterval(timing);
        timing = setInterval(function() {
            if (d < number) {
                speeding = 10;
            } else {
                speeding = -10;
            }
            if (d == number) {
                clearInterval(timing);
            } else {
                d += speeding;
                h6[0].style.opacity = d / 100;
            }
        }, 30)
    }
    h6[1].onmouseover = function() {
        m(30);
    }
    h6[1].onmouseout = function() {
        m(100);
    }

    function m(number2) {
        clearInterval(timingtwo);
        timingtwo = setInterval(function() {
            if (b < number2) {
                speeding = 10;
            } else {
                speeding = -10;
            }
            if (b == number2) {
                clearInterval(timingtwo);
            } else {
                b += speeding;
                h6[1].style.opacity = b / 100;
            }
        }, 30)
    }
    h6[2].onmouseover = function() {
        k(30);
    }
    h6[2].onmouseout = function() {
        k(100);
    }

    function k(number3) {
        clearInterval(timingthree);
        timingthree = setInterval(function() {
            if (c < number3) {
                speeding = 10;
            } else {
                speeding = -10;
            }
            if (c == number3) {
                clearInterval(timingthree);
            } else {
                c += speeding;
                h6[2].style.opacity = c / 100;
            }
        }, 30)
    }
    //底部三个文字的透明度变化动画
    imging[0].onmouseover = function() {
        imging[0].className = 'imging active';
        displayed[0].className = 'displaying active';
    }
    imging[0].onmouseout = function() {
        imging[0].className = 'imging';
        displayed[0].className = 'displaying ';
    }
    imging[1].onmouseover = function() {
        imging[1].className = 'imging active';
        displayedtwo[0].className = 'displaying2 active';
    }
    imging[1].onmouseout = function() {
        imging[1].className = 'imging';
        displayedtwo[0].className = 'displaying2';
    }
    imging[2].onmouseover = function() {
        imging[2].className = 'imging active';
        displayedtwo[1].className = 'displaying2 active';
    }
    imging[2].onmouseout = function() {
        imging[2].className = 'imging';
        displayedtwo[1].className = 'displaying2';
    }
    imging[3].onmouseover = function() {
        imging[3].className = 'imging active';
        displayedtwo[2].className = 'displaying2 active';
    }
    imging[3].onmouseout = function() {
        imging[3].className = 'imging';
        displayedtwo[2].className = 'displaying2';
    }
    imging[4].onmouseover = function() {
        imging[4].className = 'imging active';
        displayedtwo[3].className = 'displaying2 active';
    }
    imging[4].onmouseout = function() {
        imging[4].className = 'imging';
        displayedtwo[3].className = 'displaying2';
    }
    imging[5].onmouseover = function() {
        imging[5].className = 'imging active';
        displayedtwo[4].className = 'displaying2 active';
    }
    imging[5].onmouseout = function() {
        imging[5].className = 'imging';
        displayedtwo[4].className = 'displaying2';
    }
    imging[6].onmouseover = function() {
        imging[6].className = 'imging active';
        displayedtwo[5].className = 'displaying2 active';
    }
    imging[6].onmouseout = function() {
        imging[6].className = 'imging';
        displayedtwo[5].className = 'displaying2';
    }
    imging[7].onmouseover = function() {
        imging[7].className = 'imging active';
        displayedtwo[6].className = 'displaying2 active';
    }
    imging[7].onmouseout = function() {
            imging[7].className = 'imging';
            displayedtwo[6].className = 'displaying2';
        } //底部的鼠标划过隐藏ul出现与消失动画
}

function getScrollTop() {
    var scrollTop = 0; //定义变量
    var nav = document.getElementsByClassName('nav-container'); //获取导航栏
    var height = view.clientHeight; //获取视频背景的高度
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    } //取得当前滑轮距离顶端的距离
    var scrollFunc = function(e) {
        e = e || window.event;
        if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件    
            if (scrollTop > height && e.wheelDelta < 0) { //当滑轮向上滚动时 
                nav[0].className = 'nav-container active';
            } else {
                nav[0].className = 'nav-container';
            }
        } else {
            if (e.detail) { //Firefox滑轮事件 
                if (scrollTop > height && e.detail < 0) { //当滑轮向上滚动时 
                    nav[0].className = 'nav-container active';
                } else {
                    nav[0].className = 'nav-container';
                }
            }
        }
    }
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    } //适用火狐浏览器

    window.onmousewheel = document.onmousewheel = scrollFunc; //适用浏览器IE，谷歌滑轮事件  
}

function getScrollToping() {
    var scrollToping = 0; //定义变量
    var height = view.clientHeight; //获取视频背景的高度
    var GuDing = document.getElementsByClassName('GuDing-btn'); //获取返回顶部的按钮
    var text = document.getElementsByClassName('text-btn'); //获取按钮旁边的“回到顶部”的文字框
    var JanTou = document.getElementById('JanTou'); //获取按钮内部的图片
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollToping = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollToping = document.body.scrollTop;
    } //取得当前滑轮距离顶端的距离
    GuDing[0].onmouseover = function() {
        text[0].className = 'text-btn active';
        JanTou.style.opacity = 1;
    }
    GuDing[0].onmouseout = function() {
            text[0].className = 'text-btn';
            JanTou.style.opacity = 0.4;
        } //鼠标划过按钮显示文字，内部图片变色
    GuDing[0].onclick = function() {
            window.scrollTo(0, 0);
        } //点击按钮回到顶部
    var scrollFunce = function(f) {
        f = f || window.event;
        if (f.wheelDelta) { //判断浏览器IE，谷歌滑轮事件    
            if (scrollToping > (2 * height)) {
                GuDing[0].className = 'GuDing-btn active';
            } else {
                GuDing[0].className = 'GuDing-btn';
            }
        } else {
            if (f.detail) { //Firefox滑轮事件 
                if (scrollToping > (2 * height)) {
                    GuDing[0].className = 'GuDing-btn active';
                } else {
                    GuDing[0].className = 'GuDing-btn';
                }
            }
        }
    }
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunce, false);
    } //适用火狐浏览器

    window.onmousewheel = document.onmousewheel = scrollFunce; //适用浏览器IE，谷歌滑轮事件 
}

document.onscroll = function() {
        getScrollTop(); //当鼠标下滑到一定高度时，鼠标向上滑动导航栏出现动画
        getScrollToping(); //当鼠标下滑到一定高度时，回到顶部的按钮出现

    } //执行上方两个函数