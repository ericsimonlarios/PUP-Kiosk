var tooltipInfo = document.getElementById("info-container");
var imgContainer = document.getElementById("img-container");
var titleContainer = document.getElementById("title-container");
var textContainer = document.getElementById("text-container");
var imgHolder = ["res/oval.jpg", "res/chapel.jpg", "res/obelisk.jpg", "res/dome.jpg", "res/catwalk.jpg", "res/north.jpg", "res/west.jpg", "res/east.jfif", "res/south.jfif", "res/nalalrc.jpg"];
var textHolder = [["Oval","This is the place where physical and extracurricular activities are mostly held."]
        ,["Interfaith Chapel", "A chapel located inside the PUP campus, the place where you can ask for forgiveness whenever you cheated on a exam."]
        ,["Obelisk","The Obelisk, symbolizes the supremacy of our institituion. You will not graduate if you enter its proximity while still being a student."]
        ,["The Dome","The place where you go round and round. There are rumors that if you use the Dome for travelling, that little maneuver will cost you 50 years."]
        ,["Catwalk", "It is where leaves will soon grow from the bareness of trees. The most relaxing place in PUP especially in mid December."]
        ,["North Wing", "The Spearfront of the Main Building, this is where most of the banners are hanged"]
        ,["West Wing", "This is where the Administrative Offices can be found."]
        ,["East Wing","This is where the Campus Clinic and the IT people can be found"]
        ,["South Wing","Claro M. Recto Hall can be located on the South Wing, also where the Psychology Students can be found."]
        ,["NALALRC", "This is where the vast library can be found. "]]


function mouseOver(value){

    function onHover(e){
        var x = e.pageX;
        var y = e.pageY;
        tooltipInfo.style.top = (y + -250) + 'px';
        tooltipInfo.style.left = (x + 20) + 'px';
        tooltipInfo.style.display="flex";
        if (value == 9){
            tooltipInfo.style.top = (y + 20) + 'px';
            tooltipInfo.style.left = (x + 20) + 'px';
        }
        for (var i = 0; imgHolder.length; ++i){
            if(parseInt(value) == i){   
                imgContainer.src = imgHolder[i];
                for(var j = 0; textHolder.length; ++j){
                    titleContainer.innerText = textHolder[i][j];
                    textContainer.innerText = textHolder[i][j+1];
                    break;
                }
                break;
            }
        }     
    }
    document.getElementById(value).addEventListener("mousemove", onHover)
    
    function onOut(){
        tooltipInfo.style.display="none";
    }
    document.getElementById(value).addEventListener("mouseout", onOut)
}

function cursorTracker(e){
    var x = e.pageX;
    var y = e.pageY;
    document.getElementById("x").innerText = x;
    document.getElementById("y").innerText = y;
    
}
window.addEventListener("mousemove", cursorTracker);






