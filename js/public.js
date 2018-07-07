
jQuery(function(){
	//imgFull
	$(".imgFull").each(function(index, element) {
        $(".imgFull").eq(index).css("background-image", "url(" + $(".imgFull").eq(index).find("img").attr("src") + ")");
    });	
		
	
	function menu(){		
		if($(window).width()>992){$(".navBoxm").hide();$(".menuBtn").removeClass("active");}
	}
	menu();
		
	$(".navList .navSubLi h4").on("click",function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
			$(this).next(".navThrList").slideUp();
			$(this).parent().find(".navFouList").slideUp();
		}else{
			$(this).parent().addClass("active");
			$(this).next(".navThrList").slideDown();
			
		}
	})
	$(".navList .navThrLi h5").on("click",function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
			$(this).next(".navFouList").slideUp();
		}else{
			$(this).parent().addClass("active");
			$(this).next(".navFouList").slideDown();
		}
	})
	
	$(".navList .navLi").hover(function(){
		$(this).addClass("active");
		$(this).find(".navSub").stop().slideDown();	
	},function(){
		$(this).removeClass("active");
		$(this).find(".navSub").stop().slideUp();
		$(".navThrList").slideUp();
		$(".navFouList").slideUp();
	})
	
	$(".navBoxm").append("<ul class='navListm'></ul>");
	$(".navListm").html($(".navList").html());	
	
	$(".navSubLi").each(function(index, element) {
        if($(this).find(".navThrList").length>0){
			$(this).addClass("has");
			$(this).find("h4 a").attr("href","javascript:;");
		}
    });
	$(".navThrLi").each(function(index, element) {
        if($(this).find(".navFouList").length>0){
			$(this).addClass("has");
			$(this).find("h5 a").attr("href","javascript:;");
		}
    });
	$(".navListm .navLi").each(function(index, element) {
        if($(this).find(".navSub").length>0){
			$(this).addClass("has");
			$(this).find("h3 a").attr("href","javascript:;");
		}
    });
	
	$(".navListm .navLi h3").on("click",function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
			$(this).next(".navSub").slideUp();
			$(this).parent().find(".navFouList").slideUp();
		}else{
			$(".navListm .navLi").removeClass("active");
			$(".navSub").slideUp();
			$(".navThrList").slideUp();
			$(".navFouList").slideUp();
			$(this).parent().addClass("active");
			$(this).next(".navSub").slideDown();
			
		}
	})
	$(".navListm .navSubLi h4").on("click",function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
			$(this).next(".navThrList").slideUp();
			$(this).parent().find(".navFouList").slideUp();
		}else{
			$(".navListm .navSubLi").removeClass("active");
			$(".navThrList").slideUp();
			$(".navFouList").slideUp();
			$(this).parent().addClass("active");
			$(this).next(".navThrList").slideDown();
			
		}
	})
	$(".navListm .navThrLi h5").on("click",function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
			$(this).next(".navFouList").slideUp();
		}else{
			$(".navListm .navThrLi").removeClass("active");
			$(".navFouList").slideUp();
			$(this).parent().addClass("active");
			$(this).next(".navFouList").slideDown();
		}
	})	
	
	$(window).on("click",function(){
		$(".menuBtn").removeClass("active");
		$(".navBoxm").slideUp();
	})
	$(".menuBtn").on("click",function(event){
		$(this).toggleClass("active");
		$(".navBoxm").slideToggle();
		event.stopPropagation();
	})	
	$(".navBoxm").on("click",function(event){
		event.stopPropagation();
	})
	
	var homeBan = new Swiper('.banner .swiper-container',{
		//loop:true,
		//simulateTouch : false,
		autoplay : 5000,
		autoplayDisableOnInteraction : false,
		speed:500,
		effect : 'fade',
		resizeReInit : true,
		observer:true,
		observeParents:true,		
		onInit: function(swiper){
		swiperAnimateCache(swiper); 
		swiperAnimate(swiper); 
		}, 
		onSlideChangeEnd: function(swiper){ 
		swiperAnimate(swiper); 
		}
	});
	
	$(".banBtn").click(function(){
		$('html,body').animate({scrollTop:$('.box1Bg').offset().top-$(".headerBg").height()}, 800);
	})
	var box1Cen = new Swiper('.box1Cen .swiper-container',{
		loop:true,
		slidesPerView:1,
		observer:true,
		observeParents:true,
		prevButton:'.box1CenPrev',
		nextButton:'.box1CenNext',
	})
	$(".box1Bot li").each(function(index, element) {
        $(this).attr("data-wow-delay",index*3/10+"s");
    });
	$(".box2List li").each(function(index, element) {
        $(this).attr("data-wow-delay",index*3/10+"s");
    });
	
	var box3List = new Swiper('.box3List .swiper-container',{
		pagination: '.box3List .swiper-pagination',
		paginationClickable :true,
		slidesPerView:5,
		slidesPerGroup:5,
        slidesPerColumn:2,
		observer:true,
		observeParents:true,
		breakpoints: {
            991: {
				slidesPerView:3,
				slidesPerGroup:3,
				slidesPerColumn:2,
            },
            600: {
                slidesPerView:2,
				slidesPerGroup:2,
        		slidesPerColumn:2,
            }
        }
	})
	var box4List = new Swiper('.box4List .swiper-container',{
		pagination: '.box4List .swiper-pagination',
		paginationClickable :true,
		slidesPerView:5,
		slidesPerGroup:5,
        slidesPerColumn:2,
		observer:true,
		observeParents:true,
		breakpoints: {
            991: {
				slidesPerView:3,
				slidesPerGroup:3,
				slidesPerColumn:2,
            },
            460: {
                slidesPerView:2,
				slidesPerGroup:2,
        		slidesPerColumn:2,
            },
            340: {
                slidesPerView:2,
				slidesPerGroup:2,
        		slidesPerColumn:2,
            }
        }
	})	
	//online
	$(".online_top").click(function(){
		$('html,body').animate({scrollTop:"0px"},800);
	})
	
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$(".online_top").slideDown();
		}else{
			$(".online_top").slideUp();
		}
	})
		
	//bannerN
	$(".bannerN").css("background-image", "url(" + $(".bannerN").find("img").attr("src") + ")");
	//onepage
	$(".oneText").hide();
	$(".oneText").eq(0).show();
	$(".oneBtn a").on("click",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active").find("strong").html("english");
			$(".oneText").hide();
			$(".oneText").eq(0).show();
		}else{
			$(this).addClass("active").find("strong").html("CHINA");
			$(".oneText").hide();
			$(".oneText").eq(1).show();
		}
	})
	//history
	$(".history .swiper-slide:odd").addClass("odd");
	function his(){
		if($(window).width()>767){
			$(".history .swiper-slide").each(function(index, element) {					
				var his1 = $(this).find(".hisTextBg"),
					his2 = $(this).find(".hisYear"),
					his3 = $(this).find(".hisIco");
				$(this).find(".hisItem").html("");
				if(index%2==1){
					$(this).find(".hisItem").append(his2,his3,his1);
				}else{
					$(this).find(".hisItem").append(his1,his3,his2);						
				}
			});
		}else{			
			$(".history .swiper-slide").each(function(index, element) {					
				var his1 = $(this).find(".hisTextBg"),
					his2 = $(this).find(".hisYear"),
					his3 = $(this).find(".hisIco");
					$(this).find(".hisItem").html("");
					$(this).find(".hisItem").append(his2,his3,his1);
			});
		}
	}
	his();
	var history = new Swiper('.history .swiper-container',{
		//loop:true,
		resizeReInit:true,
		resizeReInit:true,
		observer:true,
		observeParents:true,		
        slidesPerView:6,
		prevButton:'.hisPrev',
		nextButton:'.hisNext',
		breakpoints: {
            1270: {
				slidesPerView:5,
            },
            1200: {
                slidesPerView:4,
            },
            992: {
                slidesPerView:3,
            },
            640: {
                slidesPerView:2,
            },
            460: {
                slidesPerView:1,
            }
        }
	});
	$(".arLef").css("min-height",$(".arRig").height()+100);
	
	//product
	
	$(".mainSpace").css("height",$(".proNavBg").height());	
	
	$(".pro2 li").each(function(index, element) {
        $(this).attr("data-wow-delay",index*3/10+"s");
    });
	$(".solu2 li").each(function(index, element) {
        $(this).attr("data-wow-delay",index*3/10+"s");
    });
	
	var pro3Bot = new Swiper('.pro3Bot .swiper-container',{
		observer:true,
		observeParents:true,
		autoHeight: true,
		onSlideChangeEnd: function(swiper){
		  $(".proTab3 li").eq(swiper.realIndex).addClass("active").siblings().removeClass("active");
		}		
	})
	$(".proTab3 li").on("click touchstart",function(){
		var proNum = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		pro3Bot.slideTo(proNum, 1000, false);
	})
	$(".proWinLinke").on("click",function(){
		$(".winBox").fadeIn();
		$(".winBg").fadeIn();
	})	
	$(".winBox").on("click",function(event){
		event.stopPropagation();
	})
	$(".winClose").on("click",function(){
		$(".winBox").fadeOut();
		$(".winBg").fadeOut();
	})
	$(".winBg").on("click",function(){
		$(".winBox").fadeOut();
		$(".winBg").fadeOut();
	})
	$(".proOnline").off("click");	
	
	function hderHig(x){
		var hig = $(".headerBg").height();	
		x.css("padding-top",hig+"px");
	}
	hderHig($(".bannerN"));
	
	function myhegiht(divW,divN){
		var $columns = $(divW).find("li");
		var contact_inforH = 0;
		$columns.each(function(){
			if($(this).find(divN).height() > contact_inforH){
				contact_inforH = $(this).find(divN).height()
			}
		});
		$columns.height(contact_inforH);
	}
	myhegiht(".pro2",".proText2");
	function equip() {
		var sUserAgent = navigator.userAgent.toLowerCase(); 
		if((sUserAgent.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i))) {
			$(".xgInput").focus(function(){$(".headerBg").css("position","absolute");})
			$(".xgInput").focus(function(){$(".headerBg").css("position","fixed");})			  
		}
	}
	equip();	
	$(window).resize(function(){
		scro();
		menu();
		hderHig($(".bannerN"));
		his();		
		$(".arLef").css("min-height",$(".arRig").height()+100);
		myhegiht(".pro2",".proText2");
		$(".mainSpace").css("height",$(".proNavBg").height());
		equip();
	})
})



//屏蔽页面错误
jQuery(window).error(function(){
  return true;
});
jQuery("img").error(function(){
  $(this).hide();
});