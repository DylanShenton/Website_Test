var amt = 0
function scroll(){
    for (let i = 0; i < elements.length; i++) {
        item = document.getElementById(elements[i])
        // item.style.top = amt-600+"px";
    }
    amt = -window.scrollY
}
document.addEventListener("scroll",scroll);
function trigger(num){
//    document.getElementById("x"+num.toString()).style.backgroundColor = "#FFBA49"
   document.getElementById("x"+num.toString()).style.paddingBottom = "20vw"
   setTimeout(reset,600,num)
}
function reset(num){
    // document.getElementById("x"+num.toString()).style.backgroundColor = "#20A39E"
    document.getElementById("x"+num.toString()).style.paddingBottom = "20px"
}
positions = [0,25,50,75,100]
elements = ["one", "two", "three" ,"four" ,"five"]
setInterval(move,5000)
window.addEventListener("load", function(){
    move()
})
function move() {
    elements = [elements[4],elements[0],elements[1],elements[2],elements[3]]
    for (let i = 0; i < elements.length; i++) {
        item = document.getElementById(elements[i])
        item.style.left = positions[i]+"vw"
}}
