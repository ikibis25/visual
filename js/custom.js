
/* top slider js */
 if($('#slider').length){
            $(function() {
                var Page = (function() {
                    var $nav = $( '#nav-dots > span' ),
                        slitslider = $( '#slider' ).slitslider( {
                            onBeforeChange : function( slide, pos ) {

                                $nav.removeClass( 'nav-dot-current' );
                                $nav.eq( pos ).addClass( 'nav-dot-current' );
                            }
                        } ),
                        init = function() {
                            initEvents();     
                        },
                        initEvents = function() {
                            $nav.each( function( i ) {
                                $( this ).on( 'click', function( event ) {      
                                    var $dot = $( this );      
                                    if( !slitslider.isActive() ) {
                                        $nav.removeClass( 'nav-dot-current' );
                                        $dot.addClass( 'nav-dot-current' );   
                                    }  
                                    slitslider.jump( i + 1 );
                                    return false;
                                } );   
                            } );
                        };
                        return { init : init };
                })();
                Page.init();
            });
        }

// Menu js for Position fixed

/*wow js*/

$(document).ready(function(){

  $(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeIn(); // will first fade out the loading animation 
  $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(500).css({'overflow':'visible'});
});

    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();


/* portfolio filter */
if($('.filter-button').length){
 $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
         if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
 
    
        if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
        }
        $(this).addClass("active");
             });

}


/* testimonial slider */

$('.testimonial-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/* popup gallery */

if($('.popup-gallery').length){
$('.popup-gallery').magnificPopup({
            delegate: '.gallery',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });
}
    

/* popup video */

if($('.popup-video').length){
$('.popup-video').magnificPopup({
            delegate: 'a',
            type: 'iframe',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });
}


/* revolution slider start */
if($('#rev_slider_1021_1').length){
var tpj=jQuery;
            
            var revapi1021;
            tpj(document).ready(function() {
                if(tpj("#rev_slider_1021_1").revolution == undefined){
                    revslider_showDoubleJqueryError("#rev_slider_1021_1");
                }else{
                    revapi1021 = jQuery("#rev_slider_1021_1").show().revolution({
                        sliderType:"carousel",
jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
                        sliderLayout:"fullwidth",
                        dottedOverlay:"none",
                        delay:2000,
                        navigation: {
                            keyboardNavigation:"off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation:"off",
                            mouseScrollReverse:"default",
                            onHoverStop:"off",
                            arrows: {
                                style:"metis",
                                enable:true,
                                hide_onmobile:true,
                                hide_under:768,
                                hide_onleave:false,
                                tmp:'',
                                left: {
                                    h_align:"left",
                                    v_align:"center",
                                    h_offset:0,
                                    v_offset:0
                                },
                                right: {
                                    h_align:"right",
                                    v_align:"center",
                                    h_offset:0,
                                    v_offset:0
                                }
                            }
                            ,
                           
                        },
                        carousel: {
                            maxRotation: 65,
                            vary_rotation: "on",
                            minScale: 55,
                            vary_scale: "off",
                            horizontal_align: "center",
                            vertical_align: "center",
                            fadeout: "on",
                            vary_fade: "on",
                            maxVisibleItems: 5,
                            infinity: "on",
                            space: -150,
                            stretch: "off"
                        },
                        visibilityLevels:[1240,1024,778,480],
                        gridwidth:500,
                        gridheight:500,
                        lazyType:"none",
                        shadow:0,
                        spinner:"off",
                        stopLoop:"on",
                        stopAfterLoops:0,
                        stopAtSlide:"off",
                        shuffle:"off",
                        autoHeight:"off",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            nextSlideOnWindowFocus:"off",
                            disableFocusListener:false,
                        }
                    });
                }
            });

        }

});        

/* revolution slider end */

/* search popup */

            // Search box
            $('.search').on('click', function() {
                $('.header_search_box').addClass('header_search_box1');
               
            });
            $('.icon_close i').on('click', function() {
                $('.header_search_box').removeClass('header_search_box1');
            });
        
// Menu js for Position fixed
    $(window).scroll(function(){
        var window_top = $(window).scrollTop() + 1; 
        if (window_top > 400) {
            $('.v_header').addClass('menu_fixed animated fadeInDown');
        } else {
            $('.v_header').removeClass('menu_fixed animated fadeInDown');
        }
    });


// about_team slider

$('.about_team_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

//partners slider

$('.partners_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// who we are section slider

$('.who_we_img .owl-carousel').owlCarousel({
       loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

//blog section slider

$('.blog_left .owl-carousel').owlCarousel({
        loop:true,
                    margin:0,
                    items:1,
                    touchDrag:true,
                    mouseDrag:true,
                    autoplay:true,
                    autoplayTimeout:4000,
                    autoplaySpeed:1000,
                    Speed:1000,
                    nav:true,
                    dots:false,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
})



/* mail function */

$("#submit").click(function(){
          var fname = $('#name').val();
          var phone = $('#phone').val();
          var email = $('#email').val();
          var subject = $('#subject').val();
          var message = $('#message').val();
          var letters = /^[A-Za-z]+$/;
          var number = /^[0-9]+$/;
          var mail_letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

          
          if (fname != "" && phone != "" && email != "" && subject != "" && message != "") {
            if(fname.match(letters)) { 
              if(phone.match(number) && phone.length == 10) {
                if(email.match(mail_letters)){
                  $.ajax({
                  method : 'post',
                  url : 'js/ajax.php',
                  data :  {'first_name' : fname ,
                        'phone_number' : phone,
                        'email' : email,
                        'subject' : subject,
                        'message' : message,
                        },
                   }).done(function(resp){
                     if( resp == 1){
                      document.getElementById("error").style.color = "green";
                       document.getElementById("error").innerHTML = "Mail Send Successfully";
                      $('#name').val('');
                       $('#phone').val('');
                       $('#email').val('');
                       $('#subject').val('');
                       $('#message').val('');
                     }else{
                      document.getElementById("error").style.color = "red";
                        document.getElementById("error").innerHTML = "Mail not Send";
                     }
                   console.log(resp);});
                }else{
                  document.getElementById("error").style.color = "red";
                  document.getElementById("error").innerHTML = "Please Fill The  Correct Mail Id";
                }
              }else{
                document.getElementById("error").style.color = "red";
                document.getElementById("error").innerHTML = "Please Fill The  Correct Number";
              }
            }else
            { document.getElementById("error").style.color = "red";
              document.getElementById("error").innerHTML = "Please Fill The Correct Name";
            }   
          }else{
            document.getElementById("error").style.color = "red";
            document.getElementById("error").innerHTML = "Please Fill All Detail";
          }
        });
