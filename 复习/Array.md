# 数组拉平
```javascript
{
    let arr = [1, 2, [3, 4], [5, 6, 7, [8, 9, '', { name: 'yatou' }, 10]]]
    let newArr = []
    function flat(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flat(arr[i])
            } else {
                newArr.push(arr[i])
            }
        }
    }
    flat(arr)
    console.log('newarrr', newArr)
}

{
    let arr = [1, 2, [3, 4], [5, 6, 7, [8, 9, '', { name: 'yatou' }, 10]]]
    function flat(arr) {
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                newArr = newArr.concat(flat(arr[i]))
            } else {
                newArr.push(arr[i])
            }
        }
        return newArr
    }
    flat(arr)
}

// 用 reduce 实现 flat 函数

{
    let arr = [1, 2, [3, 4], [5, 6, 7, [8, 9, '', { name: 'yatou' }, 10]]]
    function flat(arr) {
        return arr.reduce((pre, cur) => {
            return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
        }, [])
    }
    flat(arr)
}

{
    let arr = [1, 2, 3, 4, 5, 6, 7]
    arr.reduce((pre, cur) => {
        return pre + cur
    }, 0)
}

{
    let arr = [1, 2, [3, 4], [5, 6, 7, [8, 9, '', { name: 'yatou' }, 10]]]

    function flat(arr) {
        const result = []
        const stack = [].concat(arr)
        while (stack.length) {
            let val = stack.pop()

            if (Array.isArray(val)) {
                stack.push(...val)
            } else {
                result.unshift(val)
            }
        }
        return result
    }

    flat(arr)
}



```

# 数组遍历方式的区别
// 数组的遍历，以及遍历的区别 https://segmentfault.com/a/1190000021366004
```javascript
- for 
- for...of 
- for...in
- map
- filter
- some 
- reduce
- forEach
- keys
- entries
```
 

# 判断对象是否是数组的方法
- typeof（不能判断出是否适合）

- instanceof 
用法：
1.判断一个实例是否属于某种类型
2.判断一个实例是否属于它的父类型
instanceof操作符的问题在于，它假定只有一个全局环境。如果网页中包含多个框架，那实际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的Array构造函数。
```javascript
let arr = [1,2,4];
arr.constructor == Array
// 这个不是很准确 ，因为constructor是可以改变的
```

- Array.isArray()
```javascript
if（Array.isArray(value)）{
    return true;
}
```

-  Object.prototype.toString
```javascript

return Object.prototype.toString.call(arg)==='[object Array]'


// => 进一步封装
function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8,-1);
}
var a = [1,2,3];
console.log(getType(a)); //Array 

var b = function(){};
console.log(getType(b)); //Function

 
```

 