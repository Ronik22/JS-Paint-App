function _(selector){
    return document.querySelector(selector);
}

function setup(){
    let canvas = createCanvas(displayWidth, displayHeight);
    canvas.parent("canvas-wrapper");
    background(255);
    cursor(CROSS);
}

function mouseDragged(){
    let type = _('input[name="pen-type"]:checked').value;
    let size = parseInt(_("#pen-size").value);
    let color = _("#pen-color").value; 
    fill(color);
    stroke(color);
    strokeWeight(size);

    if(type == "pencil")
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    } 
    else if(type == "brush") 
    {
        ellipse(mouseX, mouseY, size, size);
    } 
    else 
    {
        stroke(_("#background-color").value);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

_("#reset-canvas").addEventListener("click", function(){
    clear();
    background(255);
  });

_("#save-canvas").addEventListener("click",function(){
saveCanvas(canvas, "sketch", "png");
});

_("#background-color").addEventListener("change", function(){
    background(_("#background-color").value);
  });