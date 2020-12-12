'use strict';
const timeline = gsap.timeline({defaults:{duration:1,ease:"elastic"}});
const colors = ['#ff4646','#61b15a','#03506f','#0a043c'];
timeline.to('.box',{
    ease:"back",
    delay:1,
    // yoyo:true,
    // yoyo:false,
    // repeat:-1,
    // repeat:3,
    stagger:.3,
    rotate:function(i,el,boxes){
     return i%2===1? 720 :0
    },
    y:function(i,el,boxes){
     return i%2===1?-80:80;
    },
    backgroundColor: function(i,el,boxes){
        return colors[i % 4];
    },
    scale:function(i,el,boxes){
        return i%2===1?.8:2;
    },
})
const play = document.querySelector('.play');
const reverse = document.querySelector('.reverse');
const pause = document.querySelector('.pause');
const resume = document.querySelector('.resume');
const restart = document.querySelector('.restart');
play.addEventListener('click',()=>{
    timeline.play();
    
})
reverse.addEventListener('click',()=>{
    timeline.reverse();
    
})
pause.addEventListener('click',()=>{
    timeline.pause();
    
})
resume.addEventListener('click',()=>{
    timeline.resume();
    
})
restart.addEventListener('click',()=>{
    timeline.restart();
   
})