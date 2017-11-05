/*sideright*/
$(document).ready(function() {
	$(".icon-expand").hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});
	$(".rightbar_con li").hover(function() {
		var obj = $(this).offset();
		var index = parseInt($(".rightbar_con li").index($(this)));
		$(".icon-expand").eq(index).show();
	}, function() {
		var index = parseInt($(".rightbar_con li").index($(this)));
		$(".icon-expand").eq(index).hide();
	});
});
/*nav*/
$(document).ready(function(){
	$(".cate-list").hide();
	$(".cate-list").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
	$(".category").hover(function(){
		$(".cate-list").show();
	},function(){
		$(".cate-list").hide();
	});
});
$(document).ready(function(){
	$(".cate-list-expand").hide();
	$(".cate-list-expand").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
	$(".cate-list ul li").hover(function(){
		var obj=$(this).offset();
		var index=parseInt($(".cate-list ul li").index($(this)));
		$(".cate-list-expand").eq(index).show();
	},function(){
		var index=parseInt($(".cate-list ul li").index($(this)));
		$(".cate-list-expand").eq(index).hide();
	});
});
/*图片交替*/
$(document).ready(function(){
	/*hover开始*/
	   $(".north img").hover(function(){
	   	$(this).attr("src","../img/free.png");
	   },function(){
	   	$(this).attr("src","../img/free1.png");
	   });
	   $(".europe img").hover(function(){
	   	$(".europe1 img").attr("src","../img/europe1.png");
	   	$(".europe2 img").attr("src","../img/europe2.png");
	   	$(".europe3 img").attr("src","../img/europe3.png");
	   },function(){
	   	$(".europe1 img").attr("src","../img/europe_1.png");
	   	$(".europe2 img").attr("src","../img/europe_2.png");
	   	$(".europe3 img").attr("src","../img/europe_3.png");
	   });
	   $(".asia img").hover(function(){
	   	$(".asia1 img").attr("src","../img/asia.png");
	   	$(".asia2 img").attr("src","../img/china.png");
	   	$(".asia3 img").attr("src","../img/snow.png");
	   },function(){
	   	$(".asia1 img").attr("src","../img/asia_1.png");
	   	$(".asia2 img").attr("src","../img/china1.png");
	   	$(".asia3 img").attr("src","../img/snow1.png");
	   });
	/*hover结束*/ 
	/*交替切换开始*/
	
	/*交替切换结束*/
});