var canvas = new fabric.Canvas("myCanvas");
var blockWidth = 30;
var blockHeight = 30;
var playerXValue = 10;
var playerYValue = 10;
var playerObject = "";
var blockObject = "";




function playerUpdate() 
{ fabric.Image.fromURL("player.png", function(Img) 
{ playerObject = Img; 
    playerObject.scaleToWidth(150); 
    playerObject.scaleToHeight(140); 
    playerObject.set({ 
        top:playerXValue, 
        left:playerYValue 
    }); 
    canvas.add(playerObject); 
});} 



function blockImage(get_image) 
{ 
    fabric.Image.fromURL(get_image, function(Img){ 
        blockObject = Img; 
        blockObject.scaleToWidth(blockWidth); 
        blockObject.scaleToHeight(blockHeight); 
        blockObject.set({ 
            top:playerXValue, 
            left:playerYValue 
        }); 
        canvas.add(blockObject); 
    }); }



window.addEventListener("keydown", myKeydown);

function myKeydown(e)
{
    keyPressed = e.keyCode;
    console.log( "currently pressed key" + keyPressed);
    if (e.shiftkey == true && keyPressed == '80')
    {
        console.log("P and Shift pressed together");
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10
        document.getElementById("currentWidth =").innerHTML = blockWidth;
        document.getElementById("currentHeight =").innerHTML = blockHeight;
    }

    if (e.shiftkey == true && keyPressed == '77')
    {
        console.log("M and Shift pressed together");
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10
        document.getElementById("currentWidth =").innerHTML = blockWidth;
        document.getElementById("currentHeight =").innerHTML = blockHeight;
    }

    if(keyPressed == '38') 
    { 
       Up();
       console.log("up"); 
    } 
     
    if(keyPressed == '40') 
    { 
       Down(); 
      console.log("down"); 
    } 
    if(keyPressed == '37') 
    { 
       Left(); 
      console.log("left"); 
    } 
    
    if(keyPressed == '39') 
    { 
       Right(); 
      console.log("right"); 
    }

    
    if (keyPressed == '87')
    {
       blockImage("wall.jpg");
       console.log("W");
    }

    if (keyPressed == "71")
    {
       blockImage("ground.png");
       console.log("G");
    }

    if (keyPressed == "68")
    {
       blockImage("cloud.jpg");
       console.log("C");
    }

    if (keyPressed == "69")
    {
       blockImage("dark_green.png");
       console.log("D");
    }
     
    if (keyPressed == "76")
    {
       blockImage("light_green.png");
       console.log("L");
    }

    if (keyPressed == "82")
    {
       blockImage("roof.jpg");
       console.log("R");
    }

    if (keyPressed == "84")
    {
       blockImage("trunk.jpg");
       console.log("T");
    }

    if (keyPressed == "85")
    {
       blockImage("unique.png");
       console.log("U");
    }

    if (keyPressed == "89")
    {
       blockImage("yellow_wall.png");
       console.log("Y");
    }
}

// player should also be able to edit height and width of canvas to be able have more build space

function Down() 
{ 
   if(playerYValue <=500) 
   { 
      playerYValue = playerYValue + blockHeight; 
      console.log("block image height = " + blockHeight); 
      console.log("When Down arrow key is pressed, X = " + playerXValue + " , Y = "+playerYValue); 
      canvas.remove(playerObject); 
      playerUpdate(); 
   } 
}

function Up() 
{ 
   if(playerYValue >=0) 
   { 
      playerYValue = playerYValue - blockHeight; 
      console.log("block image height = " + blockHeight); 
      console.log("When Up arrow key is pressed, X = " + playerXValue + " , Y = "+playerYValue); 
      canvas.remove(playerObject); 
      playerUpdate(); 
   } 
}

function Right()
{
   if ( playerXValue <= 850)
   {
      playerXValue = playerXValue + blockWidth;
      canvas.remove(playerObject);
      playerUpdate();
   }
}

function Left()
{
   if ( playerXValue >= 0)
   {
      playerXValue = playerXValue - blockWidth;
      canvas.remove(playerObject);
      playerUpdate();
   }
}

