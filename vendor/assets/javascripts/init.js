/*
 * Copyright (c) 2018 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	porta_tm_hamburger();
	porta_tm_imgtosvg();
	porta_tm_jarallax();
	porta_tm_nav_bg_scroll();
	porta_tm_contact_form();
	porta_tm_hom_title();
	porta_tm_portfolios();
	porta_tm_portfolio();
	porta_tm_isotope();
	porta_tm_sticky_sidebar();
	
	jQuery(window).on('scroll',function(){
		//e.preventDefault();
		porta_tm_nav_bg_scroll();
	});
	
	jQuery(window).on('resize',function(){
		porta_tm_portfolios();
		porta_tm_isotope();
	});

	jQuery(window).load('body', function() {
		jQuery('.porta_tm_home_title_wrap').addClass('appear');
	});
	
});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function porta_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------

function porta_tm_hamburger(){
	
	"use strict";
	
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.porta_tm_mobile_menu_wrap');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function porta_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function porta_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.porta_tm_portfolio_list');
		var filter		 = jQuery('.porta_tm_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------

function porta_tm_nav_bg_scroll(){
	
	"use strict";
	
	var header 			= jQuery('.porta_tm_header');
	var windowScroll	= jQuery(window).scrollTop();
	var W				= jQuery(window).width();
	
	if(W>1040){
		jQuery(window).scroll(function(){
            if(windowScroll >= '100'){
                header.addClass('scroll');
            }
            else{
                header.removeClass('scroll');  
            }
        });
	} 
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function porta_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -------------------------------------------------
// -------------   HOME TITLE PADDING  -------------
// -------------------------------------------------

function porta_tm_hom_title(){
	
	"use strict";
	
	var header			= jQuery('.porta_tm_header').outerHeight();
	var title			= jQuery('.porta_tm_home_title_wrap');
	var newsImage		= jQuery('.porta_tm_news_single_image');
	
	title.css({paddingTop:header});
	newsImage.css({paddingTop:header});
}

// -------------------------------------------------
// -------------   PORTFOLIO -----------------------
// -------------------------------------------------

function porta_tm_portfolios(){
	
	"use strict";
	
	var WW					= jQuery(window).width();
	var portfolioWidth		= jQuery('.porta_tm_portfolio_home_wrap').width();
	var item				= jQuery('.porta_tm_portfolio_home_wrap .item');
	var itemTall			= jQuery('.porta_tm_portfolio_home_wrap .item.tall');
	var itemWide			= jQuery('.porta_tm_portfolio_home_wrap .item.wide');
	var mTall				= jQuery('.porta_tm_portfolio_home_wrap .item.m_tall');
	var mSimple				= jQuery('.porta_tm_portfolio_home_wrap .item.m_simple');
	var mWide				= jQuery('.porta_tm_portfolio_home_wrap .item.m_wide');
	var col3				= Math.floor(portfolioWidth/3);
	var col2				= Math.floor(portfolioWidth/2);
	var col1				= Math.floor(portfolioWidth);
	
	if(WW>768){
		// laptop
		item.css({
			width:col3-30+'px',
			height:Math.floor(col3*0.65)+'px',
			margin:15+'px'
		});
		itemTall.css({height:Math.floor(col3*1.3)+30+'px'});
		itemWide.css({
			width:Math.floor(col3*2)-30+'px',
			height:Math.floor(col3*1.3)+30+'px',
		});
	}else if(WW<=768 && WW > 480){
		// ipad
		item.css({
			width:col2-30+'px',
			height:Math.floor(col2*0.65)+'px',
			margin:15+'px'
		});
		itemTall.css({height:Math.floor(col2*1.3)+30+'px'});
		itemWide.css({
			width:Math.floor(col2*2)-30+'px',
			height:Math.floor(col2*1.3)+30+'px',
		});
		mTall.css({
			width:col2-30+'px ',
			height:Math.floor(col2*1.3)+30+'px',
			margin:15+'px'
		});
		mSimple.css({
			width:col2-30+'px',
			height:Math.floor(col2*0.65)+'px',
			margin:15+'px'
		});
		mWide.css({
			width:col1-30+'px',
			height:Math.floor(col2*1.3)+'px',
			margin:15+'px'
		});
	}else{
		// mobile
		item.css({
			width:col1-20+'px',
			height:Math.floor(col1*0.65)+'px',
			margin:10+'px'
		});
	}
}

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function porta_tm_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// ---------------   STICKY SIDEBAR    -----------------
// -----------------------------------------------------

function porta_tm_sticky_sidebar(){

	"use strict";
	
	jQuery('.sticky_sidebar').theiaStickySidebar({
		containerSelector: '', // The sidebar's container element. If not specified, it defaults to the sidebar's parent.
		additionalMarginTop: 150,
		additionalMarginBottom: 0,
		updateSidebarHeight: true, // Updates the sidebar's height. Use this if the background isn't showing properly, for example.
		minWidth: 768, // The sidebar returns to normal if its width is below this value. 
	});
}
