/**
 * Created by dumengzhu on 17/7/4.
 */
$(document).ready(function(){
    var autotags=["iwen","ime","html","css","javascript","andriod","ios"];
    $("#tags").autocomplete({
        source:autotags
    })
})