function animationD(){
	$(".use").eq(2).append("<div class='animatiBox'></div>");
	$('.animatiBox').append(animati);
	var loading=$('.animatiBox').append(loadingHtml);
	setLoding();
	function setLoding(){
		var data=[];
		var nub=0;
		
		for(var s in animation){
			data=data.concat(animation[s]);
		}
		for (var i = 0; i < data.length; i++) {
			var img=new Image();
			if(typeof(data[i])=="string"){
				img.src=data[i];
				img.onload=function(){
				nub++;
				$(".logoText").html("已加载"+(Math.floor(nub/49*100))+"%");
				if(nub===49){
					$(".loading").hide();
					$(".Modular").eq(0).show();
					diYiPingDh();//第一屏动画
				}
			}
			}
			
		}
	}
	//第一屏
	//生成第一层背景
	var diYiPingHtml="";
	var bg1=animation.bg;
	diYiPingHtml+="<ul class='bgBox'>";
		for (var i = 0; i < bg1.length; i++) {
			diYiPingHtml+="<li class='bg"+(i+1)+"Box'>";
			diYiPingHtml+="<img src='"+bg1[i]+"'/>";
			diYiPingHtml+="</li>";
		}
	diYiPingHtml+="</ul>";
	var jQ_Modular=$('.Modular');//每一屏的最大父级，使用这个变量可以节省获取元素
	jQ_Modular.eq(0).append(diYiPingHtml);
	//动画函数（背景加倒计时）	
	function daojishi(){
		//生成倒计时
		$(".bg5Box").show();
		var time1=animation.time;
		jQ_Modular.eq(0).append("<ul class='time'></ul>");
		var timeHtml="";
		for (var i = 0; i < time1.length; i++) {
			timeHtml+="<li class='timeSpan'><img src='"+time1[i]+"' /></li>";
		}
		$(".time").append(timeHtml);
		var timeSpan=document.getElementsByClassName("timeSpan");
		$('.timeSpan').eq(0).show();
		TweenMax.staggerFrom(".time", 1, {scale:0.5, opacity:0,  ease:Elastic.easeOut});
		var num=0;
		var timeVal=setInterval(function(){
			++num;
			if(num===2){
				clearInterval(timeVal);
			}
			for (var i = 0; i < timeSpan.length; i++) {
				$('.timeSpan').hide();
			}
			TweenMax.staggerFrom(".time", 1, {scale:0.5, opacity:0,  ease:Elastic.easeOut});
			$('.timeSpan').eq(num).show();
		},1000);
		$(".bgBox").show();
		$(".time").show();
	}
	//爆炸效果出场
	//碎片
	var shuiP="";
	var fragment1=animation.fragment;
	shuiP+="<ul class='burstBox'>";
		for (var i = 0; i < fragment1.length; i++) {
			shuiP+="<li class='burst"+(i+1)+"Box'>";
			shuiP+="<img src='"+fragment1[i]+"'/>";
			shuiP+="</li>";
		}
	shuiP+="</ul>";
	jQ_Modular.eq(0).append(shuiP);
	
	//地球
	var earth1=animation.earth;
	jQ_Modular.eq(0).append("<div class='nameEarth'><img src='"+earth1[0]+"'/></div>");
	var nameEarth1=document.querySelector(".nameEarth");
	var burstBox=document.querySelector(".burstBox");
	css(burstBox,"opacity",0);
	css(burstBox,"scale",90);
	$(".nameEarth").hide();
	//动画函数（地球加碎片）
	function suipian(){
		$(".time").html("");
		var burstBox=document.querySelector(".burstBox");
		css(burstBox,"opacity",100);
		css(burstBox,"scale",100);
		TweenMax.staggerFrom(".burstBox", 1, {scale:0.5, opacity:0, delay:0.2, ease:Elastic.easeOut});
		css(nameEarth1,"scale",0.6);
		MTween({
			el:nameEarth1,
			target:{scale:108},
			time:500,
			type:"linear"
		});
		yundong();//运动函数（主场动画）
	}
	
	//第一屏主题登场
	var title1=animation.title1;
	var title2=animation.title;
	var titleHtml="";
	titleHtml+="<div class='titeBox'>";
	for (var i = 0; i < title1.length; i++) {
		titleHtml+="<div class='tite"+(i+1)+"Box'><img src='"+title1[i]+"'></div>";
	};
	titleHtml+="<ul class='textImg'>";
	for (var i = 0; i < title2.length; i++) {
		if(i===2){
			titleHtml+="<li class='tite"+(i+3)+"Box'><span>"+title2[i]+"</span></li>";
		}else{
			titleHtml+="<li class='tite"+(i+3)+"Box'><img src='"+title2[i]+"'></li>";
		};
	};
	titleHtml+="</ul>";
	titleHtml+="</div>";
	
	jQ_Modular.eq(0).append(titleHtml);
	$(".titeBox").hide();
	
	//运动函数（主场动画）
	function yundong(){
		$(".titeBox").show();
		TweenMax.staggerFrom(".tite1Box", 0.8, {y:-200, scale:0.5, opacity:0, delay:1, ease:Elastic.easeOut});
		TweenMax.staggerFrom(".tite2Box", 0.8, {y:-200, scale:0.5, opacity:0, delay:1, ease:Elastic.easeOut});
		TweenMax.staggerFrom(".textImg", 0.8, {y:800, scale:0.5, opacity:0, delay:1, ease:Elastic.easeOut});
		TweenMax.staggerFrom(".tite5Box", 1, {y:-80, scale:0.8, opacity:0, delay:1.8, ease:Elastic.liner});
		var burstBox=document.querySelector(".burstBox");
		css(burstBox,"opacity",100);
		MTween({
			el:burstBox,
			target:{opacity:0},
			time:2000,
			type:"linear"
		});
		$(".tite6Box").css("-webkit-animation-play-state","paused");
		$(".tite6Box").css("animation-play-state","paused");
		setTimeout(function(){
			$(".tite6Box").css("-webkit-animation-play-state","running");
			$(".tite6Box").css("animation-play-state","running");
		},2000);
	}
	//第一屏总动画函数；
	function diYiPingDh(){
		daojishi();
		$(".titeBox").hide();
		$(".nameEarth").hide();
		setTimeout(function(){
			suipian();
			$(".titeBox").show();
			$(".time").html("");
			$(".bg5Box").hide();
			$(".nameEarth").show();
		},3000);
	}
	

   	//第二屏
   	var diSanPing=animation.img3;
   	var nameLin=animation.name;
   	var diSanPingHtml="";
   	diSanPingHtml+="<ul class='bgBox3'>";
   	for (var i = 0; i < diSanPing.length; i++) {
   		 if(i===8){
   			diSanPingHtml+="<li class='bg3_"+(i+1)+"Box'>";
   			diSanPingHtml+="<span>"+diSanPing[i]+"</span>";
   			diSanPingHtml+="</li>";
   		}else  if(i===6){
   			diSanPingHtml+="<li class='bg3_"+(i+1)+"Box'>";
   			diSanPingHtml+="<span>"+diSanPing[i]+"</span>";
   			diSanPingHtml+="</li>";
   		}else if(i===5){
   			diSanPingHtml+="<li class='bg3_"+(i+1)+"Box'></li>";
   		}else{
   			diSanPingHtml+="<li class='bg3_"+(i+1)+"Box'>";
	 		diSanPingHtml+="<img src='"+diSanPing[i]+"'/>";
	 		diSanPingHtml+="</li>";
   		}
   	}
   	//个人照片 （考虑到移动端定位的差距，临时方法：三合一）；
   	diSanPingHtml+="<li class='bg3_10Box'>";
   	diSanPingHtml+="<span><img src='"+nameLin[0]+"'/></span>";
	diSanPingHtml+="<span><img src='"+nameLin[1]+"'/></span>";
	diSanPingHtml+="<div class='nameL'><span>"+nameLin[2]+"<span></div>";
   	diSanPingHtml+="</li>";
   	
   	diSanPingHtml+="</ul>";
   	jQ_Modular.eq(1).append(diSanPingHtml);
	$(".bg3_6Box").append(svgHtml);
	
	//第二屏动画
	function diErPingDh(){
		TweenMax.staggerFrom(".bg3_4Box", 1, {y:-800, scale:1, opacity:0, delay:0.3, ease:Elastic.liner});
		TweenMax.staggerFrom(".bg3_5Box", 2, {y:0, scale:1, opacity:0, delay:0.5, ease:Elastic.liner});
		TweenMax.staggerFrom(".bg3_6Box", 1, {x:-100, scale:1, opacity:1, delay:0.5, ease:Elastic.easeOut});
		TweenMax.staggerFrom(".bg3_7Box", 1, {y:-100, scale:1, opacity:0, delay:0.5, ease:Elastic.easeOut});
		TweenMax.staggerFrom(".bg3_8Box", 1, {y:300, scale:1, opacity:0,  rotation:0, delay:0.5, ease:Elastic.liner});
		TweenMax.staggerFrom(".bg3_9Box", 1, {y:300, scale:1, opacity:0,  rotation:0, delay:1.5, ease:Elastic.liner});
		TweenMax.staggerFrom(".bg3_10Box", 0.5, {x:-100, scale:1, opacity:0, rotation:-90, delay:1.5,  ease:Elastic.liner});
		TweenMax.staggerFrom(".nameL", 1, {x:0, scale:0.1, opacity:0,  rotation:0, delay:2, ease:Elastic.liner});
	}
	
	//第三屏
	var diSanPingHtml="";
	var bg2=animation.img2;
	var bg2TextBox=animation.img2Text;
	diSanPingHtml+="<ul class='bgBox2'>";
		for (var i = 0; i < bg2.length; i++) {
			diSanPingHtml+="<li class='bg2_"+(i+1)+"Box'>";
			diSanPingHtml+="<img src='"+bg2[i]+"'/>";
			diSanPingHtml+="</li>";
		}
	diSanPingHtml+="</ul>";
	jQ_Modular.eq(2).append(diSanPingHtml);
	$(".bgBox2").append(titleHTML2);//头部文字与中间文字的框架（引用了html.js文件）；
	$(".top2").html(bg2TextBox[0]);
	var bg2Text=animation.img2Text;
	var pHtml="";
	for (var i = 1; i < bg2Text.length; i++) {
		pHtml+="<span class='text"+(i+1)+"'>"+bg2Text[i]+"</span>";
	}
	$(".textContent").append(pHtml);
	
	//第三屏动画函数（头部、中间、底部动画）
	function diSanPingDh(){ 
		TweenMax.staggerFrom(".top1", 0.8, {z:-100, scale:0.6, opacity:0, delay:0.8, ease:Elastic.liner});
		TweenMax.staggerFrom(".top2", 0.8, {z:100, scale:2, opacity:0, delay:0.5, ease:Elastic.liner});
		TweenMax.staggerFrom(".top3", 0.8, {z:-100, scale:0.6, opacity:0, delay:0.8, ease:Elastic.liner});
		TweenMax.staggerFrom(".textContent", 3, {z:-100, scale:0.6, opacity:0, delay:1.5, ease:Elastic.easeOut});
		TweenMax.staggerFrom(".bg2_4Box", 0.8, {y:1000, scale:1, opacity:0, delay:0.5, ease:Elastic.liner});
	}
	
	//第四屏
	var diSiPing=animation.img4;
	var lightD=animation.img4Light;
	var topText=animation.img4TopText;
	var bttomText=animation.img4BottomText;
	var diSiPingHtml="";
	
	//生成背景和标题
	diSiPingHtml+="<ul class='bgBox4'>";
	for (var i = 0; i < diSiPing.length-1; i++) {
		if(i<3){
			diSiPingHtml+="<li class='bg3_"+(i+1)+"Box bg4_"+(i+1)+"Box'>";
			diSiPingHtml+="<img src='"+diSiPing[i]+"'/>";
			diSiPingHtml+="</li>";
		}else if(i===3){
			diSiPingHtml+="<li class='bg3_4Box bg4_"+(i+1)+"Box'>";
			diSiPingHtml+="<img src='"+diSiPing[i]+"'/>";
			diSiPingHtml+="</li>";
		}else if(i===4){
			diSiPingHtml+="<li class='bg3_8Box bg4_"+(i+1)+"Box'>";
			diSiPingHtml+="<img src='"+diSiPing[i]+"'/>";
			diSiPingHtml+="</li>";
		}else if(i===5){
			diSiPingHtml+="<li class='bg3_7Box bg4_"+(i+1)+"Box'>";
			diSiPingHtml+="<span>"+diSiPing[i]+"</span>";
			diSiPingHtml+="</li>";
		}else{
			diSiPingHtml+="<li class='bg4_"+(i+1)+"Box'>";
			diSiPingHtml+="<img src='"+diSiPing[i]+"'/>";
			diSiPingHtml+="</li>";
		}
	}
	
	//生成光点
	for (var i = 0; i < 5; i++) {
		diSiPingHtml+="<li class='bg4_Box bg4_"+(i+8)+"Box'>";
		diSiPingHtml+="<img src='"+lightD[0]+"'/>";
		diSiPingHtml+="</li>";
	}
	
	//生成横光线
	for (var i = 0; i < 5; i++) {
		diSiPingHtml+="<li class='bor bg4_"+(i+13)+"Box'>";
		diSiPingHtml+="<img src='"+diSiPing[7]+"'/>";
		diSiPingHtml+="</li>";
	}
	//生成文字内容
	for (var i = 0; i < 5; i++) {
		diSiPingHtml+="<li class='ImgTextBox textBox"+(i+1)+"'>";
		diSiPingHtml+="<span>"+topText[i]+"</span>";
		diSiPingHtml+="<span>"+bttomText[i]+"</span>";
		diSiPingHtml+="</li>";
	}
	diSiPingHtml+="</ul>";
	jQ_Modular.eq(3).append(diSiPingHtml);
	
	//第四屏动画
	function diSiPingDh(){
		TweenMax.staggerFrom(".bg4_4Box", 1, {y:-800, scale:1, opacity:0, delay:0, ease:Elastic.liner});//头部球体
		TweenMax.staggerFrom(".bg3_7Box", 1, {y:-100, scale:1, opacity:0, delay:0.8, ease:Elastic.easeOut});//头部标题
		TweenMax.staggerFrom(".bg3_8Box", 1, {y:300, scale:1, opacity:0,  rotation:0, delay:0, ease:Elastic.liner});//底部图片
		
		TweenMax.staggerFrom(".bg4_7Box", 1, {y:-800, scale:1, opacity:0,  rotation:0, delay:1, ease:Elastic.liner});//中部竖光线
		TweenMax.staggerFrom(".bg4_8Box", 1, {y:0, scale:0.5, opacity:0,  rotation:0, delay:2, ease:Elastic.easeOut});//光点1
		TweenMax.staggerFrom(".bg4_9Box", 1, {y:0, scale:0.5, opacity:0,  rotation:0, delay:2.1, ease:Elastic.easeOut});//光点2
		TweenMax.staggerFrom(".bg4_10Box", 1, {y:0, scale:0.5, opacity:0,  rotation:0, delay:2.2, ease:Elastic.easeOut});//光点3
		TweenMax.staggerFrom(".bg4_11Box", 1, {y:0, scale:0.5, opacity:0,  rotation:0, delay:2.3, ease:Elastic.easeOut});//光点4
		TweenMax.staggerFrom(".bg4_12Box", 1, {y:0, scale:0.5, opacity:0,  rotation:0, delay:2.4, ease:Elastic.easeOut});////光点5
		
		TweenMax.staggerFrom(".bg4_13Box", 1, {y:0, scale:1, opacity:0,  rotation:0, delay:2.5, ease:Elastic.easeOut});//第一横光线
		TweenMax.staggerFrom(".bg4_14Box", 1, {y:0, scale:1, opacity:0,  rotation:0, delay:2.6, ease:Elastic.easeOut});//第二横光线
		TweenMax.staggerFrom(".bg4_15Box", 1, {y:0, scale:1, opacity:0,  rotation:0, delay:2.7, ease:Elastic.easeOut});//第三横光线
		TweenMax.staggerFrom(".bg4_16Box", 1, {y:0, scale:1, opacity:0,  rotation:0, delay:2.8, ease:Elastic.easeOut});//第四横光线
		TweenMax.staggerFrom(".bg4_17Box", 1, {y:0, scale:1, opacity:0,  rotation:0, delay:2.9, ease:Elastic.easeOut});//第五横光线
		
		TweenMax.staggerFrom(".textBox1", 1, {x:300, scale:1, opacity:1,  rotation:0, delay:2.4, ease:Elastic.liner});//右侧第一部分文字
		TweenMax.staggerFrom(".textBox2", 1, {x:-300, scale:1, opacity:1,  rotation:0, delay:2.6, ease:Elastic.liner});//左侧第一部分文字
		TweenMax.staggerFrom(".textBox3", 1, {x:300, scale:1, opacity:1,  rotation:0, delay:2.8, ease:Elastic.liner});//右侧第二部分文字
		TweenMax.staggerFrom(".textBox4", 1, {x:-300, scale:1, opacity:1,  rotation:0, delay:3, ease:Elastic.liner});//左侧第二部分文字
		TweenMax.staggerFrom(".textBox5", 1, {x:300, scale:1, opacity:1,  rotation:0, delay:3.2, ease:Elastic.liner});//右侧第三部分文字
	}
	
	//第五屏
	var diWuPing=animation.img5;
	var diWuPingWorke=animation.worksS;
	var diWuPingHtml="";
	diWuPingHtml+="<ul class='bgBox5'>";
		for (var i = 0; i < diWuPing.length; i++) {
			
			if(i===9){
				diWuPingHtml+="<li class='bg5_"+(i+1)+"Box''>";
				diWuPingHtml+="<span>"+diWuPing[i]+"</span>";
				diWuPingHtml+="</li>";
			}else if(i===8){
				diWuPingHtml+="<li class='bg3_8Box bg5_"+(i+1)+"Box'>";
				diWuPingHtml+="<img src='"+diWuPing[i]+"'/>";
				diWuPingHtml+="</li>";
			}else if(i===7){
				diWuPingHtml+="<li class='bg5_"+(i+1)+"Box''>";
				diWuPingHtml+="<span>"+diWuPing[i]+"</span>";
				diWuPingHtml+="</li>";
			}else if(i<=2){
				diWuPingHtml+="<li class='bg3_"+(i+1)+"Box bg5_"+(i+1)+"Box''>";
				diWuPingHtml+="<img src='"+diWuPing[i]+"'/>";
				diWuPingHtml+="</li>";
			}else{
				diWuPingHtml+="<li class='bg5_"+(i+1)+"Box'>";
				diWuPingHtml+="<img src='"+diWuPing[i]+"'/>";
				diWuPingHtml+="</li>";
			}
			
		}
		for (var i = 0; i < diWuPingWorke.length; i++) {
			diWuPingHtml+="<li class='Worke"+(i+1)+"Box''>";
			diWuPingHtml+="<img src='"+diWuPingWorke[i]+"'/>";
			diWuPingHtml+="</li>";
		}
	diWuPingHtml+="</ul>";
	jQ_Modular.eq(4).append(diWuPingHtml)
//	jQ_Modular.eq(4).show();
	
		//第五屏动画
		function diWuPingDh(){
				TweenMax.staggerFrom(".bg5_4Box", 1, {x:-100, scale:1, opacity:0,  rotation:0, delay:1, ease:Elastic.easeOut});
				TweenMax.staggerFrom(".bg5_5Box", 3, {y:0, scale:1, opacity:0,  rotationX:80, delay:1.5, ease:Elastic.easeOut});
				TweenMax.staggerFrom(".bg5_6Box", 1, {x:-100, scale:1, opacity:0,  rotation:0, delay:1, ease:Elastic.easeOut});
				TweenMax.staggerFrom(".bg5_7Box", 1, {y:-100, scale:1, opacity:0,  rotation:0, delay:1, ease:Elastic.easeOut});
				TweenMax.staggerFrom(".bg5_8Box", 1, {y:100, scale:1, opacity:0,  rotation:0, delay:1, ease:Elastic.easeOut});
				TweenMax.staggerFrom(".Worke1Box", 2.5, {y:0, scale:1, opacity:0,  rotationX:-180, rotationY:-180,  delay:1.5, ease:Elastic.easeOut});
				TweenMax.staggerFrom(".bg5_10Box", 1, {y:200, scale:1, opacity:0,  rotationX:0, rotationY:0,  delay:2, ease:Elastic.liner});
				TweenMax.staggerFrom(".bg5_11Box", 1, {y:500, scale:0.6, opacity:0,  rotationX:0, rotationY:0,  delay:2.5, ease:Elastic.liner});
				
		}

//上下滑动事件
	
	var setValueY="";
	var getY="";
	var hdY="";
	var animatiBox=document.querySelector(".animatiBox");
	
	var jQ_animatiBox=$(".animatiBox");
	var getStartY="";
	var getChaZ="";
	var getChaZiY="";
	var onoff=true;
	var num=0;
	var Mod_length=jQ_Modular.length-1;
	jQ_Modular.css("zIndex",0);
	jQ_Modular.eq(0).css("zIndex",2);
	jQ_Modular.eq(1).css("zIndex",1);


	jQ_animatiBox.on("touchstart",function(ev){
		height=document.getElementById("interface").offsetHeight;
		getStartY=ev.changedTouches[0].pageY;
	});
	
	jQ_animatiBox.on("touchmove",function(ev){
		var getMoveY="";
		getMoveY=ev.changedTouches[0].pageY;
		setValueY=getMoveY-getStartY;
		if(setValueY<0){
			if(onoff){
				num++;
				if(num>Mod_length){
					num=4;
					alert("已经是最后一张了");
					return;
				}
				if(num==1){
					diErPingDh();//第二屏函数动画
				}else if(num==2){
					diSanPingDh();//第三屏函数动画
				}else if(num==3){
					diSiPingDh();//第四屏函数动画
				}else if(num==4){
					diWuPingDh();//第五屏函数动画
				}
					//第二屏总动画函数；
				onoff=false;
			}
			jQ_Modular.hide();
			jQ_Modular.eq(num).show();
			jQ_Modular.eq(num-1).show();
			jQ_Modular.eq(num-1).css("zIndex",8);
			jQ_Modular.eq(num).css("zIndex",10);
			jQ_Modular.eq(num).css("top","100%");
			jQ_Modular.eq(num).css("top",setValueY+height);
			
		}
		if(setValueY>0){
			if(onoff){
				num--;
				if(num<0){
					num=0;
					alert("已经是第一张了");
					return;
				}
				if(num==4){
					diWuPingDh();//第五屏函数动画
				}else if(num==3){
					diSiPingDh();//第四屏函数动画
				}else if(num==2){
					diSanPingDh();//第三屏函数动画
				}else if(num==1){
					diErPingDh();//第二屏函数动画
				}else if(num==0){
					diYiPingDh();//第一屏函数动画
				}
				
				onoff=false;
			}
			jQ_Modular.hide();
			jQ_Modular.eq(num).show();
			jQ_Modular.eq(num+1).show();
			jQ_Modular.eq(num).css("zIndex",10);
			jQ_Modular.eq(num+1).css("zIndex",8);
			jQ_Modular.eq(num).css("top",-height);
			jQ_Modular.eq(num).css("top",setValueY-height);
		}
		
	});
	jQ_animatiBox.on("touchend",function(){
		onoff=true;
		if(setValueY<10){
			jQ_Modular.eq(num).animate({
				top:0
			},500,function(){
				jQ_Modular.eq(num-1).css("top",-height);
			});
		}else{
			jQ_Modular.eq(num).animate({
				top:0
			},500,function(){
				jQ_Modular.eq(num+1).css("top",height);
			});
		}
	});
}
