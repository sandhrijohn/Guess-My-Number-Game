// random
const randnum = parseInt(Math.random()*10+1);
// console.log(randnum);
// accessing btn
const btn =document.getElementsByClassName('btn')[0];
// accessing form
const form=document.getElementsByClassName('border')[0];
// accessing notice
const notice=document.getElementById('notice');
// accessing score class
const score = document.getElementsByClassName('score')[0];

var count=0;

btn.addEventListener('click',function(e){
    e.preventDefault();
    const num = document.getElementById('num').value;
    if(randnum>num){
        notice.innerText = "try a bigger number"
        form.style.borderColor="red"
        count++;
        score.innerText=count;
    }else if(randnum == num){
        notice.innerText = "congrats"
        form.style.borderColor="green"
        score.innerText=count;
    }else{
        count++;
        notice.innerText = "try a smaller number"
        form.style.borderColor="red"
        score.innerText=count;
    }
    form.reset()
})