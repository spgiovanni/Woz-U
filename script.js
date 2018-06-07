function idCard(){
    var firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    let address = document.getElementById("Address").value;
    let age = document.getElementById("Age").value;
    let phoneNumber = document.getElementById("phone").value;
    
    
    let numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);
    
    for(let i = 0; i <= numberArray.length; i++){
        if(numberArray[i] <= 100){
            document.getElementById("postAge").innerHTML = "Age: " + age;
        }
        if(numberArray[i] > 100){
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
        }
    }

    document.getElementById("postFullName").innerHTML = "Full Name: " + firstName + lastName;
    document.getElementById("postAddress").innerHTML = "Address: " + address;
  }