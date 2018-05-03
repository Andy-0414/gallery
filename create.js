function createImgBox(){
    var list = document.getElementById("list");
    var imgBox = document.createElement("div");
    imgBox.classList = "imgBox";
    list.appendChild(imgBox);
};

addEventListener("scroll",function(){
    var box = document.getElementById("boxShadow");
    if(scrollY == 0)
    {
        box.classList = "nonBoxSh";
    }
    else
    {
        box.classList = "boxSh";
    }
})