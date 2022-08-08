var array = ["oval","chapel"]
var arrayText = ["oval-content", "chapel-content"]
var variable = 0;
function mouseOver(value){

    function onHover(e){
        for (var i = 0; array.length; ++i){
            if (value.toString() == array[i]){ 
                var x = e.pageX;
                var y = e.pageY;
                document.getElementById(arrayText[i]).style.top = (y + -250) + 'px';
                document.getElementById(arrayText[i]).style.left = (x + 20) + 'px';
                document.getElementById(arrayText[i]).style.display="block";
                variable = arrayText[i];
                break;
            }
        }
    }
    document.getElementById(value).addEventListener("mousemove", onHover)

    function onOut(){
        document.getElementById(variable).style.display="none";
    }
    document.getElementById(value).addEventListener("mouseout", onOut)
}