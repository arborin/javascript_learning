// CLOSURES

// closure არის ფუნქცია რომელიც შედეგად გვიბრუნებს
// ფუნქციას

function createCalcFunction(n){
    
    return function(){
        console.log(1000 * n);
    }
}


const calc = createCalcFunction(35);

console.log(calc(10));


function createIncrementor(n){
    return function(num){
        return n+num;
    }
}


const addOne = createIncrementor(1);
console.log(addOne(5));


function urlGenerator(domain){
    return function(url){
        return `https://${url}.${domain}`;
    }
}


const comUrl = urlGenerator('com');
console.log(comUrl("google"))



function bind(context, fn){
    return function(...args){
        fn.apply(context, args);
    }
}

function logPerson(){
    console.log(`${this.name}`)
}

const person = {name: "niko"}
bind(person, logPerson)()
