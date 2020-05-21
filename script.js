var krugi = document.querySelectorAll(".krugi")
var icecreams = document.querySelectorAll(".ice-cream_slider")
var backgrounds = ["#849D8F","#8996a6","#9b8b84"]
var textP = ["Крем брюле и пломбир с малиновым джемом","Шоколадный пломбир и лимонный сорбет","Пломбир с помадкой и клубничный щербет"]

krugi.forEach(el=>{
    el.addEventListener("click",(evt)=>{
        var idx = Array.from(krugi).indexOf(evt.target)
        slider(idx)
        document.querySelector(".active").classList.remove("active")
        el.classList.add("active");
    })
})

function slider(index){
    document.querySelector(".ice-cream_slider_active").classList.remove("ice-cream_slider_active")
    icecreams[index].classList.add("ice-cream_slider_active")
    document.querySelector("body").style.backgroundColor = backgrounds[index];
    document.querySelector(".ice-creams p").textContent = textP[index]
}
 
var currentIndex = 0;

setInterval(()=>{
    if(currentIndex<2){
        currentIndex ++;
    }else{
        currentIndex = 0
    }
    document.querySelector(".active").classList.remove("active")
    krugi[currentIndex].classList.add("active")
    slider(currentIndex)
},10000)    