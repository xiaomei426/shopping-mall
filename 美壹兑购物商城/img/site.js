// JavaScript Document By Aring QQ:838278506 http://www.divsz.com/

////选项卡(导航)
function setTab(name,cursel,n){
 
  for(i=1;i<=n;i++){
    var menu=document.getElementById(name+i);
	var con=document.getElementById(name+"_"+i);
	menu.className=i==cursel?"hover":"";
	con.style.display=i==cursel?"block":"none";
  }
};
//选项卡切换
$(document).on('mouseover', '.pro_h>ul>li', function(event) {
  event.preventDefault();
  $tabs=$(this).parent().find('li');
  var $contents = $(this).parent().parent().next().find('.pro_r');
  $(this).addClass('hover').siblings().removeClass('hover');
  $contents.hide();
  $($contents[$tabs.index($(this))]).show();
});

$(function(){
  $(".theme li:last").addClass("last");
  $(".fine_l dl:last").addClass("last");
  $(".fine_l dt:lt(3)").addClass("top");

  //楼层tab标题最左边选中
  $(".pro_h ul").each(function(i){
     var me= $(this);
     var childObj = me.find("li");
     var total = childObj.length; 
      childObj.each(function(i) {
        var a  =  childObj.eq((total-1)-i).html();
        if (a !="" ){
          childObj.eq((total-1)-i).trigger('mouseover');
          return false;
        }
      }); 
  });

  //壹购精选tab标题最左边选中
  $(".sort ul").each(function(i){
     var me= $(this);
     var childObj = me.find("li");
     var total = childObj.length; 
      childObj.each(function(i) {
        var a  =  childObj.eq((total-1)-i).html();
        if (a !="" ){
          childObj.eq((total-1)-i).trigger('onmousemove');
          return false;
        }
      }); 
  });

});
