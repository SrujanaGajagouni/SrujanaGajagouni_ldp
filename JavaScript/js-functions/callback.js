function cal(a,b,operation){
    console.log("The output is")
    operation(a,b)

}
function add(x,y){
    console.log((x+y));
}
cal(4,5,add)