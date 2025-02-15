function walkDog(callback) {
    setTimeout(() => {
        console.log('YOU WALK THE DOG');
        callback();
    },1500)
}
function cleanKitchen(callback) {
    setTimeout(() => {
        console.log('YOU clean the kitchen');
        callback();
    },2500)
}
function takeOutTrash(callback) {
    setTimeout(() => {
        console.log('YOU take out the trash');
        callback();
    },500)
}

walkDog(() => {
    cleanKitchen(() =>{
        takeOutTrash(() => {
            console.log('you finish');
            
        })
    })
})