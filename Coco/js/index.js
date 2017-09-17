var box=document.getElementById('box');
var texT=document.getElementById('texT');
var qU=document.getElementById('qU');
var lis=box.getElementsByTagName('li');
var click=document.getElementById('click');
var bgmBox=document.getElementById("bgmBox");
var bgm=document.createElement("video");
bgm.id="bgm";
bgm.src="./m/coco.mp3";
bgm.play();
bgm.loop="loop";
bgm.play();
bgmBox.appendChild(bgm);

var ste="";
var num=0;
var iM=0;
var onoff=true;
var arr=["url(img/01.jpg)","url(img/02.jpg)","url(img/03.jpg)","url(img/04.jpg)","url(img/05.jpg)","url(img/06.jpg)"]
	for (var j = 0; j < 36; j++) {
			ste+="<div style='left:"+50*(j%6)+"px;top:"+50*(Math.floor(j/6))+"px;'></div>";
	}
	
	for (var i = 0; i < lis.length; i++) {
		lis[i].innerHTML=ste;
	}
	
	var divs=box.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.backgroundPositionX=-50*(i%6)+"px";
		divs[i].style.backgroundPositionY=-50*(Math.floor(i/6))+"px";
		divs[i].style.backgroundSize="300px 300px";
	}
	li_img(lis[0],0)
	li_img(lis[1],1)
	li_img(lis[2],2)
	li_img(lis[3],3)
	li_img(lis[4],4)
	li_img(lis[5],5)
	
	iM=li_img(lis[0],0)
	iM=li_img(lis[1],1)
	iM=li_img(lis[2],2)
	iM=li_img(lis[3],3)
	iM=li_img(lis[4],4)
	iM=li_img(lis[5],5)
	function li_img(bg,t){
		for (var i = 0; i < bg.children.length; i++) {
				bg.children[i].style.backgroundImage=arr[t];
			}
	}
setTimeout(function(){
	texT.style.transition="3s";
	texT.style.opacity="0";
},30000);
qU.onclick=function(){
	iM++;
	if(iM>=arr.length){
		iM=0;
	}
	quanz();
}
box.onmouseover=function(){
	box.style.animationPlayState="paused";
}
box.onmouseout=function(){
	box.style.animationPlayState="running";
}

click.onclick=function(){
		iM++
		if(iM>=arr.length){
		iM=0;
	}
		quanz();
	if(onoff){
	//环形

		for (var i = 0; i < lis.length; i++) {

			lis[i].style.left="0px";
			lis[i].style.top="0px";
			lis[i].style.transformOrigin="center center -150px";
			lis[i].style.transform="rotateY("+i*60+"deg) rotateZ(0deg)"+"translateZ(200px)";
			lis[i].onclick=function(e){
				num++;
				if(num>=arr.length){
					num=0;
				}
				for (var i = 0; i < this.children.length; i++) {

					this.children[i].style.transform="translateZ("+Math.random()*3000+"px)"+"rotateY("+Math.random()*360+"deg) rotateX("+Math.random()*360+"deg)";
					var This=this;
					setTimeout(function(){
						for (var i = 0; i < This.children.length; i++) {
							This.children[i].style.backgroundImage=arr[num];
							This.children[i].style.transform="translateZ(0px)"+"rotate(0deg)";
						}
					},2000)
				}
				e.cancelBubble=true;
			}
			click.innerHTML="点击变立体型";
		}
		onoff=false;
	}else{
		for (var i = 0; i < lis.length; i++) {
			lis[i].style.transformOrigin="";
			lis[i].style.transform="";
		}
		click.innerHTML="点击变环形";
		onoff=true;
	}
}

function quanz(){
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.backgroundImage=arr[iM];
			divs[i].style.transform="translateZ("+Math.random()*3000+"px)"+"rotateY("+Math.random()*360+"deg) rotateX("+Math.random()*360+"deg)";
			setTimeout(function(){
					for (var i = 0; i < divs.length; i++) {
						divs[i].style.transition="2s";
						divs[i].style.transform="translateZ(0px)"+"rotate(0deg)";
					}
				},1000)
		}
}
	
	
