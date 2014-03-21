$(document).ready(function() {
    
    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            var text = select_list.find("li").first().text();
            select_list.hide();
            $(this).find(".js-select-text").text(text);
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.slideUp("fast");
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.slideDown("fast");
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                event.stopPropagation();
                return false;
            });
            $(".help").on('click', function(event){
                $(".js-select-list").hide();
                event.stopPropagation();
            });
        });

    }
    select();
    $('.js-select').click(function(event){
        event.stopPropagation();
    });

    // help btn toggle

    $(".help__btn").on('click', function(event){
    	$(this).parent().toggleClass('is-open');
    });
    $('.help').click(function(event){
        event.stopPropagation();
    });

    // table arrow toggle
    $(".table th p").on('click', function(){
    	$(this).find('i').toggleClass('is-up');
    });

    // toggle FAQ

    $(".js-answer").hide();
    $(".js-question").on('click', function(){
        $(".js-question").removeClass('is-open');
        $(this).addClass('is-open');
        $(".js-answer").show();
        $("html, body").animate({
          scrollTop: $(".js-divide").offset().top
        }, 500);
        return false;
    });

    //toggle answer form

    $(".js-chat-form").hide();
    $(".js-show-chat").on('click', function(){
        $(".js-chat-form").slideDown('fast');
    });
    $(".js-hide-chat").on('click', function(){
        $(".js-chat-form").slideUp('fast');
    });

    // techinfo toggle
    $(".js-techinfo").hide();
    $(".js-techinfo-btn").on('click', function(){
        $(this).toggleClass('is-open');
        $(".js-techinfo").slideToggle();
    });

    // toggle chat

    $(".js-popup").hide();
    $(".js-popup-btn").on('click', function(){
        $(".js-popup").toggle();
    });

    // toggle user info in popup

    $(".js-user-info").hide();
    $(".js-user-info-btn").on('click', function(){
        $(this).toggleClass('is-open');
        $(".js-user-info").slideToggle('fast');
    });
    
    // toggle mass message

    $(".js-popup-mass-close").on('click', function(){
        $(".js-popup-mass").toggle();
    });

    // toggle request popup

    $(".js-request").hide();

    $(".js-request-btn").on('click', function(){
        $(".js-request").show();
    });
    $(".js-request-close").on('click', function(){
        $(".js-request").hide();
    });
     

    // toggle popup user

    $(".js-popup-user").hide();

    $(".js-popup-user-btn").on('click', function(){
        $(".js-popup-user").show();
    });
    $(".js-popup-user-close").on('click', function(){
        $(".js-popup-user").hide();
    });

    // toggle profile dropdown

    $(".js-profile").hide();

    $(".js-profile-btn").on('click', function(event){
        $(this).toggleClass('is-open');
        $(".js-profile").slideToggle('fast');
        return false;
    });
    $('.js-profile').click(function(event){
        event.stopPropagation();
    });

    // dowmload dropdown

    $(".js-download").hide();
    $(".js-download-btn").on('click', function(){
        $(this).next().slideToggle('fast');
    });

    $(document).click(function() {
        $(".js-select-list").hide();
        $(".js-select").removeClass("is-active");
        $(".help").removeClass('is-open');
        $('.js-profile').slideUp('fast');
    });

});