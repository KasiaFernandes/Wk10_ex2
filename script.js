$(document).ready(function() {
var carouselList = $("#carousel ul");
var interval = setInterval(changeSlide, 3000);

    
    function changeSlide() {
        carouselList.animate({"marginLeft": -500}, 1000, moveFirstSlide);
    }
    
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    } 

    $("#left").click(function() {
        carouselList.stop();
        carouselList.animate({"marginLeft": 500},200, function() {
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            lastItem.before(firstItem);
            carouselList.css({marginLeft: 0});
        })
    });
    
    $("#right").click(function() {
        carouselList.stop();
        carouselList.animate({"marginLeft": -500}, 200, moveFirstSlide);
    });
    
    
    for(var i = 0; i < $("li").length; i++) {
   addCurrentClass(0);
}
                       
    
function addCurrentClass(index) {
$("span").index().addClass("current");
}

function removeCurrentClass(index) {
$("span").index().removeClass("current");
}
    
});






