let celsius = document.querySelector("#celsius")
let kelvin = document.querySelector("#kelvin")
let fahrenheit = document.querySelector("#fahrenheit")
let submitBtn = document.querySelector("#submitBtn")
let resetBtn = document.querySelector("#resetBtn")



// just detect the LastUpdate input //

let baseValue = ""

const lastUpdate = function () {
    celsius.addEventListener("keyup", () => {
        baseValue = "celsiusBox"
    })
    kelvin.addEventListener("keyup", () => {
        baseValue = "kelvinBox"
    })
    fahrenheit.addEventListener("keyup", () => {
        baseValue = "fahrenheitBox"
    })

}

lastUpdate();

// main calculator formula//


const tempConverter = () => {
    if (baseValue == "celsiusBox") {
        let kValue = parseInt(celsius.value) + 273.15
        let fValue = (parseInt(celsius.value) * 9 / 5) + 32

        kelvin.value = kValue
        fahrenheit.value = fValue
    }
    if (baseValue == "kelvinBox") {
        let cValue = parseInt(kelvin.value) - 273.15
        let fValue = (parseInt(kelvin.value) - 273.15) * 9 / 5 + 32

        celsius.value = cValue
        fahrenheit.value = fValue
    }
    if (baseValue == "fahrenheitBox") {
        let cValue = (parseInt(fahrenheit.value) - 32) * 5 / 9
        let kValue = (parseInt(fahrenheit.value) - 32) * 5 / 9 + 273.15

        celsius.value = cValue
        kelvin.value = kValue
    }


}


// button connect to active //

submitBtn.addEventListener("click", () => {
    tempConverter();
})

// Enter button and submit interection //

let allInputBox = document.querySelectorAll(".inputBox")

allInputBox.forEach(i => {
    i.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            tempConverter();
        }
    })
});

// reset active //

resetBtn.addEventListener("click", (e) => {
    celsius.value = ""
    kelvin.value = ""
    fahrenheit.value = ""

})

// picture change depending on the tempareture//

//  if(0>= celsius.value){
//      let photset =document.querySelector("img")
//      photset.setAttribute("src","https://i.pinimg.com/originals/57/3b/68/573b688fbac605dde5807bf57b725bd5.gif")

//  }

// // if(celsius.value > 0  && celsius.value <10){
// //     document.querySelector("img").src = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/af8a6a32739675.5691dd2389a24.gif"
// // }