var carouselList = $("#carousel ul"),
    $prev = $('#prev'),
    $next = $('#next'),
    interval;

$(function(){
	interval = setInterval(moveSlideRight, 3000); 
});

function moveSlideRight() {
	carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
}

function moveSlideLeft() {
    moveLastSlide();
    carouselList.animate({'marginLeft': 0}, 500);
}

function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	
	lastItem.after(firstItem)
	carouselList.css({marginLeft: 0});
}

function moveLastSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    
    firstItem.before(lastItem);
    carouselList.css({marginLeft: -400});
}

$prev.click(function() {
    moveSlideLeft();
});

$next.click(function() {
    moveSlideRight();
});

$('#carousel').hover(
    function() {
        clearInterval(interval);
    },
    function() {
        interval = setInterval(moveSlideRight, 3000); 
    }
);


