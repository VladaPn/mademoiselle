$(document).ready(function(){
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();
    //slider
    if ($('.team-slider').length > 0) {
        $(".team-slider").owlCarousel({
            loop:true,
            dots:true,
            dotsEach:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1,
                    margin:0
                }
            }
        });
    }
    //validator
    $('.contact-form').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                subject:{
                    required: true,
                    minlength: 3
                },
                message: {
                    required: true
                },
            messages: {
                name: {
                    required: 'Required',
                    minlength: 'Must enter more than 3 charachters'
                }
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest('.form-group').find('.error-msg'));
            }
        }
        });
    
}
);

