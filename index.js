let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")

let onen = document.querySelector(".onen")
let twon = document.querySelector(".twon")
let threen = document.querySelector(".threen")
let fourn = document.querySelector(".fourn")

let restart = document.querySelector(".restart")

let parent = document.querySelector(".parent")

let start = document.querySelector(".start")

let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let span3 = document.querySelector(".span3")
let span4 = document.querySelector(".span4")

let span11 = document.querySelector(".span11")
let span22 = document.querySelector(".span22")
let span33 = document.querySelector(".span33")
let span44 = document.querySelector(".span44")

let notmatched = [];
let check = [];
let matched =0;

one.addEventListener("click", function(){
    span1.style.transform = "rotateY(0)";
   //setTimeout(ttime,500)
   
    if(check.length == 0){
        check[0] = 1;
        notmatched[0] = span1
       
       
    }else if(check.length == 1){
     setTimeout(function (){
       check[1] = 1;
       notmatched[1] = span1
       if(check[0] == check[1]){
          notmatched = []
           check = []
           matched++;
           if(matched >= 4){
              restart.textContent = "play again"
          }
       } else {
           check = []
           notmatched[0].style.transform = "rotateY(90deg)"
           notmatched[1].style.transform = "rotateY(90deg)"
    
       }
   
     },500) 
   }
   
   })
   
   
   two.addEventListener("click", function(){
       span2.style.transform = "rotateY(0)";
   
       if(check.length == 0){
           check[0] = 2;
       notmatched[0] = span2;
          
       }
       else if(check.length == 1){
           setTimeout(function (){
               check[1] = 2;
               notmatched[1] = span2
               if(check[0] == check[1]){
                   check = []
                   notmatched = []
                   matched++;
                   if(matched >= 4){
                       restart.textContent = "play again"
                   }
               }
              else {
                   check = []
                   notmatched[0].style.transform = "rotateY(90deg)"
                   notmatched[1].style.transform = "rotateY(90deg)"
}
         
           },500) 
       }
   })
   
   three.addEventListener("click", function(){
       span3.style.transform = "rotateY(0)";
   
       if(check.length == 0){
           check[0] = 3;
             notmatched[0]=span3;
          
       }
   else if(check.length == 1){
      setTimeout(function(){
       
           check[1] = 3;
           notmatched[1]=span3;
           if(check[0] == check[1]){
               check = []
               notmatched=[]
               matched++;
               if(matched >= 4){
                   restart.textContent = "play again"
               }
           }
           else {
               check = []
               notmatched[0].style.transform = "rotateY(90deg)"
               notmatched[1].style.transform = "rotateY(90deg)"
   
           }
       
       },500) 
   }
   })
   
   four.addEventListener("click", function(){
       span4.style.transform = "rotateY(0)";
   
       if(check.length == 0){
           check[0] = 4;
           notmatched[0]=span4;
          
       }else if(check.length == 1){
        setTimeout(function (){  check[1] = 4;
           notmatched[1]=span4;
           if(check[0] == check[1]){
               check = []
               notmatched=[]
               matched++;
               if(matched >= 4){
                   restart.textContent = "play again"
               }
           }
           else {
               check = []
               notmatched[0].style.transform = "rotateY(90deg)"
               notmatched[1].style.transform = "rotateY(90deg)"
   
           }
       },500)
       }
   })
   
   
   onen.addEventListener("click", function(){
       span11.style.transform = "rotateY(0)"
       
       if(check.length == 0){
           check[0] = 1;
           notmatched[0]=span11;
   
          
       }else if(check.length == 1){
        setTimeout(function(){   check[1] = 1;
           notmatched[1]=span11;
           if(check[0] == check[1]){
               check = []
               notmatched=[]
               matched++;
               if(matched >= 4){
                   restart.textContent = "play again"
               }
   
           } else {
               check = []
               notmatched[0].style.transform = "rotateY(90deg)"
               notmatched[1].style.transform = "rotateY(90deg)"
           }
       },500)
       }
      })
      
      twon.addEventListener("click", function(){
          span22.style.transform = "rotateY(0)"
   
          if(check.length == 0){
           check[0] = 2;

notmatched[0]=span22;
           
          
       }else if(check.length == 1){
        setTimeout(function(){   check[1] = 2;
           notmatched[1]=span22;
           if(check[0] == check[1]){
               check = []
               notmatched=[]
               matched++;
               if(matched >= 4){
                   restart.textContent = "play again"
               }
           } else {
               check = []
               notmatched[0].style.transform = "rotateY(90deg)"
               notmatched[1].style.transform = "rotateY(90deg)"
   
           }
       },500)
       }
      })
      
      threen.addEventListener("click", function(){
          span33.style.transform = "rotateY(0)"
   
          if(check.length == 0){
           check[0] = 3;
           notmatched[0]=span33;
          
       }else if(check.length == 1){
         setTimeout(function(){
              check[1] = 3;
           notmatched[1]=span33
           if(check[0] == check[1]){
               notmatched=[]
               check = []
               matched++;
               if(matched >= 4){
                   restart.textContent = "play again"
               }
           }
           else {
               check = []
               notmatched[0].style.transform = "rotateY(90deg)"
notmatched[1].style.transform = "rotateY(90deg)"
           }
       },500)
       }
      })
      
      fourn.addEventListener("click", function(){
          span44.style.transform = "rotateY(0)";
   
          if(check.length == 0){
           check[0] = 4;
           notmatched[0]=span44;
          
       }else if(check.length == 1){
       setTimeout(function(){    check[1] = 4;
           notmatched[1]=span44
           if(check[0] == check[1]){
               check = []
               matched++;
               if(matched >= 4){
                   restart.textContent = "play again"
               }
           } else {
               check = []
               notmatched[0].style.transform = "rotateY(90deg)"
               notmatched[1].style.transform = "rotateY(90deg)"
   
           }
       },500)
       }
      })
      
   
   
      restart.addEventListener("click", function(){
        restart.textContent = "restart"
        if(matched >= 4){

            for(var i = parent.children.length; i >= 0; i--) {
                parent.appendChild(parent.children[Math.random() * i | 0]);
                check = []
                matched = 0
                span1.style.transform = "rotateY(0deg)"
        span2.style.transform = "rotateY(0deg)"
        span3.style.transform = "rotateY(0deg)"
        span4.style.transform = "rotateY(0deg)"

        span11.style.transform = "rotateY(0deg)"
        span22.style.transform = "rotateY(0deg)"
        span33.style.transform = "rotateY(0deg)"
        span44.style.transform = "rotateY(0deg)"

        setTimeout(function(){ 
            span1.style.transform = "rotateY(90deg)"
                span2.style.transform = "rotateY(90deg)"
                span3.style.transform = "rotateY(90deg)"
                span4.style.transform = "rotateY(90deg)"
        
                span11.style.transform = "rotateY(90deg)"
                span22.style.transform = "rotateY(90deg)"
                span33.style.transform = "rotateY(90deg)"
                span44.style.transform = "rotateY(90deg)"
          },5000)
                
            }
        } else {
            check = []
            matched = 0

            span1.style.transform = "rotateY(0deg)"
            span2.style.transform = "rotateY(0deg)"
            span3.style.transform = "rotateY(0deg)"
            span4.style.transform = "rotateY(0deg)"
    
            span11.style.transform = "rotateY(0deg)"
            span22.style.transform = "rotateY(0deg)"
            span33.style.transform = "rotateY(0deg)"
            span44.style.transform = "rotateY(0deg)"

setTimeout(function(){
                span1.style.transform = "rotateY(90deg)"
                span2.style.transform = "rotateY(90deg)"
                span3.style.transform = "rotateY(90deg)"
                span4.style.transform = "rotateY(90deg)"
        
                span11.style.transform = "rotateY(90deg)"
                span22.style.transform = "rotateY(90deg)"
                span33.style.transform = "rotateY(90deg)"
                span44.style.transform = "rotateY(90deg)"
             },5000)
            
        }
      
    })
    




start.addEventListener("click", function(){
    one.style.pointerEvents = "all"
    two.style.pointerEvents = "all"
    three.style.pointerEvents = "all"
    four.style.pointerEvents = "all"

    onen.style.pointerEvents = "all"
    twon.style.pointerEvents = "all"
    threen.style.pointerEvents = "all"
    fourn.style.pointerEvents = "all"

    if(matched == 0){
    for(var i = parent.children.length; i >= 0; i--) {
        parent.appendChild(parent.children[Math.random() * i | 0]);
    }
        span1.style.transform = "rotateY(0deg)"
        span2.style.transform = "rotateY(0deg)"
        span3.style.transform = "rotateY(0deg)"
        span4.style.transform = "rotateY(0deg)"

        span11.style.transform = "rotateY(0deg)"
        span22.style.transform = "rotateY(0deg)"
        span33.style.transform = "rotateY(0deg)"
        span44.style.transform = "rotateY(0deg)"
setTimeout(function(){
        span1.style.transform = "rotateY(90deg)"
        span2.style.transform = "rotateY(90deg)"
        span3.style.transform = "rotateY(90deg)"
        span4.style.transform = "rotateY(90deg)"

        span11.style.transform = "rotateY(90deg)"
        span22.style.transform = "rotateY(90deg)"
        span33.style.transform = "rotateY(90deg)"
        span44.style.transform = "rotateY(90deg)"
        },5000)
    }
})
