const lazyLoad = function(Vue) {
    var img = document.getElementsByTagName('img');
    function lazyload() {
        console.log('滚动lazy');
        //监听页面滚动事件
        var seeHeight = window.innerHeight; //可见区域高度
        var scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
        for (var i = 0; i < img.length; i++) {
            if (img[i].getAttribute('data-image-show')) continue;
            if (img[i].offsetTop < seeHeight + scrollTop) {
                console.log(img[i].offsetTop, seeHeight, scrollTop);
                if (img[i].getAttribute('src') == Vue.$vuiLazyLoad.img) {
                    img[i].src = img[i].getAttribute('data-src');
                    img[i].setAttribute('data-image-show', 'true');
                }
            }
        }
    }
    Vue.$vuiLazyLoad = {
        img:
            'https://github.com/zxpsuper/Demo/blob/master/images/avatar.jpg?raw=true',
        imgLength: 0,
    };

    var lazyImageObserver, evenFunction;

    if (IntersectionObserver) {
        lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                let lazyImage = entry.target;
                // 如果元素可见
                if (entry.intersectionRatio > 0) {
                    if (lazyImage.getAttribute('src') == Vue.$vuiLazyLoad.img) {
                        lazyImage.src = lazyImage.getAttribute('data-src');
                    }
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
    } else {
        lazyload(); //页面载入完毕加载可是区域内的图片
        evenFunction = debounce(lazyload, 800);
        window.removeEventListener('scroll', evenFunction);
        window.addEventListener('scroll', evenFunction);
    }
    return {
        name: 'lazy',
        bind(el, binding) {
            el.setAttribute('src', Vue.$vuiLazyLoad.img);
            el.setAttribute('data-src', binding.value);
            Vue.$vuiLazyLoad.imgLength++;
        },
        inserted(el) {
            if (IntersectionObserver) lazyImageObserver.observe(el);
        },
        unbind() {
            Vue.$vuiLazyLoad.imgLength--;
            if (!Vue.$vuiLazyLoad.imgLength && evenFunction)
                window.removeEventListener('scroll', evenFunction);
        },
    };
};

export default lazyLoad;

function debounce(event, time) {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            event.apply(this, args);
        }, time);
    };
}
