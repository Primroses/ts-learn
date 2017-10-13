// 用接口表示数组
// 只要index的类型是number,那么值的类型必须是number
interface NumberArray {
  [index: number]: number;
}

let numberarray: NumberArray = [1, 2, 3]; 