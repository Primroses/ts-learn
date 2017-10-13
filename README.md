# TypeScript
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
#### 可选参数
用 ？ 表示可选的参数
#### 参数默认值
TypeScript	会将添加了默认值的参数识别为可选参数
#### 剩余参数
rest参数只能是最后一个参数
#### 重载
重载允许一个函数接受不同数量或类型的参数时,作出不同的处理