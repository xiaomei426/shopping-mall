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
