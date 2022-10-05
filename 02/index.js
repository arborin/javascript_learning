// CONTEXT

// this მიუთითებს იმ კონტექსტზე საიდანაც იყო გამოძახებული

function hello(){
    console.log("HELLO ", this);
}


function goodbye(){
    console.log("Bye!", this);
}

const location = {sity: "Tbilisi"};

const person = {
    name: "nika",
    age: 33,
    sayHello: hello,
    bye: goodbye.bind(location), // შევუცვალეთ კონტექსტი
    info: function(job, phone){
        console.group(`NAME: ${this.name}` );
        console.log(`${this.name} - ${this.age} | ${job} | ${phone}`)
        
        console.groupEnd();
    }
}

person.sayHello();
person.bye();

// კონტექსტის შეცვლა
// bind

person.info('DB Admin', 893545487);

const ann = {
    name: "Ann",
    age: 22
}

// bind_აბრუნებს ახალ ფუნქციას და არ იძახებს,
// bind_ს შესაძლებელია გადავცეთ პარამეტრები მძიმით გამოყოფილი

// 1. ვარიანტი
const ann_info = person.info.bind(ann);
ann_info('Developer', 555121239);

// 2. ვარიანტი
const ann_info_2 = person.info.bind(ann, "Frontend", 555878765);
ann_info_2() // ვიძახებთ პარამეტრების გარეშე

// 3. ვარიანტი
const ann_info_3 = person.info.bind(ann, "Frontend", 555878765)();

// 4. ვარიანტი
person.info.bind(ann)('DevOps', 555656587); // მაშინვე გამოძახება

//---------------------------------------------------------
// CALL
//---------------------------------------------------------
// call - უცვლის კონტექსტს და მაშინვე იძახებს ფუნქციას
person.info.call(ann, "Backand Developer", 577123212);


//---------------------------------------------------------
// APPLY
//---------------------------------------------------------
// apply - იღებს 2 არგუმენტს, ობიექტს და პარამეტრების მასივს
//         და მაშინვე იძახება

person.info.apply(ann, ["Designer", 577123212]);


//
const array = [1, 2, 3, 4, 5];

// function multBy(arr, n){
//     return arr.map(function(i){
//         return i * n;
//     })
// }


Array.prototype.multBy = function(n){
    return this.map(function(i){
        return i*5;
    })
    // console.log("MultBy", this);
    // return 
}

// console.log(multBy(array, 5));

console.log(array.multBy(4));