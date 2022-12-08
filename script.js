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

console.log(app.message)

var app2 = new Vue({
    el:'app2',
    data: {
        message:'Hello Vue!'
    }
})

var app3 = new Vue({
    el:'app3',
    data:{
        colors:['Red','Green','Blue']
    }
})