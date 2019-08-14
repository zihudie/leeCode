/**
 * [构造函数实现继承]
 * @return {[type]} [description]
 * 缺点：只能继承父类构造函数里的属性方法，原型链上的属性和方法访问不到
 */
function c1() {
    p1.call(this)
}
p1.prototype.say = function () {
    console.log("say")
}
var t1 = new c1()
/**
 * [c2 原型链实现继承]
 * @return {[type]} [description]
 * 缺点： 子类如果创建多个对象，某一个对象将父类的属性改变，则其他对象也相应的会改变，
 */

function p2() {
    this.name = "parent2";
    this.type = [1, 2, 3]
}

function c2() {
    this.age = 3
}
c2.prototype = new p2()
c2.prototype.say = function () {
    console.log(1)
}
var t2 = new c2()
var t2_1 = new c2()
t2.type.push(4)
console.log(t2_1.type) // [1,2,3,4]


/**
 * [构造函数+原型链实现]
 *
 *缺点： 父类函数执行了两次
 * @return {[type]} [description]
 */
function p3() {
    this.name = "parent3";
    this.type = [1, 2, 3]
}

function c3() {
    p3.call(this)
    this.age = 3
}
c3.prototype = new p3()
c3.prototype.say = function () {
    console.log(1)
}
var t3 = new c3()
var t3_1 = new c3()
t3.type.push(4)
console.log(t3_1.type) // [1,2,3]

/**
 * [构造函数+原型链实现 优化]
 * 缺点:无法判断当前对象是由子类创建的还是父类创建的
 * @return {[type]} [description]
 */
function p4() {
    this.name = "parent3";
    this.type = [1, 2, 3]
}

function c4() {
    p4.call(this)
    this.age = 3
}
c4.prototype = p4.prototype


c4.prototype.say = function () {
    console.log(1)
}
var t4 = new c4()
var t4_1 = new c4()
t4.type.push(4)
console.log(t4_1.type) // [1,2,3]
console.log(t4.constructor) // p4


/**
 * [构造函数+原型链实现 优化2]
 * 完美
 * @return {[type]} [description]
 */
function p5() {
    this.name = "parent5";
    this.type = [1, 2, 3]
}

function c5() {
    p5.call(this)
    this.age = 3
}
c5.prototype = Object.create(p5.prototype)

p5.prototype.constructor = c5

var t5 = new c5()
var t5_1 = new c5()

/**
 * es6
 */

class Bb {
    constructor(x) {
        this.name = x
    }

    say() {
        console.log(this.name)
    }
}

class Aab extends Bb {
    constructor(x) {
        super(x)
        this.age = 30
    }
}

var o = new Aab('xiabao')