//for

for (let i = 0; i < 10; i++) {
    const element =  i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

for (let i = 1; i < 5; i++) {
    // console.log(`Table of : ${i}`);
    for (let j = 1; j <= 10; j++) {  
        // console.log(`${i} ${'*'} ${j} ${'='} ${i*j}`);
        // console.log(i + '*' + j + '=' + i*j);
    }    
}

//const myArr= ["flash" , "batman", "superman"]

// for(let i=0; i<myArr.length; i++){
//    // console.log(myArr[i]);
// }


//break and continue

// for (let i = 1; i <=20; i++) {
//     if(i==5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is ${i}`);
    
// }
for (let i = 1; i <=8; i++) {
    if(i==5){
        console.log("Detected 5");
         continue;
    }
    console.log(`value of i is ${i}`);
    
}

 

 
