// 类数组
// 编译报错
// function baz () {
//   let args: number[] = arguments;
// }

function baz () {
  let args: IArguments = arguments;
}