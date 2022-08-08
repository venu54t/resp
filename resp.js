let _lastName = "Dhudala "
let _firstName = "Venu"
//document.getElementById("practice").innerHTML=_firstName+_lastName;
console.log(_firstName+" "+_lastName);
a='lee'
console.log(a)

    
var a;
const addStrings = (_lastName,_firstName) => {
    return _lastName+_firstName;
}

//const cars = ["saab", "volvo","bmw"]
//cars[0] = "audi"
//console.log(cars)
const buses = {no1:"saab", no2: "volvo", fullName: function(){ return this.no1+this.no2}}
console.log(buses)
buses.no1="bmw"
console.log(buses)
console.log(buses.fullName())