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

console.log(app.text)

var app2 = new Vue({
    el:'#app2',
    data: {
        message:'Hello Vue!'
    }
})

var app3 = new Vue({
    el:'#app3',
    data:{
        colors:["Red","Blue"]
    }
})

var user = {name:'Tomoki',age:23,tel:'000-000'}
user.country = '日本'
console.log(user)

var app  = new Vue({
    el:'#track-text',
    data(){
        return{
            text: ""
        }
    },
    methods:{
        PUSH:function(){
            this.text = "hello track"
        }
    }
})
