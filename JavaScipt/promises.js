function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You walk the dog 🐕");
    }, 1500);
  });
}
function cleanKitchen() {
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cleaned the kitchen 🍜");
    }, 500);
  });
}
function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sleep 😴");
    }, 2000);
  });
}

walkDog().then((value)=>{console.log(value);return cleanKitchen();})
         .then((value)=>{console.log(value);return sleep();})
         .then((value)=>{console.log(value);console.log("Done for the day! 🚀");})

