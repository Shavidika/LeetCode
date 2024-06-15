function walkDog(callback){
    setTimeout(()=>{
        console.log("You walk the dog 🐕");
        callback();
    },1500)
}
function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("Cleaned the kitchen 🍜");
        callback();
    },500)
}
function sleep(callback){
    setTimeout(()=>{
        console.log("Sleep 😴")
        callback();
    },2000)
}

walkDog(()=>{
    cleanKitchen(()=>{
        sleep(()=>{
            console.log("Done for the day! 🚀");
        })
    })
});