let el1=document.querySelector("#aboutAnim");
let el2=document.querySelector('#author-person1');
let el3=document.querySelector('#author-person2');
let el4=document.querySelector('#author-person3');
let el5=document.querySelector('#author-person4');
let el6=document.querySelector('#about-author');
let el7=document.querySelector('#contact-anim');

window.addEventListener('scroll',function () {
 
    if(window.innerHeight>el1.getBoundingClientRect().top){
        el1.classList.add('fadeInRight');
    }
    if(window.innerHeight>el2.getBoundingClientRect().top){
        el2.classList.add('zoomIn')
        el3.classList.add('zoomIn')
        el4.classList.add('zoomIn')
        el5.classList.add('zoomIn')
    }
    
    if(window.innerHeight>el6.getBoundingClientRect().top){
        el6.classList.add('fadeInUp');
    }

    if(window.innerHeight>el7.getBoundingClientRect().top){
        el7.classList.add('fadeInRight');
    }
        
})
