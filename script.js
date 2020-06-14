function clearcomments() {
    $('.ndio-comments').html("");
}
$(document).ready(function () {
    /* POLLING */
    $(".poll-create").click(function() {
     
    });

    $(".poll-yes").click(function() {
        
    });
    
    $(".poll-no").click(function() {

    });

    $('.poll-open-comments').click(function() {
        $('.ndio-home-container').hide();
        clearcomments();

       var num = Math.floor((Math.random() * 10) + 1);

       for (var i = 0; i < num; i++) {
            var n = i+1;
            $('.ndio-comments').append("User " + n + ": Comment "+ n + "<br>");
        }

        $('.ndio-comments').show();
    });

    /* PAGE SWITCHING */
    $(".ndio-hf-button").click(function() {
        $('.selected').removeClass('selected');
        $(this).addClass("selected");
    });

    $('.ndio-home').click(function() {
        clearcomments();
        $('.ndio-search-container').hide();
        $('.ndio-home-container').show();
        $('.ndio-profile-container').hide();
    }); 

    $('.ndio-search').click(function() {
        clearcomments();
        $('.ndio-search-container').show();
        $('.ndio-home-container').hide();
        $('.ndio-profile-container').hide();
    }); 

    $('.ndio-profile').click(function() {
        clearcomments();
        $('.ndio-search-container').hide();
        $('.ndio-home-container').hide();
        $('.ndio-profile-container').show();
    }); 
});