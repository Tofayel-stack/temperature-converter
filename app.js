let celsius = document.querySelector("#celsius")
let kelvin = document.querySelector("#kelvin")
let fahrenheit = document.querySelector("#fahrenheit")
let sublitBtn = document.querySelector("#sublitBtn")

let masterValue = ""


const lastUpdate = function () {

    celsius.addEventListener("keyup", function () {
        masterValue = 'celsius'
    })

    kelvin.addEventListener("keyup", function () {
        masterValue = 'kelvin'
    })

    fahrenheit.addEventListener("keyup", function () {
        masterValue = 'fahrenheit'
    })


}
lastUpdate();


const myTempFun = () => {

    if (masterValue == "celsius") {
        let bal = parseInt(celsius.value) + 273
        let fValue = (parseInt(celsius.value) * 9 / 5) + 32

        kelvin.value = bal
        fahrenheit.value = fValue

    } else if (masterValue == "kelvin") {
        let cValue = parseInt(kelvin.value) - 273.15
        let fValue = (parseInt(kelvin.value) - 273.15) * 9 / 5 + 32

        celsius.value = cValue
        fahrenheit.value = fValue

    } else if (masterValue == "fahrenheit") {
        let cValue = (parseInt(fahrenheit.value) - 32) * 5 / 9
        let kValue = (parseInt(fahrenheit.value) - 32) * 5 / 9 + 273.15

        celsius.value = cValue
        kelvin.value = kValue
    }

}





sublitBtn.addEventListener("click", function () {
    myTempFun();
})



  //আলাদা করে সব ইনপুট বাক্স এ এন্টার কি অ্যাড করসে//
// celsius.addEventListener("keyup",function(event){
//     if(event.keyCode === 13){
//         myTempFun();
//     }
// })
// kelvin.addEventListener("keyup",function(event){
//     if(event.keyCode === 13){
//         myTempFun();
//     }
// })
// fahrenheit.addEventListener("keyup",function(event){
//     if(event.keyCode === 13){
//         myTempFun();
//     }
// })





//লুপ চালিয়ে এন্টার কি অ্যাড করসে//
let input = document.querySelectorAll(".inputBox");

input.forEach(a => {
    a.addEventListener("keyup",function(event){
        if(event.keyCode ===13){
            myTempFun();
        }
    })
});







function myfun(){
    document.querySelector(".wrapper").reset();
}