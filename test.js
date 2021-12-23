new Vue({
    el: '#app',
    data: {
        fruits: ['りんご','ぶどう','バナナ']
    },
    methods: {
        remove: function () {
            this.fruits.shift()
        }
    },
})