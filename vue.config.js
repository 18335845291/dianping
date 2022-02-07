
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/mixin.scss";` //引入全局变量   
            },
        }
    },
}