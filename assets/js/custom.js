/*jslint browser: true*/
/*global $, console, window*/
(function ($) {
  'use strict';

        var win = $(window),
        btnMenuNavbar = $('.navbar-toggle'),
        navMenu = $(".nav-menu"),
        listMenu = $("ul.nav-menu li a"),

        /* Var For Side Menu */
        btnOpenSideMenu = $(".side-menu-btn"),
        sideMenuItem = $(".side-menu"),
        closeSidebarOverLay = $(".close-menu-sidebar"),
        btnCloseSideMenu = $(".close-side-menu"),
        body = $("body"),
        
        /* Var For Search Screen */
        btnOpenSearch = $(".search-btn"),
        searchScreenItem = $(".search-screen"),
        closeSearchScreen = $(".close-search");
    
    btnMenuNavbar.on("click", function (e) {
        e.preventDefault();
        navMenu.slideToggle();
        $(this).toggleClass("navbar-toggle-active");
    });
    
    listMenu.on("click", function (e) {
        var submenu = this.parentNode.getElementsByTagName("ul").item(0);
        if (submenu !== null) {
            e.preventDefault();
            $(submenu).slideToggle();
        }
    });

btnOpenSideMenu.on("click", function (e) {
  e.preventDefault();
  sideMenuItem.addClass("open");
  closeSidebarOverLay.addClass("open");
  body.css('overflow', 'hidden');
});

closeSidebarOverLay.on("click", function (e) {
  e.preventDefault();
  sideMenuItem.removeClass("open");
  closeSidebarOverLay.removeClass("open");
  body.css('overflow', 'auto');
});

btnCloseSideMenu.on("click", function (e) {
  e.preventDefault();
  sideMenuItem.removeClass("open");
  closeSidebarOverLay.removeClass("open");
  body.css('overflow', 'auto');
});

/* Search Screen Script */
btnOpenSearch.on("click", function (e) {
  e.preventDefault();
  searchScreenItem.addClass("open");
});
closeSearchScreen.on("click", function (e) {
  e.preventDefault();
  searchScreenItem.removeClass("open");
});
}($));


$(document).ready(function () {
  "use strict"

  var win = $(window),
    navbar = $(".nav-bar"),
    navtwo = $(".nav-bar-two"),
    twoMain =$(".nav-two")

    win.on('scroll', function () {
      if (win.scrollTop() > 50) {
        navtwo.addClass("nav-fixed").removeClass("fixed-top");
        twoMain.css("background","#fff")
      } else {
        navtwo.addClass("fixed-top").removeClass("nav-fixed");
        twoMain.css("background","transparent")
      }
  });
  

  win.on('scroll', function () {
    var navBarOne = $('.bg-gray'),
        navBarMenu =  $(".nav-menu-bar")
    if (win.scrollTop() > 50) {
      navBarOne.css("display","none")
      navBarMenu.css("position","fixed")
    } else {
      navBarOne.css("display","block")
      navBarMenu.css("position","relative")
    }
  });
  /*========== Start Scroll For Navigation Menu ==========*/



  // Sync Navbar Links With Section
  $("body").scrollspy({
    target: "#navtoggler",
    offset: 82,
  })

  //// COLLAPSED MENU CLOSE ON CLICK
  navbar.on("click", ".navbar-collapse", function (e) {
    if ($(e.target).is("a")) {
      $(this).collapse("hide")
    }
  })

	
  /*========== Start Counter To Js Statistics   ==========*/

  win.on("scroll.statistics", function () {
    var stat = $(".statistics")
    if ($(this).scrollTop() >= stat.offset().top - win.height() + 220) {
      $(".count").countTo()
      win.off("scroll.statistics")
    }
  })

  // start owl-carousel
  $(document).ready(function () {
    $("#partners,#testimonial-carousel").owlCarousel()
  })
  $("#partners").owlCarousel({
    loop: true,
    merge: true,
    margin: 30,
    smartSpeed: 1000,
    autoplay: 2000,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  })

  $("#testimonial-carousel").owlCarousel({
    animateOut: "fadeOut",
    animateIn: "flipInX",
    stagePadding: 30,
    smartSpeed: 450,
    loop: true,
    nav: true,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    items: 1,
    margin: 10,
    autoplay: false,
    dots: false,
    merge: true,
  })
})

/*------------ start isotope  ---------*/

// $(window).on("load", function () {
//   $(".portfolio-item").isotope()
// })
// $(document).on("click", ".featured-work li", function () {
//   $(".featured-work li").removeClass("active")
//   $(this).addClass("active")
//   var selector = $(this).attr("data-filter")
//   $(".portfolio-item").isotope({
//     filter: selector,
//   })
//   return false
// })

//  /*========== Start Portfolio Trigger Filterizr Js ==========*/
$("#control li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active")
})

// The Filterizr
if ($("#filtr-container")[0]) {
  $("#filtr-container").filterizr({
    animationDuration: 0.4,
  })

  // // :: Setup Mixitup
  // var containerEl = document.querySelector(".portfolio-item")
  // var mixer = mixitup(containerEl)

  /*------------ end isotope  -----------*/


  
  /*-----------  strat Pre-loader  ---------*/
  $(window).on("load", function () {
    $("#loading").fadeOut(2000)
  })
  /*-----------  End Pre-loader   ---------*/

  /*-----------  start scroll-up  ---------*/


         /*-----------  start scroll-up  ---------*/
  
         $(window).on('scroll', function () {
          var scrolltop =  $(".scroll-top");
        if ($(window).scrollTop() >= 1000) {
            scrolltop.fadeIn(400); 
            
        } else {
            scrolltop.fadeOut(400);
        } 
    });
        // Back To 0 Scroll Top body
        var scrolltop =  $(".scroll-top");
        scrolltop.on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });
    
        /*-----------  end scroll-up  ---------*/
        

  //var mohamedelsayedcontactformflag;
  jQuery(document).ready(function () {
    jQuery("form#contact-form").submit(function (e) {
      e.preventDefault()
      validate_contact_us_form()
    })
    jQuery("#contact-form input, #contact-form textarea").on(
      "change paste keyup",
      function () {
        validate_required_input(jQuery(this))
      }
    )
  })

  function validate_contact_us_form() {
    var custom_form_error = 0
    var focused = 0
    jQuery("#contact-form input, #contact-form textarea").each(function () {
      validate_required_input(jQuery(this))
    })
    jQuery("#contact-form input, #contact-form textarea").each(function () {
      if (jQuery(this).hasClass("error")) {
        custom_form_error = 1
        if (focused == 0) {
          focused = 1
          jQuery(this).focus()
        }
      }
    })
    //    console.log(custom_form_error);
    //    if (mohamedelsayedcontactformflag == 1) {
    if (custom_form_error === 0) {
      jQuery.ajax({
        url: "contact_form.php",
        type: "POST",
        data: jQuery("form#contact-form").serialize(),
        async: false,
        beforeSend: function () {
          jQuery("#sendmessage").hide()
          jQuery("#errormessage").hide()
          jQuery("#sendmail_ajaxLoading").show()
        },
        success: function (result) {
          //                error = result.error;
          error = result
          jQuery("#sendmail_ajaxLoading").hide()
          if (error == 0) {
            jQuery("#sendmessage").show()
            setTimeout(function () {
              jQuery("#sendmessage").hide()
            }, 5000)
          } else {
            jQuery("#errormessage").show()
            setTimeout(function () {
              jQuery("#sendmessage").hide()
            }, 5000)
          }
          jQuery("form#contact-form")[0].reset()
        },
      })
    }
    //    } else {
    //        return false;
    //    }
  }
  function validate_required_input(obj) {
    var val = obj.val()
    var input_name = obj.attr("name")
    var error = 0
    if (jQuery.trim(val).length !== 0) {
      error = 0
    } else {
      error = 1
    }
    if (input_name == "email") {
      if (!isValidEmailAddress(val)) {
        error = 1
      } else {
        error = 0
      }
    }
    if (error == 0) {
      if (obj.hasClass("error")) {
        obj.removeClass("error")
      }
    } else {
      if (!obj.hasClass("error")) {
        obj.addClass("error")
      }
    }
  }
  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
    )
    return pattern.test(emailAddress)
  }
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }
}

// accordion//
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
//accordion//

(function($) { 
   
  function thmbxSlider() {
      if ($('.testimonials-slider').length) {
          $('.testimonials-slider').bxSlider({
              // adaptiveHeight: true,
              auto: true,
              controls: true,
              nextText: ["<i class='fas fa-angle-right'></i>"], 
              prevText: ["<i class='fas fa-angle-left'></i>"],             
              pause: 5000,
              speed: 500,
              pager: true,
              pagerCustom: '.pager-one, .pager-two'
          });
      }
  }


  $(window).on('load', function() {
     
      thmbxSlider();
  });

})(jQuery);

// :: OWL Carousel Js Header Hero
if ($('.header-owl')[0]) {
        
  $('.header-owl').owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      smartSpeed: 1000,
      autoplay: 2000,
      loop: true,
      navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
      mouseDrag: false,
      touchDrag: false,
      animateOut: 'fadeOut',
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 1
          },
          1200: {
              items: 1
          }
      }
  });
};