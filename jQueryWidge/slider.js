/**
 * Created by dumengzhu on 17/7/5.
 */
var valueSpan,slider;
$(document).ready(function(){
    //$("#slider").slider();
    slider=$("#slider");
    valueSpan=("#span");

   // slider.slider({
     //   change:function(event,ui){
       //     valueSpan.text(slider.slider("option","value"));
        //}
    //});
    slider.slider({
    slide:function(event,ui){
        valueSpan.text(slider.slider("option","value"));
    }
    })
});