# TypeScript 学习笔记
> TypeScript是JavaScript的类型的超集,它可以编译成纯JavaScript。编译出来的JavaScript可以运行在任何浏览器上。
TypeScript编译工具可以运行在任何服务器和任何系统上。  

**TypeScript只会进行静态检查**，如果发现有错误，编译的时候就会报错。TypeScript编译的时候即使报错了，还是会生成编译结果,仍然可以使用这个编译之后的文件。

### 安装TypeScript
TypeScript的命令行工具安装：
```
npm install -g typescript
```
编译TypeScript文件，使用tsc命令：
```
tsc hello.ts
```

### 基本数据类型
**JavaScript的类型分为两种:基本数据类型和引用类型。**  
基本数据类型：
- 布尔值
- 数值
- 字符串
- null
- undefined
- Symbol  

注意：在TypeScript中,boolean, number, string, Symbol是JavaScript中的基本类型,而Boolean, Number, String是JavaScript中的构造函数。
``` TypeScript
// 编译通过
let isDone: boolean = false;

// 编译报错
let createdByNewBoolean: boolean = new	Boolean(1);
```
void, undefined, null:
- JavaScript没有空值(Void)的概念,在TypeScirpt中,可以用	 void表示没有任何返回值的函数，或者将它赋值为undefined和null
- undefined类型的变量只能被赋值为undefined
- null类型的变量只能被赋值为null
- undefined和null是所有类型的子类型

### 任意值
> 任意值(Any)用来表示允许赋值为任意类型。  

如果是一个普通类型,在赋值过程中改变类型是不被允许的，但如果是any类型,则允许被赋值为任意类型。声明一个变量为任意值之后,对它的任何操作,返回的内容的类型都是任意值。
- 在任意值上允许访问任何属性
- 在任意值上允许调用任何方法

### 未声明类型的变量
变量如果在声明的时候,未指定其类型,那么它会被识别为任意值类型：
``` TypeScript
let foo;
foo = 'leeper';
foo = 20;
```
等价于：
``` TypeScript
let foo: any;
foo = 'leeper';
foo = 20;
```

### 类型推论
> TypeScript会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

### 联合类型
> 联合类型表示取值可以为多种类型中的一种。

- 联合类型使用 | 分隔每个类型
- 只能访问联合类型的所有类型里共有的属性或方法

### 接口
在TypeScript中,使用接口(Interfaces)来定义对象的类型。
- 可用于对类的一部分行为进行抽象
- 也常用于对「对象的形状(Shape)」进行描述
- 接口一般首字母大写
- 定义的变量比接口少了一些属性，多一些属性都是不允许的
- 一旦定义了任意属性,那么确定属性和可选属性都必须是它的子属性
- readonly定义只读属性

### 数组的类型
使用「类型	+	方括号」来表示数组
``` TypeScript
let numbers: (number | string)[] = [1, '2', 3];
```

### 数组泛型
也可以使用数组泛型(Generic)Array<elemType>来表示数组

### 用接口表示数组
接口也可以用来描述数组

### any在数组中的应用
用any表示数组中允许出现任意类型

### 类数组
类数组不是数组类型，比如：arguments, NodeList  
常见的类数组都有自己的接口定义,如IArguments,NodeList,
HTMLCollection等

### 函数
在JavaScript中,有两种常见的定义函数的方式：函数声明和函数表达式
- 在TypeScript的类型定义中, =>	用来表示函数的定义

#### 接口中函数的定义
也可以使用接口的方式来定义一个函数需要符合的形状
``` javascript
interface Search {
  (source: string, subString: string): boolean;
}
let mySearch: Search;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}
```
#### 可选参数
用 ？ 表示可选的参数  
**可选参数必须接在必需参数后面**
``` TypeScript
function example (name: string, age? number) {
  // ...
}
```
#### 参数默认值
TypeScript会将添加了默认值的参数识别为可选参数
``` TypeScript
function example (name: string = 'leeper', age? number) {
  // ...
}
```
可选参数不用必须接在必需参数后面
#### 剩余参数
rest参数只能是最后一个参数
``` TypeScript
function example (array: any[], items: any[]) {
  // ...
}
```
#### 重载
重载允许一个函数接受不同数量或类型的参数时,作出不同的处理

### 类型断言
类型断言可以用来绕过编译器的类型推断,手动指定一个值的类型  
语法：
```
<类型>值

// 或

值 as 类型
// 在TSX语法(React的JSX语法的TS版)中必须用后一种
```

### 声明文件
当使用第三方库时,需要引用它的声明文件
#### 声明语句
使用第三方库，例如jQuery中的$，但是在TypeScrip中,并不知道$是什么，需要使用declare关键字来定义它的类型
``` TypeScript
declare var $: (string) => any;
$('#foo');

// declare定义的类型只会用于编译时的检查,编译结果中会被删除
```
#### 声明文件
通常把类型声明放到一个单独的文件中
```
// jQuery.d.ts
// 约定声明文件以.d.ts为后缀
```
引用文件
```
/// <reference path="./jQuery.d.ts" />

// 在使用到的文件的开头,用「三斜线指令」表示引用了声明文件
```
#### 第三方声明文件
推荐使用@types来管理
```
npm install @types/jquery --save-dev

npm install @types/node --save-dev
```

### 内置对象
JavaScript中的内置对象,包括DOM和BOM的内置对象，它们都可以直接在TypeScript	中当做定义好了的类型。
``` TypeScript
let b: Boolean = new Boolean(1);

let body: HTMLElement = document.body;

let div: NodeList = document.querySelectorAll('div');

document.addEventListener('click', function (e: mouseEvent) {
  // ...
});
```

### 类型别名
类型别名用来给一个类型起个新名字
``` TypeScript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
```

### 字符串字面量类型
字符串字面量类型用来约束取值只能是某几个字符串中的一个
``` TypeScript
type EventName = 'click' | 'mouseover';
```

### 元组
数组合并了相同类型的对象,而元组合并了不同类型的对象
``` TypeScript
let person: [string, number] = ['leeper', 10]; 

// 当赋值给越界的元素时,它类型会被限制为元组中每个类型的联合类型

// 数组的第三项满足联合类型string|number
person.push('male');
```

### 枚举
枚举类型用于取值被限定在一定范围内的场景  
比如一周只能有七天：
``` TypeScript
// 枚举成员会被赋值为从0开始递增的数字
enum Days{Sun, Mon, Tue, Wed, Thu, Fri, Sat};

// 也可以给枚举项手动赋值
enum Days{Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
```

### 静态方法
使用static修饰符修饰的方法称为静态方法,它们不需要实例化,而是直接通过类来调用

### public private 和 protected
- public修饰的属性或方法是公有的,可以在任何地方被访问到,默认所有的属性和方法都是public的
- private修饰的属性或方法是私有的,不能在声明它的类的外部访问
- protected修饰的属性或方法是受保护的,它和private类似,区别是它在子类中也是允许被访问的

### 抽象类
abstract用于定义抽象类和其中的抽象方法
``` TypeScript
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}
class Cat extends Animal {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
}
let cat = new Cat('Tom');
```

### 泛型
泛型(Generics)是指在定义函数、接口或类的时候,不预先指定具体的类型,而
在使用的时候再指定类型的一种特性

### 声明合并
如果定义了两个相同名字的函数、接口或类,那么它们会合并成一个类型