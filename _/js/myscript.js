function displayTimetable(){
    window.alert("submitted!");
}




$(function() {
    $('.ui-btn-grid').on('click', function(e) {
        e.preventDefault();
        $('.side-categories').toggleClass('hide');
    });
});

function showMenu() {

    $(".side-categories").animate({
        width: "toggle",
        height: "toggle",
        fontSize: "1em"
    }, 350);
}


function showImages() {

    $('#mosaic').Mosaic({
        maxRowHeight: 250,
        refitOnResize: true
    });

    $('#images').append('<div class="product-image-overlay"><span class="product-image-overlay-close">x</span><img src="" /></div>');

    var productImage = $('.lep1');
    var productOverlay = $('.product-image-overlay');   
    var productOverlayImage = $('.product-image-overlay img');

    productImage.click(function () {
        var productImageSource = $(this).attr('src');

        productOverlayImage.attr('src', productImageSource);

        productOverlay.fadeIn(400);
        $('#images').css('overflow', 'hidden');

        $('.product-image-overlay-close').click(function () {
            productOverlay.fadeOut(300);
            $('#images').css('overflow', 'auto');
        });
    });
}

// Swiping between pages

$(document).on('swipeleft', '#home, #prices, #images, #faq, #contact', function(event){
    if(event.handled !== true) // This will prevent event triggering more then once
    {
        var nextpage = $.mobile.activePage.next('[data-role="page"]');
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
        }
        event.handled = true;
    }
    return false;
});

$(document).on('swiperight', '#home, #prices, #images, #faq, #contact', function(event){
    if(event.handled !== true) // This will prevent event triggering more then once
    {
        var prevpage = $(this).prev('[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
        event.handled = true;
    }
    return false;
});