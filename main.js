const mainFood = document.getElementById("main-food");
const leftBtn = document.querySelector(".backward");
const rightBtn = document.querySelector(".forward");
var foodsList = ['./images/main1.png', './images/main2.png', './images/main3.png'];
var degreeList = ['90deg', '45deg', '0deg'];
var count = 1; 



rightBtn.addEventListener('click', ()=>{
    
    if(count < foodsList.length){
        count++;
        console.log(foodsList[count-1]);
        document.getElementById("dashed-line").style.transform  = `rotate(${degreeList[count-1]})`; 
        document.getElementById('main-food').style.backgroundImage = `url(${foodsList[count-1]})`;
    }
    else{
        count = 1;
        console.log(foodsList[count-1]);
        document.getElementById("dashed-line").style.transform  = `rotate(${degreeList[count-1]})`; 
        document.getElementById("main-food").style.backgroundImage = `url(${foodsList[count-1]})`;
    }  
});
leftBtn.addEventListener('click', ()=>{
    
    if(count > 1){
        count--;
        document.getElementById("dashed-line").style.transform  = `rotate(${degreeList[count-1]})`; 
        document.getElementById('main-food').style.backgroundImage = `url(${foodsList[count-1]})`;
    }
    else{
        count = 3;
        document.getElementById("dashed-line").style.transform  = `rotate(${degreeList[count-1]})`; 
        document.getElementById('main-food').style.backgroundImage = `url(${foodsList[count-1]})`;
    }  
});


