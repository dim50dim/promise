function walkDog() {
   
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           const dogWalk = false;
             if(dogWalk) {
                
            resolve('YOU WALK THE DOG');
             }else{
                reject('ERROR with the dog')
             }
        
        },1500)
    })
}
function cleanKitchen() {
 
    return new Promise((resolve,reject) => {
         const kitchen = true;
         
        setTimeout(() => {
          if(kitchen){
            resolve('YOU clean the kitchen');
          }else{
            reject('error in kitchen')
          }
        
        },2500)
    })
}
function takeOutTrash() {

    return new Promise((resolve,reject) => {
    const trash = true;

        setTimeout(() => {
           if(trash){
            resolve('YOU take out the trash');
           }else{
            reject('error with Trash')
           }
    
        },500)
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
          .then(value => {console.log(value); return takeOutTrash()  })
           .then(value => {console.log(value); console.log('FINISH')    })
           .catch(error => console.error('errorrrrrr'));