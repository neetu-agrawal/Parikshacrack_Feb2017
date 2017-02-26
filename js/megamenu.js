// MENU MOBILE ===============================================================================
// Collpsable menu mobile and tablets

	$("#megamenu-button-mobile").click(function(){
		$(".megamenu").slideToggle(400);
		$(this).toggleClass("active");
	});

// MENU DROP DOWN ====================================== //
 $(document).ready(function() {
    $(".megamenu .drop-down").click(function() {
      if($(this).next("div").is(":visible")){
        $(this).next("div").slideToggle("normal");
      } else {
        $(".megamenu .drop-down-container").fadeOut("fast");
        $(this).next("div").slideToggle("slow");
		
		$("#map_1").each(function(){                         
		    var embed ="<iframe style='height:300px; width:100%; border:0' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0'   src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.811365702895!2d75.80312!3d26.9129244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78e640e47b218890!2sParikshacrack!5e0!3m2!1sen!2sin!4v1486378967979'></iframe>";
                                $(this).html(embed);                    
   }); 
      }
    });
  });
  

// DROP DOWN MENU TABS ====================================== //
$('body').on('click', 'ul.tabs > li > a', function(e) {

    //Get Location of tab's content
    var contentLocation = $(this).attr('href');

    //Let go if not a hashed one
    if(contentLocation.charAt(0)=="#") {

        e.preventDefault();

        //Make Tab Active
        $(this).parent().siblings().children('a').removeClass('active');
        $(this).addClass('active');

        //Show Tab Content & add active class
        $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

    }
});