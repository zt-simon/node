/**
 * Created by dllo on 17/8/1.
 */
//Array在ES5新增的方法中，参数都是function类型;

//1.forEach
var arr = [3,6,9,10];
var sum = 0;
arr.forEach(function (value,index,arr1) {
    sum+=value;
   // console.log(value);// 参数1:数组中的值;
   // console.log(index);//参数2: 数组下标;
   // console.log(arr1);//参数3: 数组本身;
})
//console.log(sum);//数组求和;


//2.map 映射;
var arr1 = [4,6,7,9];

var arr2= arr1.map(function (t) {
    return t-1; //  注意此方法回调函数中要有return  否则输出的数组内容为undefined;
})
// console.log(arr2);



var users = [
    {name: "张含韵", email: "zhang@email.com"},
    {name: "江一燕",  email: "jiang@email.com"},
    {name: "李小璐",  email: "li@email.com"}
];

var emails = users.map(function (user) {
   //方法1 return user['name']  两种方法都可用;

   //方法2
    return user.name;  // 返回users 中对应json 的key;
})

// console.log(emails);

//3.filter  过滤;
    //对数组进行筛选
var arr3 = [0,3,5,7,8];

var arr4 = arr3.filter(function (value) {
    return value>3; // 筛选条件;
})

//console.log(arr4); // 返回一个满足条件的数组;


//4.some
    //  回调函数中只返回布尔值;
var arr5 = [0,3,9,11,8];

var b = arr5.some(function (t) {
    return 0; // 只返回布尔值 true false;
})
// console.log(b);

// 判断数组中的值,有一个大于3即返回真true;
if(arr5.some(function (t) {
       return t>3;
    })){
    // console.log('你赢了');
}
//5. every
    //返回的也是布尔值;

if(arr5.every(function (t) {
        return t>3;
    })) {
    // console.log('123');
}
//6. indexOf

var arr6 = [3,7,7,9,9,1];
// indexOf()
        //有两个参数,参数1:要匹配的参数;
        //参数2: 从数组的哪个位置(下标)开始匹配;
        //  返回值为所在位置的下标;
// console.log(arr6.indexOf(9,4));


//7. lastIndexOf
    //该方法是从数组的末尾开始查找,而不是从头开始.
    // 参数2的默认值是从数组长度-1开始;
//8. reduce 还是有点不太懂;
    // 回调函数中四个参数;
//参数1: 默认为数组第一个值;
//参数2: 当前值;
//参数3: 数组下标;
//参数4: 数组本身;
var arr7 = [1,2,3,3,4];

var a = arr7.reduce(function (p,c,i,a) {
    return c;
})
console.log(a);

//9. reduceRight 与reduce相反;


