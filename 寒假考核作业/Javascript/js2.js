window.onload = function() {
    var points = document.getElementsByClassName('point'); //获取图片点
    var index = 0; //表示第几个ul在展示
    var indexs = 0; //定义鼠标移入移出
    var first = document.getElementById('changeone'); //获取导航栏中的超链接
    var second = document.getElementById('changetwo'); //获取导航栏中的超链接
    var third = document.getElementById('changethree'); //获取导航栏中的超链接
    var fourth = document.getElementById('changefour'); //获取导航栏中的超链接
    var container = document.getElementsByClassName('container'); //获取容器
    first.onmouseover = function() {
        first.style.color = "blue";
    }
    first.onmouseout = function() {
        first.style.color = "black";
    }
    second.onmouseover = function() {
        second.style.color = "blue";
    }
    second.onmouseout = function() {
        second.style.color = "black";
    }
    third.onmouseover = function() {
        third.style.color = "blue";
    }
    third.onmouseout = function() {
        third.style.color = "black";
    }
    fourth.onmouseover = function() {
        fourth.style.color = "blue";
    }
    fourth.onmouseout = function() {
            fourth.style.color = "black";
        }
        //超链接的鼠标移入移出事件
    var clearActive = function() {
        for (var i = 0; i < points.length; i++) {
            points[i].className = 'point';
            container[i].className = 'container';
        }
    }
    var goIndex = function() {
        clearActive();
        points[index].className = 'point active';
        container[index].className = 'container active';

    }
    var goNext = function() {
        if (index < 10) {
            index++;
        } else {
            index = 0;
        }
        goIndex();
    }
    var gobefore = function() {
        if (index == 0) {
            index = 10;
        } else {
            index--;
        }
        goIndex();
    }
    for (var i = 0; i < points.length; i++) {
        points[i].addEventListener('click', function() {
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();
        })
        points[i].onmouseover = function() {
            var pointing = this.getAttribute('data-index');
            indexs = pointing;
            points[indexs].className = 'point active';
        }

        points[i].onmouseout = function() {
            points[indexs].className = 'point';
            points[index].className = 'point active';
        }
    }
    var scrollFunc = function(e) {
        e = e || window.event;
        if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件    
            if (e.wheelDelta > 0) { //当滑轮向下滚动时
                for (var i = 0; i < points.length; i++) {
                    goIndex();
                }
            } else {
                var pointing = points[i].getAttribute('data-index');
                indexs = pointing;
                points[indexs].className = 'point active';

            }
        } else {
            if (e.detail) { //Firefox滑轮事件 
                if (e.detail > 0) { //当滑轮向上滚动时 
                    goNext();
                } else {
                    gobefore();
                }
            }
        }
    }
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    } //适用火狐浏览器

    window.onmousewheel = document.onmousewheel = scrollFunc; //适用浏览器IE，谷歌滑轮事件  
}