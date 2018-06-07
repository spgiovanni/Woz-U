let age = 15;

function allowedIntoMovie(age){
    if(age < 10){
        console.log("Not permitted");
    }else if(age < 15){
        console.log("Permitted with parent");
    }else if(age < 18){
        alert("Permitted with anyone over 18");
    }else{
        console.log("Permitted to attend alone");
    }
}

allowedIntoMovie(age);