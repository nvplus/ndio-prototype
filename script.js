function clearcomments() {
    $('.ndio-comments').html("");
}
$(document).ready(function () {
    /* POLLING */
    $(".poll-create").click(function() {});

    $(".poll-yes").click(function() {
        var y = Math.floor((Math.random() * 10) + 1) + 1;
        var n = Math.floor((Math.random() * 10) + 1);
        var options = $(this).closest('.poll-options');

        options.html("<br>You voted Yes<br><br>Yes's: "+ y + " | No's: " + n);
        options.css('margin-top', "14px");
    });
    
    $(".poll-no").click(function() {
        var y = Math.floor((Math.random() * 10) + 1);
        var n = Math.floor((Math.random() * 10) + 1) + 1;
        var options = $(this).closest('.poll-options');

        options.html("<br>You voted No<br><br>Yes's: "+ y + " | No's: " + n);
        options.css('margin-top', "14px");
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