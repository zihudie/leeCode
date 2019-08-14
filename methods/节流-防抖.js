//https://blog.csdn.net/weixin_36852235/article/details/83045751

/**
 * 防抖
 * @param {要执行的函数} fn  
 * @param {延迟执行时间} delay 
 * 
 * 事件最后一刻触发
 * 百度联想关键词
 */
function debounce(fn, delay) {
    let timer
    return function () {
        let ctx = this
        let arg = arguments

        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.call(ctx, arg)
        }, delay);
    }
}

/**
 * 节流
 * 会在限制时间内至少要执行一次
 * @param {*} fn 
 * @param {*} limit 
 * 
 */
function throttle(fn, limit) {
    let lastTime, timer
    return function () {
        let ctx = this
        let args = arguments
        if (!lastTime) {
            fn.call(ctx, args)
            lastTime = Date.now()
        } else {
            clearTimeout(timer)
            timer = setTimeout(() => {
                if (Date.now() - lastTime >= limit) {
                    fn.call(ctx, args)
                    lastTime = Date.now()
                }
            }, limit - (Date.now() - lastTime));
        }
    }
}