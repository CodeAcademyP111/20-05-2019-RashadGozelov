var ul=document.querySelectorAll("#ul li");
// console.log(ul)
for(var i=0; i<ul.length;i++){
ul[i].addEventListener("click",function(){
  var li=document.querySelector(".active-contain")
    this.classList.add("active-contain");
    li.classList.remove("active-contain")
    var contain=this.nextElementSibling;

    if(contain.style.display=="block"){
    contain.style.display="none";
    }else{
        contain.style.display="block";
    }
})
}
