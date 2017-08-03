/**
 * Created by dllo on 17/8/3.
 */
//1.let本身包含作用域 ,块级作用域;
    //var不存在作用域;
{
    //  let只在{}内有效;
    let someA = 10;
    var someB = 20;
}
// console.log(someA);
console.log(someB);

//2.和循环相关
// let出循环失效,只在循环内有效;
for(let i = 0; i < 5; i++){
    console.log(i);
}
// console.log(i);

//3.作用域传递
    //如果使用var定义i,i属于全局
    //如果let定义i,i属于块级作用域,会进行作用域传递;
var a = [];
for(let i = 0; i < 10; i++){
    a[i] = function () {
        console.log(i);
    }
}

// a[9]();

// 4.不存在变量提升;
console.log(b);
var b = 10;

console.log(c);
let c = 20;

// 5暂时性死区;

// 箭头函数;

var f = function () {
    return 5;
}

var f = () => {
    return 5;
}
var f = () => 5;




