
//for checking the button clicked
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){;
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
})};


// for keyboard presses
document.addEventListener("keydown", function(event){
    makeSound(event.key);//event.key wou;d return the key pressed in the keyboard
});



function makeSound(key){
    switch(key){ //will check for input from the clicks and key presses
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break; 
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;   
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break; 
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log("this.innerHTML");
    }
}

