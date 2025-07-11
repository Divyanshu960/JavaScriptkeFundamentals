const mySym = Symbol("key1")

const JsUser = {


    name: "Divyanshu",
    "full name": "div cha",
    id: 21,
    isLoggedIn: false,
    [mySym]: "key 1"
}
// Object.freeze(JsUser)
JsUser.id = 22
console.log(JsUser.name);
console.log(JsUser.isLoggedIn);
console.log(JsUser.id);
console.log(JsUser["full name"]);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("HELLO JS USER")
}
JsUser.greeting2 = function(){
    console.log(`HELLO JS USER ${this.name}`)
}

// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {...obj1,...obj2}
// console.log(obj3)

const Users = [
    {
        id:1,
        name:'dinesh',
        email: 'dinesh@hpack.co.in'
    },
    {
        id:2,
        name:'dinesh',
        email: 'dinesh@hpack.co.in'
    },
    {
        id:3,
        name:'dinesh',
        email: 'dinesh@hpack.co.in'
    }
]
console.log(Users[0].id)
console.log(Object.values(Users))
console.log(Object.keys(Users))
console.log(Object.entries(Users))