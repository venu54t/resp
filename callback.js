// function myDisplayer(something) {
//     document.getElementById("").innerHTML = something
// }
// function myCalculator(a, b)
// {
//     return a+b;
// }
// let result = myCalculator(3, 4)
// myDisplayer(result)

// by using callback

// function myDisplayer(some)
// {
//     document.getElementById("123").innerHTML = some
// }
// function myCalculator(a,b, callBack)
// {
//     let c = a+b;
//     callBack(c)
// }
// myCalculator(3, 4, myDisplayer)

// function myFun()
// {
//     document.getElementById("123").innerHTML = "I love You !!"
// }
// setTimeout(myFun, 3000)

// function setInter() {
//   let d = new Date();
//   document.getElementById("123").innerHTML =
//     d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// }
// setInterval(setInter, 1000)
function myFunc(some){
    document.getElementById("123").innerHTML = some
}
function getFile(myCallBack)
{
    let req= new XMLHttpRequest();
    req.open('GET', "myCar.html")
    req.onload = function(){
        console.log(req.status)
        if(req.status == 200)
            myCallBack(this.responseText)
        else
            myCallBack("Error: "+ req.status)
    }
    req.send()
}

getFile(myFunc)