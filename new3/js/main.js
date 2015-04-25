$(document).ready(function() {
    $(".searchbtn").click(function() {
        event.preventDefault();
        $("#resultsnav").toggle();
    });
});

$(document).ready(function() {
    $('.click-nav > ul').toggleClass('no-js js');
    $('.click-nav .js ul').hide();
    $('.click-nav .js li').click(function (e) {
        $('.click-nav .js li ul').hide();
        $('.clicker').removeClass('active')
        $('ul',this).toggle();
        $('.clicker',this).toggleClass('active');
        e.stopPropagation();
    });
    $(document).click(function () {
        if ($('.click-nav .js ul').is(':visible')) {
            $('.click-nav .js ul', this).slideUp();
            $('.clicker').removeClass('active');
        }
    });
});
