const arr=[5,1,3,2,6];

const double=(x)=>{
    return x*2;
}
const binary=(x)=>{
    return x.toString(2);
}
// const output=arr.map(binary)
// console.log(output)

// const output = arr.reduce(function(sum,x){
//            sum+=x;
//            return sum;
// },0)
const users=[
    {firstname:"radha",lastname:"kishori",age:26},
    {firstname:"pandit",lastname:"badri",age:34},
    {firstname:"kha",lastname:"jja",age:19},
    {firstname:"mona",lastname:"lisha",age:25},
]
const output=users.reduce(function(acc,curr){
    if(curr.age<30){
        acc=curr+acc;
    }
    return acc;
},{});
console.log(output)