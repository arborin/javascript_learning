// Prototype
/*

პროტოტიპი არის ობიექტი რომლის მეშვეობითაც
ჩვენ ვაფართოვებთ არსებულ ობიექტებს
და ასევე ვქმნით მემკვიდრეობითობას

*/

const person = {
    name: "nika",
    age: 20,
    greet: function(){
        console.log("GREET");
    }
}


console.log(person.toString())

console.log(person.greet());


const person1 = new Object({
    name: "nika",
    age: 20,
    greet: function(){
        console.log("GREET");
    }
});


Object.prototype.sayHello = function(){
    console.log("Hello!");
}


person1.sayHello();


const john = Object.create(person);

console.log(john);
console.log(john.name);
console.log(john.sayHello())

// --------------------------------------------------------

const str = "I am string";
console.log(str.length)

const whoami = new String("I am a string");

