// const method1 = new Array(1,2,3);
// const method2 = [4,5,6];

// console.log(method1, method2);

// // Constructor function
// function Example1(num){
//     console.log(num * num);
// }

// const storeFunction = new Example1(7);
// console.log(storeFunction);

// // Constructor class
// class Example2 {
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }
// }

// const example2 = new Example2('Online', 5 );
// console.log(example2);

// const arr = new Array();
// arr[0] = "JavaScript";
// arr[1] = "TypeScript";
// arr[2] = "React Js";
// arr[3] = "Node js";
// arr[4] = "Next js";
// arr[5] = "MonngoDB";

// console.log(arr[0]);

// const arr2 = [
//   100,
//   "Online Aid",
//   true,
//   function inArray() {
//     return ("I am function how you can call me");
//   },
//   {name : 'Online Aid YouTube Channel'},
//   ['One', 'Two', 'Three'],
//   undefined,
//   null
// ];

// console.log(arr2);
// console.log(arr2[3]());
// console.log(arr2[5][1]);

// Add array value 
// const friends = ['Tomal', 'Alex', 'Smith'];
// friends[3] = 'Rodrizueg';

// // We can add a vlaue use array length
// friends[friends.length] = 'Butler';
// friends[friends.length] = 'Miller';

// // friends[friends.length -1]
// console.log(friends[friends.length -1]);
// console.log(friends[5]);

// Array methods =========== []
// Array.prototype.at()

// const friends = ['Tomal', 'Alex', 'Smith'];
// console.log(friends.at(0));

// const role = 2;
// console.log(`${friends.at(role)} role was ${role} class three`);


// Array.prototype.concat()
// const arr = ['one', 'two', 'three'];
// const arr1 = ['four', 'five', 'six'];
// const arr2 = ['seven', 'eight', 'nine'];

// // es1
// const margeArray = arr.concat(arr1, arr2);
// console.log(arr, arr1, arr2)
// // es6
// const spread = [...arr, ...arr1, ...arr2 ]

// // console.log(margeArray.at(5));
// console.log(margeArray);

// Array.prototype.copyWithi

// SYNTAX :
// arr.copyWithin(target)
// arr.copyWithin(target, start(optional))
// arr.copyWithin(target, start(optional), end(optional))

// const arr = ['one', 'two', 'three', 'four', 'five'];
// arr.copyWithin(); // Shallow copy
// Modify your array
// Can not modify arr length
// console.log(arr.copyWithin(0, 1, 3));
// console.log(arr.copyWithin(1, 3));
// console.log(arr.copyWithin(-1, 3));
// console.log(arr.copyWithin(3));

// console.log(arr);

// // Array.prototype.entries() 
// const cities = ['New York', 'London', 'Sydney'];

// // const city = cities.entries();
// // console.log(city.next().value);
// // console.log(city.next().value);
// // console.log(city.next().value);

// for (let city of cities.entries()){
//     console.log(city[1])
// }

// for (let [i, e] of cities.entries()){
//     console.log(i, e)
// }

// // Array.prototype.every() 
// const number = [33, 34, 47, 80, 99];
// const result = number.every(n => n < 100);

// console.log(result);

// const arr = [12, 22, 34, 44, 48, 98] 
// // even number

// function isEven (element, index, array) {
//     return element % 2 === 0;
// }

// const output = arr.every((ele, idx, arr) => ele % 2 === 0);
// console.log(output);

// Array.prototype.fill()
// const num = [1, 2, 3]; // it's count length
// num.fill(value, start, end)
// console.log(num.fill(10))
// console.log(num.fill(20, 1, 2))
// console.log(num.fill(20, 0, 3))

// const car = ['Tesla', 'BMW', 'Toyota'];
// console.log(car.fill('Rolls Royce', 0, 3));

// console.log(car);

// Array.prototype.filter() 
// const product = [
//     {
//         id: 1,
//         name: 'T-Shirt',
//         price: 50,
//         color: 'red'
//     },
    
//     {
//         id: 2,
//         name: 'T-Shirt',
//         price: 45,
//         color: 'orange'
//     },

    
//     {
//         id: 3,
//         name: 'T-Shirt',
//         price: 40,
//         color: 'red'
//     }
// ];

// const filterColor = product.filter((p) =>{
//     return p.color === 'red';
// });

// const filterPrice = product.filter(n => n.price <= 40)

// console.log(filterPrice);

// function fnFilter(arr, value) {
//     return arr.filter(p => p.color === value);
// }

// let output = fnFilter(product, 'orange');
// console.log(output, product);

// Array.prototype.find() 
// const user = [
//     {
//         id: 1,
//         name: 'Alex',
//     },
    
//     {
//         id: 2,
//         name: 'Smith',
//     }

// ];

// const printUser = user.find((n) => n.name === "Alex");

// const num = [22, 45, 35, 67, 70];

// const result = num.find(n => n < 50);

// console.log(result);

// const friends = ['Alex', 'Tomal', 'Smith'];

// // ES6  
// const output = friends.find(f => f.startsWith("S"));

// // Traditional 
// const output2 = friends.find(function (f) {
//     return f.startsWith('T')
// })
// console.log(output, output2);

// const friendsClassRoleAndArrayWithObject = 
// [
//     {
//         name: 'Alex',
//         roll: 1
//     },
//     {
//         name: 'Tomal',
//         roll: 2
//     },
//     {
//         name: 'Smith',
//         roll: 3
//     }
// ];

// const rollOutput = friendsClassRoleAndArrayWithObject;

// const result2 = rollOutput.find( r => r.roll === 1);
// console.log(result2)

// Array.prototype.findIndex();

// const num = [2, 5, 6, 7, 8];
// const num2 = [-4, -5, 6, 7, 10]

// const output = num.findIndex( n => n > 9);
// const result = num2.findIndex(n => n > 0);
// console.log(output, result);

// Array.prototype.findLast() 
// const product = [
//     {
//         name: 'T-shirt',
//         quantity: 10,
//     },
//     {
//         name: 'Pant',
//         quantity: 5,
//     },
    
//     {
//         name: 'Jacket',
//         quantity: 1,
//     },
// ];

// const isNotEnough = function(item){
//     return item.quantity < 2
// }

// console.log(product.findLast(isNotEnough))

// const numArr = [100, 30, 50, 200, 30, 40, 110, 51];

// const result = numArr.findLast(n => n > 550);

// console.log(result)

// Array.prototype.findLastIndex();
// const numArr1 = [100, 30, 50, 200, 30, 40, 110, 51];

// const result1 = numArr1.findLastIndex(n => n > 550);
// console.log(result1);

// Array.prototype.flat()
// const arr = [
//     'one', 'two', 'three',
//     ['four', 'five', 'six', ['seven', 'eight', 'nine',
//         ['nine', 'ten']
//     ]]
// ];

// const flatArray = arr.flat(Infinity);
// // console.log(flatArray);
// console.log(arr);

// Array.prototype.flatMap()
// const arr = [
//     'one', 'two', 'three',
//     ['four', 'five', 'six'],
//     ['seven', 'eight', 'nine'],
//     ['nine', 'ten']
// ];

// console.log(arr.flatMap(element => element))
// console.log(arr)

// arr.flatMap(function((ele, index, array), thisArg);

// Array.prototype.forEach() 
// const transaction = [
//     100, 400, -150, -200, 1000, -300, 500, -300, -100
// ];

// // forEach(function(element, index, array)) 

// const output = transaction.forEach((userTrans,idx,arr) => {

//     if(userTrans > 0){
//         console.log(`Transaction : ${idx + 1} deposited ${userTrans}`)
//     }else {
//         console.log(`Transaction : ${idx + 1} withdrew ${Math.abs(userTrans)}`)
//     }

// });

// Array.prototype.includes()
// const cart = [
//     {
//         id: '1',
//         name: 'T-shirt'
//     },
//     {
//         id: '2',
//         name: 'Pant'
//     },
//     {
//         id: '3',
//         name: 'Jaket'
//     },
// ];

// const isIdExist = cart.includes(cart[0]); // boolean
// console.log(isIdExist)

// const arr = [10, 20, 30, 40];

// console.log(arr.includes(50))

// Array.prototype.indexOf() 
// const language = ['JavaScript', 'Python', 'C++'];

// // indexOf(search, index) 
// const output = language.indexOf('Python', 3);
// console.log(output)

// // Array.prototype.join() 
// const arr = ['I', 'love', 'Coding'];
// // By default produce <,>
// console.log(arr.join(' | '));

// const arr2 = [3, '.', 2,4,5,6,7];
// console.log(arr2.join(''))

// Array.prototype.keys() 
// const arr = [
//     'Mac', 'HP', 'Dell',
//     function () {
//         return 'Unknown function';
//     }
// ];

// console.log(arr[3]())

// const itarator = arr.keys();

// for(let key of itarator){
//     console.log(key);
// }

// // Array.prototype.lastIndexOf()
// const arr = ['Java', 'JavaScript', 'Python', 'PHP', 'Python', 'C', 'C++', 'C#', 'JavaScript','Ruby'];

// // lastOndexOf(search, index)
// const result = arr.lastIndexOf('JavaScript');
// console.log(result)

// const string = 'javascript'; // not array
// console.log(string.lastIndexOf('a'));

// Array.prototype.map() 
// const num = [2,3,4,5];

// console.log(num.map(function(n) {
//     return n *2;
// }))

// const products = [
//     {
//         name: 'T-shirt',
//         quantity: 10,
//     },
//     {
//         name: 'Pant',
//         quantity: 5,
//     },
    
//     {
//         name: 'Jacket',
//         quantity: 1,
//     },
// ];

// const displayProductName = products.map(n => n.name);

// // Equivalent
// const dpn = products.map(n => {
//     return n.name
// });

// const tf = products.map(function(product) {
//     return product.quantity;
// })

// console.log(tf);

// Array.prototype.pop() 
// const database = [
//     {name: 'T-shirt', quantity: 10},
//     {name: 'Pant', quantity: 5},
//     {name: 'Jacket', quantity: 1},
// ];

// const dropItem = database.pop();
// const dropItem2 = database.pop();
// console.log(database.pop())
// console.log(database);


// Array.prototype.push()
// const database = [
//     {name: 'T-shirt', quantity: 10},
//     {name: 'Pant', quantity: 5},
//     {name: 'Jacket', quantity: 1}
// ];

// const item = {
//     name: 'Iphone 14 pro',
//     quantity: 200,
// }

// const item2 = {
//     name: 'samsung s22 ultra',
//     quantity: 100,
// }

// const addData = database.push(item, item2);

// console.log(database);

// Array.prototype.reduce() 
// const db = [100, 400, 200, -200, 1000, -300, 500, -300, -100];

// const init = 0;

// // reduce(accumalator, currentValue, index, array)
// const transaction = db.reduce((accumalator, cv, idx, arr) => {

//     if(cv > 0) {
//         console.log(`Transaction : ${idx +1} deposited ${cv}`);
//     } else {
//         console.log(`Transaction : ${idx +1 } withdrew ${Math.abs(cv)}`);
//     }

//     const currentBlance = accumalator + cv;

//     return currentBlance;

// }, init);

// console.log(transaction);

// Array.prototype.reduceRight() 
// const arr = [100, 200, 300, 400, 500];
// const result = arr.reduceRight((acc, cv) => {
//     return acc + cv;
// }, 0)

// console.log(result);

// const complexArr= [ [100, 200], [300, 400], [500, 600]];

// const output = complexArr.reduceRight((acc, cv) => {
//     return acc.concat(cv);
// })

// console.log(output);

// Array.prototype.reverse() 
// const friends = ['Tomal', 'Alex', 'Smith'];

// const output = friends.reverse();

// console.log(output);

// Array.prototype.shift() 
// const friends = ['Tomal', 'Alex', 'Smith'];

// console.log(friends.shift());

// console.log(friends);

// Array.prototype.slice() 
// const language = 
// ['JavaScript', 'Python', 'C', 'C++', 'C#',"Dart", "PHP"];

// // Slice method create a shalow copy 
// const chunk = language.slice(5, 7);

// console.log(chunk);

// Array.prototype.some(); 
// const num = [40, 50, 30, 10, 100, 300, 500];
// // some() true / false 
// const res = num.some(n => n < 10);

// const arrOfObj = [
//     {name: 'Tomal', age: 13},
//     {name: 'Alex', age: 14},
//     {name: 'Smith', age: 12},
//     {name: 'Rodrizueg', age: 17}
// ];

// function isAdult(item) {
//     return item.age >= 18
// }

// const isAdultArrowFn = (person) => person.age >= 18; 

// const output = arrOfObj.some(isAdult);

// console.log(output);

// Array.prototype.sort() 
// const str = ['Amazon', 'Target', 'Walmart', 'Ebay'];
// const sortStr = str.sort();
// console.log(sortStr);

// const nums = [10, 5, 20, 105, 110, 120, 115];

// const sortNum = nums.sort( (a, b) => a - b);
// console.log(sortNum);

// const arrOfObj = [
//     {name: 'Mobile', price: 500},
//     {name: 'Laptop', price: 1500},
//     {name: 'Desktop', price: 1000},
// ];

// const ascending = arrOfObj.sort((a,b) => a.price - b.price );

// const descending = arrOfObj.sort((a,b) => b.price - a.price );

// // console.log(ascending);
// console.log(descending);
// console.log(arrOfObj)


// Array.prototype.splice()
// const arr = ['one', 'two', 'three', 'four'];

// // start
// // countDelete
// // insert

// // arr.splice(start, deleteCount, insert)

// // Insert
// arr.splice(0, 0, 'zero');

// // delete
// arr.splice(0, 1)

// // Insert Many
// arr.splice(4, 0, 'five', 'six')

// // Insert Middel 
// arr.splice(3, 0, 'ten', 'twinty');

// //delete ten and twinty
// arr.splice(3, 2);

// // Empty 
// // arr.splice(0)

// console.log(arr)

// Array.prototype.toLocaleString() 
// const arr = ['Someone', 'age', new Date('1 Jan 1997 14:12:00 UTC')]

// const strWithDate = arr.join(' ').toLocaleString('en', {TimeZone: 'UTC'});

// console.log(strWithDate);

// // Array.prototype.toString() 
// const addString = ['I', 'Love', 'JavaScript'];
// const res = addString.join(' ').toString();
// console.log(res)

// Array.prototype.unshift() 
// const addDatatoFront = ['Tomal', 'Alex', 'Smith'];

// const data = addDatatoFront.unshift('Rodrizuag', 'Miller');
// // const data2 = addDatatoFront.shift();
// console.log(addDatatoFront);

// Array.prototype.values()
// const arr = [
//     {name: 'Mobile', price: 500},
//     {name: 'Laptop', price: 1500},
//     {name: 'Desktop', price: 1000},
// ];

// const itarator = arr.values();

// console.log(itarator.next())
// console.log(itarator.next())
// console.log(itarator.next())

// for(let item of itarator) {
//     console.log(item);
// }

// it's important
// const arr = [
//     {name: 'Mobile', price: 500},
//     {name: 'Laptop', price: 1500},
//     {name: 'Desktop', price: 1000},
// ];

// arr = []

// console.log(arr);


// JavaScript Next() method or function 
// const service = 'onlineaid';
// const spread = [...service];

// const allItrator = spread[Symbol.iterator]();

// // console.log(allItrator.next());
// // console.log(allItrator.next());
// // console.log(allItrator.next());
// // console.log(allItrator.next());
// // console.log(allItrator.next());
// // console.log(allItrator.next());
// // console.log(allItrator.next());
// // console.log(allItrator.next());
// // console.log(allItrator.next());

// for(let i of allItrator) {
//     console.log(i)
// }

// || Array static method 

// Array.from() 
// const str = 'onlineaid';
// const num = '12345678';
// const arr = [10, 10, 20, 30, 30, 30, 20, 10, 50];

// const dataAnalysis = Array.from( new Set(arr));


// const result = Array.from(num, mapFn);

// function mapFn(n) {
//     return Number(n);
// }

// const res = Array.from(str);
// console.log(dataAnalysis);

// Array.isArray() 
// const arr = ['onlineaid'];

// // arr instanceof Array 
// console.log(Array.isArray(arr));

// Array.of() 
// const arr = Array(5);
// const arrOf = Array.of(5);

// console.log(arr.length)
// console.log(arrOf.length);

// Array Destructuring 
const top5ProgramingLan = [
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'C'
];

const [no1, ...no5] = top5ProgramingLan;
console.log(no5);

