var app  = new Vue({
    el:'#app',
    data(){
        return{
            text:"Hello world!"
        }
    },
    methods:{
        PUSH:function(){
            this.text = this.text.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el:'app6',
    data: {
        message:'Hello Vue!'
    }
})