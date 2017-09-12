$(document).ready(function() {
var carouselList = $("#carousel ul");
var interval = setInterval(changeSlide, 5000);
var currentSlide = 0;
var isAnimating = false;
    
    function changeSlide(n=1) {
        if(isAnimating) {
            return //nothing will happen here, coz no function name etc. afterwards
        }
        isAnimating = true;
        currentSlide = (currentSlide + n) % 5;
        addCurrentClass(currentSlide);
        carouselList.animate({"marginLeft": -500 * n}, 1000, function() {
            moveFirstSlide(n);
            isAnimating = false;
        });
    }
    
    function changeSlideBackwards(n=1) {
        if(isAnimating) {
            return 
        }
        isAnimating = true;
        currentSlide = (currentSlide - n) % 5;
        addCurrentClass(currentSlide);
        carouselList.animate({"marginLeft": 500 * n}, 1000, function() {
            moveLastSlide();
            isAnimating = false;
        }); 
    }
    
    function moveFirstSlide(n) {
        var firstItem = carouselList.find("li").slice(0, n);
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    } 

    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft: 0});
    }
    
    $("#left").click(function() {
        changeSlideBackwards(1);
    });
    
    
    $("#right").click(function() {
        changeSlide(1);
    });
        
function addCurrentClass(index) {
$("#pagination span").removeClass("current");
$("#pagination span").eq(index).addClass("current");
}

$("#pagination").on("click", "span", function() {
    var clickedSpanIndex = $(this).index();
    var currentSpanIndex = $("#pagination span.current").index();
    var differenceSpanIndex = currentSpanIndex - clickedSpanIndex;
    var slide = carouselList.find("li").get(currentSpanIndex);
    
    if(differenceSpanIndex > 0) {
        slide = (slide - differenceSpanIndex) % 5;
        addCurrentClass(clickedSpanIndex);
        carouselList.animate({"marginLeft": 500 * differenceSpanIndex}, 300, moveLastSlide);
    } else if(differenceSpanIndex < 0) {
        slide = (slide + differenceSpanIndex) % 5;
        addCurrentClass(clickedSpanIndex);
        carouselList.animate({"marginLeft": -500 * differenceSpanIndex}, 300, moveFirstSlide);
    } else {
        changeSlide(1);
    }
});

});
   


/*
$(document).ready(function() {
var carouselList = $("#carousel ul");
var interval = setInterval(changeSlide, 3000);
var currentSlide = 0;
var isAnimating = false;
    
    function changeSlide(n=1) {
        if(isAnimating) {
            return //nothing will happen here, coz no function name etc. afterwards
        }
        isAnimating = true;
        currentSlide = (currentSlide + n) % 5;
        addCurrentClass(currentSlide);
        carouselList.animate({"marginLeft": -500 * n}, 1000, function() {
            moveFirstSlide(n);
            isAnimating = false;
        });
    }
    
    function changeSlideBackwards(n=1) {
        if(isAnimating) {
            return 
        }
        isAnimating = true;
        currentSlide = (currentSlide - n) % 5;
        addCurrentClass(currentSlide);
        carouselList.animate({"marginLeft": 0}, 1000, function() {
            moveLastSlide(n);
            isAnimating = false;
        });
    }
    
    function moveFirstSlide(n) {
        var firstItem = carouselList.find("li").slice(0, n);
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    } 

    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft: -500});
    }
    
    $("#left").click(function() {
        changeSlideBackwards(1);
    });
    
    
    $("#right").click(function() {
        changeSlide(1);
    });
        
function addCurrentClass(index) {
$("#pagination span").removeClass("current");
$("#pagination span").eq(index).addClass("current");
} 
});
*/





