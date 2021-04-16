export const debounce = function (fn, delay) {
    let timer;
    return function () {
        const context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }

}