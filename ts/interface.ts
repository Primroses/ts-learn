// 变量的形状必须和接口的形状保持一致

// 定义了一个接口Person
// interface Person {
//   name: string;
//   age: number;
// }

// 定义了一个变量leeper,它的类型是Person	
// let leeper: Person = {
//   name: 'leeper',
//   age: 20
// };


// 不要完全匹配一个形状,可以用可选属性
// interface Person {
//   name: string;
//   age?: number;
// }

// 可以少了age属性，但不能添加Person中未定义的属性
// let leeper: Person = {
//   name: 'leeper',
// }


// 如果希望一个接口允许有任意的属性
// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }

// let leeper: Person = {
//   name: 'leeper',
//   sex: 'male'
// }


// 编译报错
// 任意属性的值是string,但是可选属性age的值却是number
// interface Person {
//   name: string,
//   age?: number,
//   [propName: string]: string
// }
// let leeper: Person = {
//   name: 'leeper',
//   sex: 'male'
// }
// number不是string的子属性,所以报错了。


//定义只读属性id,只能在创建的时候被赋值
interface Person {
  readonly id: number;
  name: string;
  age?: number;
}

let leeper: Person = {
  id: 233,
  name: 'leeper'
}

//编译报错
// leeper.id = 2333;