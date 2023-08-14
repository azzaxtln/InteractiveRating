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
        alert("Select an option before submitting!
");
    }
    
})



function showRate (value){

  
    $(".rate").text(value);
}
