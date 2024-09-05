let image= document.querySelectorAll(".slide");
let next = document.querySelector(".next");
let pre = document.querySelector(".pre");
let radio= document.querySelectorAll(".radbtn");
let btnArr= Array.from(radio);



let currentSlide=0;
let arr = Array.from(image);

function showSlide(Slide){
    arr.forEach((e)=>{
        e.style.display = "none";
    })
    console.log(Slide);
    btnArr.forEach((e)=>{
        e.classList.remove("active");
    })

    btnArr[Slide].classList.add("active")
    
        arr[Slide].style.display = "inline-block";
        currentSlide=Slide;
    
}


next.addEventListener("click",()=>{

    if(currentSlide>=4){
        currentSlide=0;
        showSlide(currentSlide);
    }
    else{
        currentSlide++;
        showSlide(currentSlide);
    }
    
})

pre.addEventListener("click", ()=>{
    if(currentSlide<=0){
        currentSlide=4;
        showSlide(currentSlide);
    }
    else{
        currentSlide--;
        showSlide(currentSlide);
    }
})


btnArr.forEach((e, index)=>{
    e.addEventListener("click",()=>{
        showSlide(index);
        btnArr.forEach((e)=>{
            e.classList.remove("active");
        })

        e.classList.add("active");
    })
})


showSlide(currentSlide);