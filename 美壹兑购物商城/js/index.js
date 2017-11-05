/*header*/
$(document).ready(function() {
	var height = $(".side-nav").offset().top;
	$(window).scroll(function() {
		var this_scrollTop = $(this).scrollTop();
		if(this_scrollTop > height) {
			$(".nav").show();
		} else {
			$(".nav").hide();
		}
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
/*nav*/
$(document).ready(function() {
	$(".cate-list-expand").hide();
	$(".cate-list-expand").hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});
	$(".cate-list ul li").hover(function() {
		var obj = $(this).offset();
		var index = parseInt($(".cate-list ul li").index($(this)));
		$(".cate-list-expand").eq(index).show();
	}, function() {
		var index = parseInt($(".cate-list ul li").index($(this)));
		$(".cate-list-expand").eq(index).hide();
	});
});
/*轮播*/
$(document).ready(function() {
	var slideShow = $(".lunbo"); //获取最外层框架的名称
	ul = slideShow.find("ul");
	showNumber = slideShow.find(".lb_num span"); //获取按钮
	oneWidth = slideShow.find("ul li").eq(0).width(); //获取每个图片的宽度
	prev = $(".lb_prev");
	next = $(".lb_next");
	var timer = null; //定时器返回值，主要用于关闭定时器
	var iNow = 0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
	/*手动点击按钮进行图片轮播代码开始*/
	showNumber.hover(function() {
		var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
		iNow = index;
		iNow = parseInt($(".lb_num span").index($(this))); //当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
		$(this).addClass("active").siblings().removeClass("active"); //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
		A();
	});
	/*手动点击按钮进行图片轮播代码结束*/
	/*定时自动轮播图片代码开始*/
	function autoPlay() {
		timer = setInterval(function() { //打开定时器
			if(iNow == 7) {
				iNow = -1;
			}
			A();
			iNow++; //自增1
			showNumber.eq(iNow-1).addClass("active").siblings().removeClass("active"); //模拟触发数字按钮的click
		}, 4000); //2000为轮播的时间
	}
	autoPlay();
	/*定时自动轮播图片代码结束*/
	function A() {
		$(".cur_pic").eq(iNow).show();
		$(".cur_pic").not(":eq(" + iNow + ")").hide();
		B();
	}

	function B() {
		$(".lb_num span").eq(iNow).addClass("selected");
		$(".lb_num span").not(":eq(" + iNow + ")").removeClass("selected");
	}
	/*鼠标悬浮图片停止轮播代码开始*/
	slideShow.hover(
		function() {
			clearInterval(timer);
		}, autoPlay
	);
	/*鼠标悬浮图片停止轮播代码结束*/
	//设置按钮的显示和隐藏
	$(".lb_btn").hide();
	$(".lunbo").hover(function() {
		$(".lb_btn").show();
	}, function() {
		$(".lb_btn").hide();
	});
	/*左右按钮开始*/
	next.click(function() {
		if(iNow == 7) {
			iNow = -1;
		}
		iNow++; //自增1
		$(".cur_pic").eq(iNow).show();
		$(".cur_pic").not(":eq(" + iNow + ")").hide();
		$(".lb_num span").eq(iNow).addClass("active").siblings().removeClass("active");

	});
	prev.click(function() {
		if(iNow == -1) {
			iNow = 7;
		}
		iNow--; //自增1
		$(".cur_pic").eq(iNow).show();
		$(".cur_pic").not(":eq(" + iNow + ")").hide();
		$(".lb_num span").eq(iNow).addClass("active").siblings().removeClass("active");

	});
	/*左右按钮结束*/

});
/*热销精选*/
$(document).ready(function() {
	$(".sort-hot ul li").hover(function() {
		var obj = $(this).offset();
		var index = parseInt($(".sort-hot ul li").index($(this)));
		$(".hot_m_r").eq(index).show();
		$(".hot_m_r").not(":eq(" + index + ")").hide();
	});
});
/*食品保健*/
$(document).ready(function() {
	$(".food-cate ul li").hover(function() {
		var obj = $(this).offset();
		var index = parseInt($(".food-cate ul li").index($(this)));
		$(".food_r").eq(index).show();
		$(".food_r").not(":eq(" + index + ")").hide();

	});
});
/*美妆个护*/
$(document).ready(function() {
	$(".mz-cate ul li").hover(function() {
		var obj = $(this).offset();
		var index = parseInt($(".mz-cate ul li").index($(this)));
		$(".mz_r1").eq(index).show();
		$(".mz_r1").not(":eq(" + index + ")").hide();

	});
});
/*鞋包名品*/
$(document).ready(function() {
	$(".xb-cate ul li").hover(function() {
		var obj = $(this).offset();
		var index = parseInt($(".xb-cate ul li").index($(this)));
		$(".xb_r").eq(index).show();
		$(".xb_r").not(":eq(" + index + ")").hide();

	});
});
/*家居家纺*/
$(document).ready(function() {
	$(".jj-cate ul li").hover(function() {
		var obj = $(this).offset();
		var index = parseInt($(".jj-cate ul li").index($(this)));
		$(".jj_r1").eq(index).show();
		$(".jj_r1").not(":eq(" + index + ")").hide();

	});
});
/*服装配饰*/
$(document).ready(function() {
	$(".fs-cate ul li").hover(function() {
		var obj = $(this).offset();
		var index = parseInt($(".fs-cate ul li").index($(this)));
		$(".fs_r").eq(index).show();
		$(".fs_r").not(":eq(" + index + ")").hide();

	});
});
/*母婴用品*/
$(document).ready(function() {
	$(".my-cate ul li").hover(function() {
		var obj = $(this).offset();
		var index = parseInt($(".my-cate ul li").index($(this)));
		$(".my_r1").eq(index).show();
		$(".my_r1").not(":eq(" + index + ")").hide();

	});
});