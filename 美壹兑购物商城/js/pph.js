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

$(document).ready(function(){
	//轮播1
 	 var num = 0;//记录下当前显示的图片的索引
        $(function () {
            $(".cur_pic").eq(0).show();//页面加载的时候，第一张图片显示。
            $(".cur_pic").not(":eq(0)").hide();//页面加载的时候，不是第一张图片，隐藏
            
            setInterval(function () {//隔多久，执行一次方法
                if (num == 3)
                {
                    num = 0;
                }
                A();
                num++;//自增1
            }, 4000);

        });
         function A()
        {
            $(".cur_pic").eq(num).show();
            $(".cur_pic").not(":eq(" + num + ")").hide();
        }
})
