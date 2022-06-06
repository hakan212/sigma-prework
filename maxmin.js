function arrayMinMax() {
    let randomLength= Math.floor(Math.random() * (8 - 1 + 1) + 1);  //choose random length between 1-8
    let randomArray= Array.from({length: randomLength}, () => Math.floor(Math.random() * 100));   //Create array of random numbers 
    let min=randomArray[0]; //Initialising for loop
    let max=randomArray[0];
    for (let i=1; i<randomArray.length;i++){  
      if (min>randomArray[i]){ //check if there is a lower minimum for every element
        min=randomArray[i]
      }
      if (max<randomArray[i]){ // check if there is a higher maximum for every element
        max=randomArray[i]
      }
    }
    return `for array ${JSON.stringify(randomArray)}, the minimum and maximum values are ${JSON.stringify([min,max])}` 
    //return min and max in array format
  }
  
  console.log(arrayMinMax())