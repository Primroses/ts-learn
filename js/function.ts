// 函数声明
// function sum (x: number, y: number): number {
//   return x + y;
// }
// 输入多余的或者少于要求的参数,都是不允许的
// sum(1, 2);


// 函数表达式
// 左边的sum是通过赋值操作进行类型推论而推断出来的
// let sum	=	function (x: number, y: number): number {
//   return	x	+	y;
// };

//手动添加sum类型
let sum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}