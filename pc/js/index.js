var titlebox=$(".titlebox");
var titleImg=$(".titleImg");
var len=titleImg.length;
var num=1;
setInterval(function(){
	titlebox.animate({
		marginLeft:-num*580
	},600,function(){
		num++;
		if(num==len-1){
			num=1;
			titlebox.css("margin-left","0");
	
		};
	});
},3000)
