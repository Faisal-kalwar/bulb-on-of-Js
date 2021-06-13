function changeImage()
{
    var image = document.getElementById('myImages');
    if (image.src.match("bulbon"))
    {
        image.src = "images/bulboff.gif";
    }
    else{
        image.src = "images/bulbon.gif";
    }

}