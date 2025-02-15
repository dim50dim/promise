function walkDog() {
   
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           const dogWalk = true;
             if(dogWalk) {
                
            resolve('YOU WALK THE DOG');
             }else{
                reject('ERROR')
             }
        
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

walkDog().then(value => {console.log(value); return cleanKitchen()})
          .then(value => {console.log(value); return takeOutTrash()  })
           .then(value => {console.log(value); console.log('FINISH');
           
           })