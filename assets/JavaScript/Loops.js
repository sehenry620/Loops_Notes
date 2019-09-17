// console.log("hello")


// let namesArray = [
//     "eric", // index of 0
//     "peter", // index of 1
//     "michael", // index of 2
//     "cindy", // index of 3
//     "stephanie", // index of 4
//     "Cramer" // index of 5
// ]

// console.log(namesArray[0].toUpperCase());
// console.log(namesArray[1].toUpperCase());
// console.log(namesArray[2].toUpperCase());
// console.log(namesArray[3].toUpperCase());
// console.log(namesArray[4].toUpperCase());

// i = iterator



    // for( let i = 0; i < namesArray.length; i++ ){
    //     console.log(i);
    
    // }

    (function (){

        // let numbersArray = []

        // let results = document.querySelector ("#results");

        // for (let i = 0; i <= 100; i++) {
            
        //     if (i % 2 != 0){
        //     numbersArray.push(i);

        //     }

        // }
    
        // console.log(
        //     numbersArray
        // )
    
        let results = document.querySelector("#results");

        // creating the incrementer
        let i = 0

        // looping until condition is no longer true
        while ( i <= 100){
            results.innerHTML += i +"<br>";

            // incrementing the incrementer
            i++
        }
    
    // while loop and for loop act like the same thing
    
    })();