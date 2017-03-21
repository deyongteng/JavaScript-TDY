var Tween = {
	linear: function (t, b, c, d){
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 2.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
};
function cssTransform(el, attr, val) {
	if(!el.transform){
		el.transform = {}
	}
	if(typeof val == "undefined"){
		if(typeof el.transform[attr] == "undefined"){
			switch(attr) {
				case "scale":
				case "scaleX":
				case "scaleY":
					el.transform[attr] = 100;
					break;
				default:
					el.transform[attr] = 0;	
			}
		}
		return el.transform[attr];
	} else {
		var transformVal = "";
		el.transform[attr] = Number(val);
		for(var s in el.transform){
			switch(s){
				case "rotate":
				case "rotateX":
				case "rotateY":
				case "rotateZ":
				case "skewX":
				case "skewY":
					transformVal += " "+s+"("+el.transform[s]+"deg)";
					break;
				case "translateX":
				case "translateY":
				case "translateZ":
					transformVal += " "+s+"("+el.transform[s]+"px)";
					break;
				case "scale":
				case "scaleX":
				case "scaleY":
					transformVal += " "+s+"("+el.transform[s]/100+")";
					break;
			}
		}
		el.style.WebkitTransform = el.style.transform = transformVal;
	}
}
function css(element, attr , val){
	if(attr == "rotate" || attr == "rotateX" 
	|| attr == "rotateY" ||attr == "rotateZ" 
	|| attr == "scale" || attr == "scaleX"
	|| attr == "scaleY" || attr == "skewX"
	|| attr == "skewY" || attr == "translateX"
	|| attr == "translateY" || attr == "translateZ" ){
		return cssTransform(element, attr, val);
	}
	if(arguments.length == 2){
		var val = getComputedStyle(element)[attr];
		if(attr=='opacity'){
			val = Math.round(val*100);
		}
		return parseFloat(val);
	} 
	if(attr == "opacity") {
		element.style.opacity= val/100;
	} else {
		element.style[attr]= val + "px";	
	}
}
function MTween(init){
	var t = 0;
	var b = {};
	var c = {};
	var d = init.time / 20;
	for(var s in init.target){ 
		b[s] = css(init.el, s); 
		c[s] = init.target[s] - b[s];
	}
	clearInterval(init.el.timer); 
	init.el.timer = setInterval(
		function(){
			t++;
			if(t>d){
				clearInterval(init.el.timer);
				init.callBack&&init.callBack.call(init.el);
			} else {
				init.callIn&&init.callIn.call(init.el);
				for(var s in b){
					var val = (Tween[init.type](t,b[s],c[s],d)).toFixed(2);
					css(init.el, s, val);
				}
			}
		},
		20
	);
}
function TDY_position(eles,parenT,time,functi){
	var setValueY="";
	var getY="";
	var hdY="";
	var getStartY="";
	var getChaZ="";
	var getChaZiY="";
	var onoff=true;
	var num=0;
	var elesL=eles.length-1;
	eles[0].style.zIndex="2";
	eles[1].style.zIndex="1";
	parenT.addEventListener("touchstart",function(ev){
		height=parenT.offsetHeight;
		getStartY=ev.changedTouches[0].pageY;
	});
	
	parenT.addEventListener("touchmove",function(ev){
		var getMoveY="";
		getMoveY=ev.changedTouches[0].pageY;
		setValueY=getMoveY-getStartY;
		if(setValueY<0){
			if(onoff){
				num++;
				if(num>elesL){
					num=elesL;
					return;
				}
					//第二屏总动画函数；
				if(num==1){
					//functi();//第二屏函数动画
				}else if(num==2){
					//第三屏函数动画
				}else if(num==3){
					//第四屏函数动画
				}else if(num==4){
					//第五屏函数动画
				}
				onoff=false;
			}
			for (var i = 0; i < eles.length; i++) {
				eles[i].style.zIndex="0";
			}
			eles[num-1].style.zIndex="1";
			eles[num].style.zIndex="2";
			eles[num].style.top="100%";
			eles[num].style.top=(setValueY+height)+"px";
		}
		if(setValueY>0){
			if(onoff){
				num--;
				if(num<0){
					num=0;
					return;
				}
				onoff=false;
			}
			for (var i = 0; i < eles.length; i++) {
				eles[i].style.zIndex="0";
			}
			eles[num].style.zIndex="2";
			eles[num+1].style.zIndex="1";
			eles[num].style.top=-height;
			eles[num].style.top=(setValueY-height)+"px";
		}
		
	});
	parenT.addEventListener("touchend",function(){
		onoff=true;
		if(setValueY<10){
			MTween({
				el:eles[num],
				target:{top:0},
				time:time,
				type:"easeBoth",
				callBack:function(){
					eles[num-1].style.top=-height;
				}
			})
		}else{
			MTween({
				el:eles[num],
				target:{top:0},
				time:time,
				type:"easeBoth",
				callBack:function(){
					eles[num+1].style.top=height;
				}
			});
		}
	});
	var onoff=true;
	parenT.onmousedown=function(ev){
		height=parenT.offsetHeight;
		getStartY=ev.clientY;
		parenT.onmousemove=function(ev){
			var getMoveY="";
			getMoveY=ev.clientY;
			setValueY=getMoveY-getStartY;
			if(setValueY<0){
				if(onoff){
					num++;
					if(num>elesL){
						num=elesL;
						return;
					}
					onoff=false;
				}
				for (var i = 0; i < eles.length; i++) {
					eles[i].style.zIndex="0";
				}
				eles[num-1].style.zIndex="1";
				eles[num].style.zIndex="2";
				eles[num].style.top="100%";
				eles[num].style.top=(setValueY+height)+"px";
			}
			if(setValueY>0){
				if(onoff){
					num--;
					if(num<0){
						num=0;
						return;
					}
					if(num==1){
						functi();//第二屏函数动画
					}else
					// if(num==4){
					// 	diWuPingDh();//第五屏函数动画
					// }else if(num==3){
					// 	diSiPingDh();//第四屏函数动画
					// }else if(num==2){
					// 	diSanPingDh();//第三屏函数动画
					// }else if(num==1){
					// 	diErPingDh();//第二屏函数动画
					// }else if(num==0){
					// 	diYiPingDh();//第一屏函数动画
					// }
					onoff=false;
				}
				for (var i = 0; i < eles.length; i++) {
					eles[i].style.zIndex="0";
				}
				eles[num].style.zIndex="2";
				eles[num+1].style.zIndex="1";
				eles[num].style.top=-height;
				eles[num].style.top=(setValueY-height)+"px";
			}
			
		};
	};
	parenT.onmouseup=function(){
		parenT.onmousemove=null;
		onoff=true;
		if(setValueY<10){
			if(num<=0){
				num=1;
			};
			MTween({
				el:eles[num],
				target:{top:0},
				time:time,
				type:"easeBoth",
				callBack:function(){
					eles[num-1].style.top=-height;
				}
			})
		}else{
			MTween({
				el:eles[num],
				target:{top:0},
				time:time,
				type:"easeBoth",
				callBack:function(){
					eles[num+1].style.top=height;
				}
			});
		}
	};
}
