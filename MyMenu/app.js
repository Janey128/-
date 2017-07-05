/**
 * Created by dumengzhu on 17/7/1.
 */
$(document).ready(function(){
    $(".main a").click(function(){
       var ulNode=$(this).next("ul");
       // if(ulNode.css("display")=="none"){
       //     ulNode.css("display","block");
       // }else{
       //     ulNode.css("display","none");
       // }
       //ulNode.show();
        ulNode.toggle("normal");//数字。slow，normal，fast
        //ulNode.slideDown();
        //ulNode.slideUp();
        ulNode.slideToggle();



    })
})