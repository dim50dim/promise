function walkDog() {
   
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('YOU WALK THE DOG');
        
        },1500)
    })
}
function cleanKitchen() {
 
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('YOU clean the kitchen');
        
        },2500)
    })
}
function takeOutTrash() {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('YOU take out the trash');
    
        },500)
    })
}

walkDog(() => {
    cleanKitchen(() =>{
        takeOutTrash(() => {
            console.log('you finish');
            
        })
    })
})