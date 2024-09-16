
//for checking the button clicked
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){;
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);//to see the click animation
})};


// for keyboard presses
document.addEventListener("keydown", function(event){
    makeSound(event.key);//event.key would return the key pressed in the keyboard
    buttonAnimation(event.key);//to see the key press animation
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

function buttonAnimation(currentKey){//current key would be a single character
    var activeButton = document.querySelector("."+currentKey);// to select as a class
    activeButton.classList.add("pressed");
    setTimeout(function(){//to revert back to original form after the click
        activeButton.classList.remove("pressed");
    }, 100);
}