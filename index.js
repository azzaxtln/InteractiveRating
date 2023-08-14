let valueReceived = false; 

$(".nums").on("click", function(){
   let clickedNum = this.id;

   $(".nums").not(this).removeClass("clicked");
   
    $("#" + clickedNum).toggleClass("clicked");
    valueReceived = true;
    showRate(clickedNum);
})


$(".sub").on("click", function(){

    if(valueReceived === true){
        $(".sectionStart").addClass("whoVisible")
        $(".sectionEnd").removeClass("whoVisible")
    } else{
        alert("toma no cu rapa, da uma nota nessa porra");
    }
    
})



function showRate (value){

  
    $(".rate").text(value);
}