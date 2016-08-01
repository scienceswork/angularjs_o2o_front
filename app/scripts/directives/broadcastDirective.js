'use strict';
/**
* webFrontApp Module
*
* broadcastDirective 图片轮播directive
*/

angular.module('webFrontApp').directive('broadcast',function(){
	return{
		restrict:'EA',
		link:function(scope,element,attr){
			console.log(scope);
			var slider=element.find('.slider-wrap').children(),
				bullet=element.find('ul').children(),
				length=slider.length,
				current=0,
				temp='',
				time='',
				loopSpeed=4000,
				fadeSpeed=2000,
				loop=function(){
					slider.eq(current).fadeOut(fadeSpeed);
					bullet.eq(current).removeClass('libg');
					if (current==(length-1)){
						current=-1;
					}
					current+=1;
					slider.eq(current).fadeIn(fadeSpeed);
					bullet.eq(current).addClass('libg');
				};
				slider.eq(0).show();
				bullet.eq(0).addClass('libg');
				time=setInterval(loop,loopSpeed);
				bullet.on('click',function(){
					var index=$(this).index();
					slider.eq(index).fadeIn().siblings().fadeOut();
					bullet.eq(index).addClass('libg').siblings().removeClass('libg');
					clearInterval(time);
					current=index;
					time=setInterval(loop,loopSpeed);
				});

		}
	};
})