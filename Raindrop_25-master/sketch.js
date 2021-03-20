var drops = []
var letters = "1234567890!@#$%^&*()_+{|\.,<>`~:'=?/";
// other sample characters : !@#$%^&*()<>?/`~{}[]\|,.
//  "也 池 驰 馳 弛"
// 
function setup()
{   
    createCanvas(1500,600);
    frameRate(15);
    
    for(var i=0;i<100;i++)
    {
        drops.push(new Drop());
    }
}

function draw()
{

    background("cyan");
    for(var i=0;i<drops.length;i++)
    {
        drops[i].draw();
        drops[i].update();
    }
}
