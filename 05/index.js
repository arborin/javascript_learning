/**
 * callback_ები
 * 
 * ამ შემთხვევაში გვაქვს 2 ქოლბექ ფუნქცია (timeout_ში)
 * 
 * 
 */


console.log("Request Data");


// setTimeout(function(){
//     console.log("Prepearing data...");
    
//     const backendData = {
//         server: 'awas',
//         port: 2000,
//         status: 'working'
//     }
    
//     setTimeout(function(){
//         backendData.modified = true;
//         console.log("data recieved: ", backendData);
//     },2000)
// }, 2000)


/**
 * 
 * promise _ ები
 * 
 */


// const p = new Promise(function(resolve, reject){
//     // უნდა დავწეროთ ასინქრონული კოდი
    
//     setTimeout(()=>{
//         console.log('Prepearing data...');
        
//         const backendData = {
//                                 server: 'awas',
//                                 port: 2000,
//                                 status: 'working'
//                             };
                            
//         resolve(backendData);
//     },2000);
// });


/** ყველა პრომისს აქვს თავის მეთოდები რომლებიც შეგვიძლია გამოვიყენოთ  */

// p.then((data)=>{
//     console.log(data);
    
//     const p2 = new Promise((resolve, reject) => {
        
//         setTimeout(()=>{
//             data.modified = false;
            
//             if(data.modified){
//                 resolve(data);
//             }else{
//                 reject("Second promise failed");
//             }
            
//         }, 1000);
//     });
    
//     return p2;
//     // p2.then((clientData)=>{
//     //     console.log("Data recieved", clientData);
//     // })
    
    
//     console.log("DONE!"); // ეს ფუნქცია გამოიძახება resolve_ში
// }).then((clientData)=>{
//     console.log("Data recieved", clientData);
    
//     return "JAMAL";
// }).then((name)=>{
//     console.log(name)
// }).catch((err) =>{
//     console.log(err);
// }).finally(() => {
//     console.log("Running any always!");
// });





const sleep = (ms) => {
    return new Promise(function(resolve, reject){
        setTimeout(()=>resolve(), ms);
    });
}


// sleep(5000).then( () => { console.log("....Run after 5 sec...."); });
// sleep(2000).then( () => { console.log("....Run after 2 sec...."); });
// sleep(1000).then( () => { console.log("....Run after 1 sec...."); });

Promise.all([sleep(2000), sleep(1000)]).then(()=>{
    console.log("all promices done!");
});


console.log("Done");
