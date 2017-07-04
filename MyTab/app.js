/**
 * Created by dumengzhu on 17/7/1.
 */
$(document).ready(function(){
    $("#tablefirst li").each(function(index){
        $(this).onmouseover(function() {
            $("div.content").removeClass("content");
            $("#tablefirst li.tabin").removeClass("tabin");
            $("div").eq(index).addClass("content");
            liNode.addClass("tabin");
        }).mouseout(function(){

        })
        })
    })
