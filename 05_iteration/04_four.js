const myObject ={
    js : 'javascript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    //  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming=["js", "rb", "py", "java", "c++"]

for (const key in programming) {
    //  console.log(programming[key]);
}

// const map =new Map()

// map.set('IN', "INDIA");
// map.set('USA', "United States Of America");
// map.set('Fr', "France");

// for (const [key] in map) {
//      console.log(key);
// }