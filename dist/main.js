(function ($) {


    $(document).ready(function () {

        $('.left').on('click', left);
        $('.right').on('click', right);

        var myInter = setInterval(startSlideShow, 1000);


        $("#temoin").on("mouseenter", function () {
            clearInterval(myInter)
        })
        $("#temoin").on("mouseleave", function () {
            myInter = setInterval(startSlideShow, 4000);
        })


    });

    function startSlideShow() {

        $("#temoin .temoin .slide:first-of-type").animate({ "margin-left": "-150vw" }, 1000, function () {
            $(this).css("margin-left", 0).appendTo(".temoin");
            slideText()
        });

    }

    $('.left').click(function (event) {
        event.preventDefault();
    })
    $('.right').click(function (event) {
        event.preventDefault();
    })

    function stop() {
        $('#temoin .temoin .slide').stop
    }



    function right() {

        $("#temoin .temoin .slide:first-of-type").animate({ "margin-left": "-150vw" }, 1000, function () {
            $(this).css("margin-left", 0).appendTo(".temoin");
            slideText()
        });
    }
    function left() {
        $("#temoin .temoin .slide:last-of-type")
            .prependTo('.temoin')
            .css('margin-left', '-150vw')
            .animate({
                "margin-left": 0,
            }, 1000);
        slideText()


    }


    function slideText() {
        if ($('#temoin .temoin .slide:first-of-type').hasClass("temoin1")) {
            $('#slideText').text('1/4')
        } else if ($('#temoin .temoin .slide:first-of-type').hasClass("temoin2")) {
            $('#slideText').html('2/4')
        } else if ($('#temoin .temoin .slide:first-of-type').hasClass("temoin3")) {
            $('#slideText').html('3/4')
        } else if ($('#temoin .temoin .slide:first-of-type').hasClass("temoin4")) {
            $('#slideText').html('4/4')
        }

    }




})(jQuery);