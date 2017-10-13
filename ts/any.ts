let declareAny: any = 'leeper';
declareAny = 20;

let anyName: any = 'leeper';
anyName.setName = 'lee';
console.log(anyName.myName);