$(document).ready(function() {
    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            var text = select_list.find("li").first().text();
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
    $(".js-question").each(function(){
        $(this).on('click', function(){
            $(".js-answer").show();
            $("html, body").animate({
              scrollTop: $(".js-divide").offset().top
            }, 500);
            return false;
        });
    });

    //toggle answer form

    $(".js-chat-form").hide();
    $(".js-show-chat").on('click', function(){
        $(".js-chat-form").slideDown('fast');
    });
    $(".js-hide-chat").on('click', function(){
        $(".js-chat-form").slideUp('fast');
    });


    $(document).click(function() {
        $(".js-select-list").hide();
        $(".js-select").removeClass("is-active");
        $(".help").removeClass('is-open');
    });

});