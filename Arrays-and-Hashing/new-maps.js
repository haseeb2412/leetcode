//  difference between map function and map class 
// all keys in obj consider as string



let obj={
    name:'haseeb',
    true:"this is not a boolean consider",
    10:"this is not a integer consider"
}
console.log(obj);


// in map class you can get all the key at a single time using key()
// in map class you can get all the values at a single time using values()
// add values in class map using set('key','value')
// we can get the size of the object values using data.size
// delete the value using data.delete()
//check the value is present in the object 


let data = new Map([
    ['name','haseeb'],
    [true,'this is consider a boolean value'],
    [10,'this is consider a integer value'],
])
data.set("class","section");
data.delete(true);
data.has(true);

console.log(data.size);