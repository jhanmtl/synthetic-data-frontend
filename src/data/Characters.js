let alphabets = [];
const start = 'A'.charCodeAt(0);
const last  = 'Z'.charCodeAt(0);
for (let i = start; i <= last; ++i) {
alphabets.push(String.fromCharCode(i));
}

let numbers = [];
for (let i = 0; i <= 9; ++i) {
numbers.push(i.toString());
}

const chars=alphabets.concat(numbers)

let Characters=chars.map((currentChar,index)=>{
    const container={};
    container["id"]=index+1;
    container["value"]=currentChar
    return container
})
Characters.unshift({id:0,value:"random"})

export {
    Characters
}
