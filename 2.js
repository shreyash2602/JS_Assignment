let globalScope=10;
console.log(globalScope);

{
    let blockScope=30;
    console.log(blockScope);
}

function ans(){
    let functionScope=60;
    console.log(functionScope);
}
ans();
