$(document).ready(function () {
    $(".ndio-hf-button").click(function() {
        $('.selected').removeClass('selected');
        $(this).addClass("selected");
    });

    $('.ndio-home').click(function() {
        $('.ndio-search-container').hide();
        $('.ndio-home-container').show();
        $('.ndio-profile-container').hide();
    }); 

    $('.ndio-search').click(function() {
        $('.ndio-search-container').show();
        $('.ndio-home-container').hide();
        $('.ndio-profile-container').hide();
    }); 

    $('.ndio-profile').click(function() {
        $('.ndio-search-container').hide();
        $('.ndio-home-container').hide();
        $('.ndio-profile-container').show();
    }); 
    
    $(".poll-create").click(function() {
        alert("Poll create");
    });

    $(".poll-yes").click(function() {
        alert("Poll no");
    });
    
    $(".poll-no").click(function() {
        alert("Poll no");
    });
});