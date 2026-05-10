$(document).ready(function () {
    var currentUrl = window.location.href;
    var hash = window.location.hash;

    // Nav links - check both page match and hash match
    $('.navbar-nav .nav-link').each(function () {
        var href = $(this).attr('href');
        
        // Check if href contains hash (like index.html#about)
        if (href && href.indexOf('#') !== -1) {
            var linkHash = href.substring(href.indexOf('#'));
            if (currentUrl.indexOf(href) !== -1 || (hash && linkHash === hash)) {
                $(this).addClass('active');
                $(this).closest('.dropdown').find('.nav-link').addClass('active');
            }
        } else if (currentUrl.indexOf(href) !== -1) {
            $(this).addClass('active');
            $(this).closest('.dropdown').find('.nav-link').addClass('active');
        }
    });

    // Dropdown items
    $('.dropdown-menu .dropdown-item').each(function () {
        if (currentUrl.indexOf($(this).attr('href')) !== -1) {
            $(this).addClass('active');
            $(this).closest('.dropdown').find('.nav-link').addClass('active');
        }
    });

    // Click handler for hash links (index.html#about or index.html#contact)
    $('.navbar-nav .nav-link').on('click', function () {
        var href = $(this).attr('href');
        if (href && href.indexOf('#') !== -1) {
            $('.navbar-nav .nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });

    // Scroll handler - only for index page
    function setActiveOnScroll() {
        // Only run on index page
        if (currentUrl.indexOf('index.html') === -1) return;
        
        var scrollPos = $(window).scrollTop();
        var sections = ['#about', '#contact'];
        var found = null;
        
        for (var i = 0; i < sections.length; i++) {
            var target = $(sections[i]);
            if (target.length && scrollPos >= target.offset().top - 200) {
                found = sections[i];
            }
        }
        
        $('.navbar-nav .nav-link').removeClass('active');
        
        if (found) {
            $('.navbar-nav .nav-link').each(function() {
                if ($(this).attr('href').indexOf(found) !== -1) {
                    $(this).addClass('active');
                }
            });
        } else {
            $('.navbar-nav .nav-link[href="index.html"]').addClass('active');
        }
    }

    // Run on scroll only if on index page
    if (currentUrl.indexOf('index.html') !== -1) {
        $(window).on('scroll', setActiveOnScroll);
        setActiveOnScroll();
    }
});