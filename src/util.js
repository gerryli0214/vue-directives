export function isFunction (fun) {
    return Object.prototype.toString.call(fun) === '[object Function]'
}

export function isObject (fun) {
    return Object.prototype.toString.call(fun) === '[object Object]'
}

// 空函数
export function noop () {}

export function makeMap (str) {
    let arr = str.split(',')
    let obj = {}
    arr.forEach(vv => {
        obj[vv] = true
    });
    return function () {
        let args = arguments
        return obj[args[0]]
    }
}

export function debounce (fn, delay=50) {
    let timer = null
    return function () {
        let args = arguments
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
           fn.apply(this, args)
        }, delay)
    }
}

export function throttle (fn, delay=50) {
    let originTime = new Date().getTime()
    return function () {
        let args = arguments
        let currentTime = new Date().getTime()
        if (currentTime - originTime > delay) {
            fn.apply(this, args)
            originTime = currentTime
        }
    }
}