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
	$(".cate-list dl").hover(function() {
		var obj = $(this).offset();
		var index = parseInt($(".cate-list dl").index($(this)));
		$(".cate-list-expand").eq(index).show();
	}, function() {
		var index = parseInt($(".cate-list dl").index($(this)));
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
			if(iNow == 1) {
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
		if(iNow == 1) {
			iNow = -1;
		}
		iNow++; //自增1
		$(".cur_pic").eq(iNow).show();
		$(".cur_pic").not(":eq(" + iNow + ")").hide();
		$(".lb_num span").eq(iNow).addClass("active").siblings().removeClass("active");

	});
	prev.click(function() {
		if(iNow == -1) {
			iNow = 1;
		}
		iNow--; //自增1
		$(".cur_pic").eq(iNow).show();
		$(".cur_pic").not(":eq(" + iNow + ")").hide();
		$(".lb_num span").eq(iNow).addClass("active").siblings().removeClass("active");

	});
	/*左右按钮结束*/
});
/*轮播1*/
$(document).ready(function(){
	var slideShow = $(".lb1"), //获取最外层框架的名称
		ul = slideShow.find("ul"),
		showNumber = slideShow.find(".btn1 span"), //获取按钮
		oneWidth = slideShow.find("ul li").eq(0).width(); //获取每个图片的宽度
	var timer = null; //定时器返回值，主要用于关闭定时器
	var iNow = 0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0

	/*手动点击按钮进行图片轮播代码开始*/
	showNumber.hover(function() {
		var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
		iNow = index;
		iNow = parseInt($(".btn1 span").index($(this))); //当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
		$(this).addClass("active").siblings().removeClass("active"); //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
		ul.animate({
			"left": -oneWidth * iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
		});
	});
	/*手动点击按钮进行图片轮播代码结束*/

	/*定时自动轮播图片代码开始*/
	function autoPlay() {
		timer = setInterval(function() { //打开定时器
			iNow++; //让图片的索引值次序加1，这样就可以实现顺序轮播图片
			if(iNow >1) { //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
				iNow = 0;
			}
			ul.animate({
				"left": -oneWidth * iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
			});
			showNumber.eq(iNow).addClass("active").siblings().removeClass("active");
		}, 3000); //2000为轮播的时间
	}
	autoPlay();
	/*定时自动轮播图片代码结束*/

	/*鼠标悬浮图片停止轮播代码开始*/
	slideShow.hover(
		function() {
			clearInterval(timer);
		}, autoPlay
	);
	/*鼠标悬浮图片停止轮播代码结束*/
});
/*轮播2*/
$(document).ready(function(){
	var slideShow = $(".lb2"), //获取最外层框架的名称
		ul = slideShow.find("ul"),
		showNumber = slideShow.find(".btn2 span"), //获取按钮
		oneWidth = slideShow.find("ul li").eq(0).width(); //获取每个图片的宽度
	var timer = null; //定时器返回值，主要用于关闭定时器
	var iNow = 0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0

	/*手动点击按钮进行图片轮播代码开始*/
	showNumber.hover(function() {
		var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
		iNow = index;
		iNow = parseInt($(".btn2 span").index($(this))); //当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
		$(this).addClass("active").siblings().removeClass("active"); //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
		ul.animate({
			"left": -oneWidth * iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
		});
	});
	/*手动点击按钮进行图片轮播代码结束*/

	/*定时自动轮播图片代码开始*/
	function autoPlay() {
		timer = setInterval(function() { //打开定时器
			iNow++; //让图片的索引值次序加1，这样就可以实现顺序轮播图片
			if(iNow >1) { //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
				iNow = 0;
			}
			ul.animate({
				"left": -oneWidth * iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
			});
			showNumber.eq(iNow).addClass("active").siblings().removeClass("active");
		}, 3000); //2000为轮播的时间
	}
	autoPlay();
	/*定时自动轮播图片代码结束*/

	/*鼠标悬浮图片停止轮播代码开始*/
	slideShow.hover(
		function() {
			clearInterval(timer);
		}, autoPlay
	);
	/*鼠标悬浮图片停止轮播代码结束*/
});
/*轮播3*/
$(document).ready(function(){
	var slideShow = $(".lb3"), //获取最外层框架的名称
		ul = slideShow.find("ul"),
		showNumber = slideShow.find(".btn3 span"), //获取按钮
		oneWidth = slideShow.find("ul li").eq(0).width(); //获取每个图片的宽度
	var timer = null; //定时器返回值，主要用于关闭定时器
	var iNow = 0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0

	/*手动点击按钮进行图片轮播代码开始*/
	showNumber.hover(function() {
		var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
		iNow = index;
		iNow = parseInt($(".btn3 span").index($(this))); //当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
		$(this).addClass("active").siblings().removeClass("active"); //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
		ul.animate({
			"left": -oneWidth * iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
		});
	});
	/*手动点击按钮进行图片轮播代码结束*/

	/*定时自动轮播图片代码开始*/
	function autoPlay() {
		timer = setInterval(function() { //打开定时器
			iNow++; //让图片的索引值次序加1，这样就可以实现顺序轮播图片
			if(iNow >1) { //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
				iNow = 0;
			}
			ul.animate({
				"left": -oneWidth * iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
			});
			showNumber.eq(iNow).addClass("active").siblings().removeClass("active");
		}, 3000); //2000为轮播的时间
	}
	autoPlay();
	/*定时自动轮播图片代码结束*/

	/*鼠标悬浮图片停止轮播代码开始*/
	slideShow.hover(
		function() {
			clearInterval(timer);
		}, autoPlay
	);
	/*鼠标悬浮图片停止轮播代码结束*/
});
/*轮播4*/
$(document).ready(function(){
	var slideShow = $(".lb4"), //获取最外层框架的名称
		ul = slideShow.find("ul"),
		showNumber = slideShow.find(".btn4 span"), //获取按钮
		oneWidth = slideShow.find("ul li").eq(0).width(); //获取每个图片的宽度
	var timer = null; //定时器返回值，主要用于关闭定时器
	var iNow = 0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0

	/*手动点击按钮进行图片轮播代码开始*/
	showNumber.hover(function() {
		var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
		iNow = index;
		iNow = parseInt($(".btn4 span").index($(this))); //当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
		$(this).addClass("active").siblings().removeClass("active"); //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
		ul.animate({
			"left": -oneWidth * iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
		});
	});
	/*手动点击按钮进行图片轮播代码结束*/

	/*定时自动轮播图片代码开始*/
	function autoPlay() {
		timer = setInterval(function() { //打开定时器
			iNow++; //让图片的索引值次序加1，这样就可以实现顺序轮播图片
			if(iNow >1) { //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
				iNow = 0;
			}
			ul.animate({
				"left": -oneWidth * iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
			});
			showNumber.eq(iNow).addClass("active").siblings().removeClass("active");
		}, 3000); //2000为轮播的时间
	}
	autoPlay();
	/*定时自动轮播图片代码结束*/

	/*鼠标悬浮图片停止轮播代码开始*/
	slideShow.hover(
		function() {
			clearInterval(timer);
		}, autoPlay
	);
	/*鼠标悬浮图片停止轮播代码结束*/
});
