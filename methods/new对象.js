/**
 *  new 一个对象的 过程方法
 * @param {*} fun 
 *  创建一个新对象，对象继承构造函数的原型对象
 *  执行构造函数，this 指向新实例
 *  如果构造函数返回了一个新对象，则取代之前创建的新实例
 */

var new1 = function (fun) {
    var o = Object.create(fun.prototype);
    console.log("oooo", o);
    var k = fun.call(o);
    console.log("kkkk", k);

    if (typeof k === "object") {
        return k;
    } else {
        return o;
    }
};


function M() {
    this.name = "yatou";
}
var n1 = new1(M);

var o2 = Object.create(M)
o2.__proto__ = M.prototype

/**
 * 
 */
var i = [1, 2, 4]

for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        if (typeof obj[i] !== 'object') {
            newObj[i] = obj[i]
        } else {
            deepCopy(obj[i])
        }
    }

}
/**
 * 深拷贝
 * @param {} obj 
 */
function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return
    }

    var newObj = obj instanceof Array ? [] : {}
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (typeof obj[i] !== 'object') {
                newObj[i] = obj[i]
            } else {
                deepCopy(obj[i])
            }
        }

    }
    return newObj;
}


var arr = [1, 2, 4, 5]
var obj = {
    name: "xiaobai",
    age: 18
}
/**
 * for in 
 * 不一定按照顺序进行遍历
 * 3.使用for in会遍历数组所有的可枚举属性，包括原型。例如上栗的原型方法method和name属性
所以for in更适合遍历对象，不要使用for in遍历数组。

记住，for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。

for of遍历的只是数组内的元素，而不包括数组的原型属性method和索引name

Array.prototype.method=function(){
　　console.log(this.length);
}
var myArray=[1,2,4,5,6,7]
myArray.name="数组";
for (var value of myArray) {
  console.log(value);
}
 */
for (var i in obj) {
    console.log("for in", obj[i])
}

for (var i in arr) {
    console.log("for in", obj[i])
}

arr.forEach(element => {
    console.log(element)
    if (elemnt == 2) {
        console.log("2");
        break;
    }
});

function bar() {
    a = () => {
        console.log(this, 'this指向定义的时候外层第一个普通函数'); // 
    }; // 在bar中定义 this继承于bar函数的this指向
}
let a,
    barObj = {
        msg: 'bar的this指向'
    };
fooObj = {
    msg: 'foo的this指向'
};
bar.call(barObj); // 将bar的this指向barObj
foo.call(fooObj); // 将foo的this指向fooObj
function foo() {
    a(); // 结果：{ msg: 'bar的this指向' }
}