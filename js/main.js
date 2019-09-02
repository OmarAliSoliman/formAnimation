function animationForm(){
    const arrow = document.querySelectorAll('.fa-arrow-down');
    console.log(arrow);

    arrow.forEach(arow=>{
        arow.addEventListener('click', ()=>{
            const input = arow.previousElementSibling;
            const parent = arow.parentElement;
            const next = parent.nextElementSibling;

            if(input.type==="text" && validateName(input)){
                nextSlider(parent, next);
            }else if(input.type==="email" && validateEmail(input)){
                nextSlider(parent, next);
            }else if(input.type==="password" && validatePassword(input)){
                nextSlider(parent, next);
            }else{
                parent.style.animation = "shake 0.5s ease";
            }
            parent.addEventListener('animationend',()=>{
                parent.style.animation="";
            })
        })
    })
}

function validateName(user){
    if(user.value.length < 6){
        error(" rgb(189, 87, 87)");
    }else{
        error(" rgb(87, 189, 130)");
        return true;
    }
}

function validateEmail(email){
    const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validate.test(email.value)){
        error(" rgb(87, 189, 130)");
        return true;
    }else{
        error(" rgb(189, 87, 87)");
    }
}

function validatePassword(password){
    if(password.value.length<5){
        error(" rgb(189, 87, 87)");
    }else{
        error(" rgb(87, 189, 130)");
        return true;
    }

}

function error(color){
    document.body.style.backgroundColor = color;
}

function nextSlider(parent, next){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    next.classList.add('active');
    next.classList.remove('innactive');
}


animationForm();