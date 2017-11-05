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
/*购物车数量加减*/
$(function(){  
    var t = $(".quantity-input");  
    $(".icon-plus").click(function(){  
        t.val(parseInt(t.val())+1);  
        $(".icon-minus").removeAttr("disabled");                 //当按加1时，解除$("#min")不可读状态  
        setTotal();  
    })  
    $(".icon-minus").click(function(){  
               if (parseInt(t.val())>1) {                     //判断数量值大于1时才可以减少  
                t.val(parseInt(t.val())-1)  
                }else{  
                $(".icon-minus").attr("disabled","disabled")        //当$("#min")为1时，$("#min")不可读状态  
               }  
    })
})  
/*product*/
$(document).ready(function(){
	$(".mid-r-hd li").click(function(){
		var obj = $(this).offset();
		var index = parseInt($(".mid-r-hd li").index($(this)));
		$(this).addClass("current").siblings().removeClass("current");
		$(".mid-r-bd-item").eq(index).show();
		$(".mid-r-bd-item").not(":eq(" + index + ")").hide();
	});
});
/*radio选中事件*/
$(document).ready(function(){
	$(".pro-pj-con li").click(function(){
		var obj = $(this).offset();
		var index = parseInt($(".pro-pj-con li").index($(this)));
		$(this).addClass("current").siblings().removeClass("current");
		$(".pro-pj-con li input").eq(index).attr("checked",true);
		$(".pro-pj-con li input").not(":eq(" + index + ")").attr("checked",false);
	});
	$(".pro-zx-con li").click(function(){
		var obj = $(this).offset();
		var index = parseInt($(".pro-zx-con li").index($(this)));
		$(this).addClass("current").siblings().removeClass("current");
		$(".pro-zx-con li input").eq(index).attr("checked",true);
		$(".pro-zx-con li input").not(":eq(" + index + ")").attr("checked",false);
	});
});