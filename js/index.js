document.getElementById("mainTitle").innerText = "Point and Click adventure";
document.getElementById("mainTitle").style.textAlign = "center";

const offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");


gameWindow.onclick =  function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    mainCharacter.style.left = x -offsetCharacter + "px";
    mainCharacter.style.top = y-offsetCharacter + "px";

    console.log(e.target.id);

    switch(e.target.id){
        case "door1":
            //something here
            break;
        case "door2":
            //something insert here
            break;
        default:
            break;
    }
    //console.log(x);

    //put in css on main character "Transition: all us ease-in-out;
}