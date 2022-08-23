$(document).ready(function() {
    $("a.go").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})

$(document).ready(function() {
   setInterval(rotateImages, 4000);
 });
 
 function rotateImages(){
   $("#photoShow").animate({marginLeft: "-1200px"}, 1000).delay(4000);
   
   $("#photoShow").animate({marginLeft: "-2400px"}, 1000).delay(4000);
   
   $("#photoShow").animate({marginLeft: "-3600px"}, 1000).delay(4000);

   $("#photoShow").animate({marginLeft: "-4800px"}, 1000).delay(4000);

   $("#photoShow").animate({marginLeft: "0px"}, 1000).delay(4000);
 }