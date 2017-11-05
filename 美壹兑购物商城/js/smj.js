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
	$(".cate-list-expand").hide();
	$(".cate-list-expand").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
	$(".cate-list dl").hover(function(){
		var obj=$(this).offset();
		var index=parseInt($(".cate-list dl").index($(this)));
		$(".cate-list-expand").eq(index).show();
	},function(){
		var index=parseInt($(".cate-list dl").index($(this)));
		$(".cate-list-expand").eq(index).hide();
	});
});
/*轮播*/
 $(document).ready(function(){
 	//设置按钮的显示和隐藏
 	$(".lb_btn").hide();
 	$(".lunbo").hover(function(){
 		$(".lb_btn").show();
 	},function(){
 		$(".lb_btn").hide();
 	});
 	
 	//轮播
 	 var num = 0;//记录下当前显示的图片的索引
        $(function () {
            $(".cur_pic").eq(0).show();//页面加载的时候，第一张图片显示。
            $(".cur_pic").not(":eq(0)").hide();//页面加载的时候，不是第一张图片，隐藏
            
            setInterval(function () {//隔多久，执行一次方法
                if (num == 1)
                {
                    num = 0;
                }
                A();
                num++;//自增1
            }, 4000);

            $(".lb_num span").hover(function () {
                num = parseInt($(".lb_num span").index($(this)));//当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
                A();
            });
        });
       
        function A()
        {
            $(".cur_pic").eq(num).show();
            $(".cur_pic").not(":eq(" + num + ")").hide();
            B();
        }
        function B()
        {
            $(".lb_num span").eq(num).addClass("selected");
            $(".lb_num span").not(":eq(" + num + ")").removeClass("selected");
        }
        
 });
 
/*轮播1*/
$(document).ready(function(){
	var slideShow = $(".lb-1"), //获取最外层框架的名称
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
	var slideShow = $(".lb-2"), //获取最外层框架的名称
		ul = slideShow.find("ul"),
		showNumber = slideShow.find(".lb2 span"), //获取按钮
		oneWidth = slideShow.find("ul li").eq(0).width(); //获取每个图片的宽度
	var timer = null; //定时器返回值，主要用于关闭定时器
	var iNow = 0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0

	/*手动点击按钮进行图片轮播代码开始*/
	showNumber.hover(function() {
		var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
		iNow = index;
		iNow = parseInt($(".lb2 span").index($(this))); //当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
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
$(document).ready(function(){
	//轮播3
         var num = 0;//记录下当前显示的图片的索引
        $(function () {
            $(".cur_pic3").eq(0).show();//页面加载的时候，第一张图片显示。
            $(".cur_pic3").not(":eq(0)").hide();//页面加载的时候，不是第一张图片，隐藏
            
            setInterval(function () {//隔多久，执行一次方法
                if (num == 1)
                {
                    num = 0;
                }
                C3();
                num++;//自增1
            }, 3000);

            $(".lb3 span").hover(function () {
                num = parseInt($(".lb3 span").index($(this)));//当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
                C3();
            });
        });
        
        function C3()
        {
            $(".cur_pic3").eq(num).show();
            $(".cur_pic3").not(":eq(" + num + ")").hide();
            D3();
        }
        function D3()
        {
            $(".lb3 span").eq(num).addClass("selected");
            $(".lb3 span").not(":eq(" + num + ")").removeClass("selected");
        }
})
$(document).ready(function(){
	//轮播4
         var num = 0;//记录下当前显示的图片的索引
        $(function () {
            $(".cur_pic4").eq(0).show();//页面加载的时候，第一张图片显示。
            $(".cur_pic4").not(":eq(0)").hide();//页面加载的时候，不是第一张图片，隐藏
            
            setInterval(function () {//隔多久，执行一次方法
                if (num == 1)
                {
                    num = 0;
                }
                C4();
                num++;//自增1
            }, 3000);

            $(".lb4 span").hover(function () {
                num = parseInt($(".lb4 span").index($(this)));//当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
                C4();
            });
        });
        
        function C4()
        {
            $(".cur_pic4").eq(num).show();
            $(".cur_pic4").not(":eq(" + num + ")").hide();
            D4();
        }
        function D4()
        {
            $(".lb4 span").eq(num).addClass("selected");
            $(".lb4 span").not(":eq(" + num + ")").removeClass("selected");
        }
})
