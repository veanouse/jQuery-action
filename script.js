// $("document").ready(function(){
//     $("button").click(function(){
//         alert("sdfgh");
    
//     })
// })
let buttonMood = true;
// $("button").click(function(){
//     if(buttonMood == true){
//         // alert("asdfg")
//         $(".box1").animate({left: '250px'});
//         buttonMood = false;
//     }
//     else{
//         // alert("asdfg")

//         $(".box1").animate({left: '0'});
//         buttonMood = true;
//     }

// })
// $(document).ready(function(){
//     $("button").click(function(){
//       $("div").animate({left : '250px'});
//     });
//   });
setInterval(function(){
    if(buttonMood == true){
                // alert("asdfg")
                $(".box1").animate({left: '500px'});
                $(".box2").animate({right: '500px'});
                $(".box1").css({background: 'blue'});
                $(".box2").css({background: 'rgb(0, 255, 55)'});
                $(".box3").animate({top: '0'});
                $(".box3").css({background: ' rgb(255, 136, 0)'});
                $(".box4").animate({bottom: '0'});
                $(".box4").css({background: ' rgb(255, 0, 149)'})



                buttonMood = false;
            }
            else{
                // alert("asdfg")
        
                $(".box1").animate({left: '0'});
                $(".box2").animate({right: '0'});
                $(".box1").css({background: 'black'});
                $(".box2").css({background: 'black'});
                $(".box3").animate({top: '150px'});
                $(".box3").css({background: ' rgb(217, 255, 0)'});
                $(".box4").animate({bottom: '120px'});
                $(".box4").css({background: ' rgb(89, 0, 255)'});
                buttonMood = true;
            }

            // setInterval(function(){
            //         if(buttonMood == true){
            //             $(".box3").animate({top: '0'});
            //             $(".box3").css({background: ' rgb(255, 136, 0)'});
            //             buttonMood = false;
            //         }
            //         else{
                
            //             $(".box3").animate({top: '120px'});
            //             $(".box3").css({background: ' rgb(217, 255, 0)'});
            //             buttonMood = true;
            //         }
                
            //     } , 300)
            //     setInterval(function(){
            //         if(buttonMood == true){
            //             $(".box4").animate({bottom: '0'});
            //             $(".box4").css({background: ' rgb(255, 0, 149)'});
            //             buttonMood = false;
            //         }
            //         else{
                
            //             $(".box4").animate({bottom: '120px'});
            //             $(".box4").css({background: ' rgb(89, 0, 255)'});
            //             buttonMood = true;
            //         }
                
            //     } , 300)




} , 30);


// setInterval(function(){
//     if(buttonMood == true){
//         $(".box3").animate({top: '0'});
//         $(".box3").css({background: ' rgb(255, 136, 0)'});
//         buttonMood = false;
//     }
//     else{

//         $(".box3").animate({top: '150px'});
//         $(".box3").css({background: ' rgb(217, 255, 0)'});
//         buttonMood = true;
//     }

// } , 300)
// setInterval(function(){
//     if(buttonMood == true){
//         $(".box4").animate({bottom: '0'});
//         $(".box4").css({background: ' rgb(255, 0, 149)'});
//         buttonMood = false;
//     }
//     else{

//         $(".box4").animate({bottom: '120px'});
//         $(".box4").css({background: ' rgb(89, 0, 255)'});
//         buttonMood = true;
//     }

// } , 300)
// setInterval(function(){
//     if(buttonMood == true){
//         $(".box3").animate({top: '0'});
//         $(".box3").css({background: ' rgb(255, 136, 0)'});
//         $(".box4").animate({bottom: '0'});
//         $(".box4").css({background: ' rgb(255, 0, 149)'})
//         buttonMood = false;
//     }
//     else{

//         $(".box3").animate({top: '150px'});
//         $(".box3").css({background: ' rgb(217, 255, 0)'});
//         $(".box4").animate({bottom: '120px'});
//         $(".box4").css({background: ' rgb(89, 0, 255)'});
//         buttonMood = true;
//     }

// } , 300)
// setInterval(function(){
//     if(buttonMood == true){
//         $(".box4").animate({bottom: '0'});
//         $(".box4").css({background: ' rgb(255, 0, 149)'});
//         buttonMood = false;
//     }
//     else{

//         $(".box4").animate({bottom: '120px'});
//         $(".box4").css({background: ' rgb(89, 0, 255)'});
//         buttonMood = true;
//     }

// } , 300)