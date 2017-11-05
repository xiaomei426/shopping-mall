$(document).ready(function() {
	/*轮播*/
	var slideShow = $(".banner"), //获取最外层框架的名称
		ul = slideShow.find("ul"),
		showNumber = slideShow.find(".lb span"), //获取按钮
		oneWidth = slideShow.find("ul li").eq(0).width(); //获取每个图片的宽度
	var timer = null; //定时器返回值，主要用于关闭定时器
	var iNow = 0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0

	/*手动点击按钮进行图片轮播代码开始*/
	showNumber.hover(function() {
		var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
		iNow = index;
		iNow = parseInt($(".lb span").index($(this))); //当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
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
			if(iNow > showNumber.length - 1) { //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
				iNow = 0;
			}
			ul.animate({
				"left": -oneWidth * iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
			});
			showNumber.eq(iNow).addClass("active").siblings().removeClass("active");
		}, 4000); //2000为轮播的时间
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

$(document).ready(function() {
	/*轮播1*/
	var slideShow = $(".banner1"), //获取最外层框架的名称
		ul = slideShow.find("ul"),
		showNumber = slideShow.find(".lb1 span"), //获取按钮
		oneWidth = slideShow.find("ul li").eq(0).width(); //获取每个图片的宽度
	var timer = null; //定时器返回值，主要用于关闭定时器
	var iNow = 0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0

	/*手动点击按钮进行图片轮播代码开始*/
	showNumber.hover(function() {
		var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
		iNow = index;
		iNow = parseInt($(".lb1 span").index($(this))); //当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
		$(this).addClass("active").siblings().removeClass("active"); //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
		ul.animate({
			"left": -oneWidth * iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
		});
	});
	/*手动点击按钮进行图片轮播代码结束*/

	/*定时自动轮播图片代码开始*/
	function autoPlay() {
		var
			timer = setInterval(function() { //打开定时器
				iNow++; //让图片的索引值次序加1，这样就可以实现顺序轮播图片
				if(iNow > showNumber.length - 1) { //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
					iNow = 0;
				}
				ul.animate({
					"left": -oneWidth * iNow, //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNow确定
				});
				showNumber.eq(iNow).addClass("active").siblings().removeClass("active");
			}, 4000); //2000为轮播的时间
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
/*无缝滚动*/
$(document).ready(function() {
	$(".slide-box").imgscroll({
		speed: 20, //图片滚动速度
		amount: 0, //图片滚动过渡时间
		width: 1, //图片滚动步数
		dir: "left" // "left" 或 "up" 向左或向上滚动
	});
});
$.fn.imgscroll = function(o) {
	var defaults = {
		speed: 20,
		amount: 0,
		width: 1,
		dir: "left"
	};
	o = $.extend(defaults, o);

	return this.each(function() {
		var _li = $("li", this);
		_li.parent().parent().css({
			overflow: "hidden",
			position: "relative"
		}); //div
		_li.parent().css({
			margin: "0",
			padding: "0",
			overflow: "hidden",
			position: "relative",
			"list-style": "none"
		}); //ul
		_li.css({
			position: "relative",
			overflow: "hidden"
		}); //li
		if(o.dir == "left") _li.css({
			float: "left"
		});

		//初始大小
		var _li_size = 0;
		for(var i = 0; i < _li.size(); i++)
			_li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);

		//循环所需要的元素
		if(o.dir == "left") _li.parent().css({
			width: (_li_size * 7) + "px"
		});
		_li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
		_li = $("li", this);

		//滚动
		var _li_scroll = 0;

		function goto() {
			_li_scroll += o.width;
			if(_li_scroll > _li_size) {
				_li_scroll = 0;
				_li.parent().css(o.dir == "left" ? {
					left: -_li_scroll
				} : {
					top: -_li_scroll
				});
				_li_scroll += o.width;
			}
			_li.parent().animate(o.dir == "left" ? {
				left: -_li_scroll
			} : {
				top: -_li_scroll
			}, o.amount);
		}

		//开始
		var move = setInterval(function() {
			goto();
		}, o.speed);
		_li.parent().hover(function() {
			clearInterval(move);
		}, function() {
			clearInterval(move);
			move = setInterval(function() {
				goto();
			}, o.speed);
		});
	});
};