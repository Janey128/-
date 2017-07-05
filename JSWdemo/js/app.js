/**
 * Created by dumengzhu on 17/6/30.
 */
window.onload=function(){
imgLocation("container","box")
    var imgData={"data":[{"src":"2.jpeg"},{"src":"8.jpeg"},{"src":"7.jpeg"},{"src":"5.jpeg"},{"src":"6.jpeg"}]};
    window.onscroll=function(){
    if(checkFlag()){
        var cparent=document.getElementById("container");
        for(var i=0;i<imgData.data.length;i++){
            var ccontent =document.createElement("div");
            cparent.apprendChild(ccontent);
            var boximg=document.createElement("div");
            boximg.className="box_img";
            ccontent.appendChild(boximg);
            var img=document.createElement("img");
            img.src="img/"+imgData.data[i].src;
            boximg.appendChild(img);

    }
        imgLocation("container","box")
    }

}
}

function checkFlag(){
    var cparent=document.getElementById("container");
    var ccontent=getChildElement(cparent,"box");
    var lastContentHeight=ccontent[ccontent.length-1].offsetTop;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;
    if(lastContentHeight<scrollTop+pageHeight){
        return true;
    }
}
function imgLocation(parent,content){
    var cparent=document.getElementById(parent);
    var ccontent=getChildElement(cparent,content);
    var imgWidth=ccontent[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth/imgWidth);
    cparent.style.cssText="width:"+imgWidth*cols+"px;margin:0 auto";

    var BoxHeightArr=[];
    for(var i=0;i<ccontent.length;i++){
        if(i<num){
            BoxHeightArr[i]=ccontent[i].offsetHeight;
        }else{
            var minHeight=Math.min.apply(null,BoxHeightArr);
            var minIndex=getmininheightLocation(BoxHeightArr,minHeight);
            ccontent[i].style.position="absolute";
            ccontent[i].style.top=minheight+"px";
            ccontent[i].style.left=ccontent[minIndex].offsetLeft+"px";
            BoxHeightArr[minIndex]=BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
        }
    }
}

function getminheightLocation(BoxHeightArr,minHeight){
    for(var i in BoxHeightArr){
        if(BoxHeightArr[i]==minHeight){
            return i;
        }
    }

}
function getChildElement(parent,content){
    var contentArr=[];
    var allcontent=parent.getElementsByTagName("*");
    for(var i=0;i<allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}