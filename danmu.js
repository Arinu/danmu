window.onload=function(){
	var sub = document.getElementsByClassName("sub");
	var del = document.getElementsByClassName("del");
	var Dm_content = document.getElementsByClassName("dm-content");
	var Dm_c_topmin = Dm_content[0].offsetTop;
	var Dm_c_topmax = Dm_c_topmin + Dm_content[0].offsetHeight;
	var c_top = 0;
	sub[0].onclick=function () {
		if(GetTextValue()!=""){
		DmSubmit();
		}
	};
	del[0].onclick=function () {
		Dm_content[0].innerHTML="";
		c_top=0;
	};
	document.onkeydown = function (event) {
	  var event = window.event || event;
	  if (event.keyCode === 13) {
	    if(GetTextValue()!=""){
	    DmSubmit();
	    }
	  }
	};
	function GetTextValue() {
		var text = document.getElementsByClassName("text");
		var textvalue = text[0].value;
		return textvalue;
	};
	function GetTextColor(){
		return '#' + (function(color){
			return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)]) &&(color.length == 6 ? color : arguments.callee(color));
		})("");
	};
	function DmSubmit() {
		var Dmtext = document.getElementsByClassName("text");
		var newdiv = document.createElement("div");
		newdiv.innerHTML=Dmtext[0].value;
		c_top = c_top+26;
		if (c_top > (Dm_c_topmax - 50)) {
			c_top = 26;
		}
		Dm_content[0].appendChild(newdiv); 
		var e_left = newdiv.offsetWidth;
		var c_left = Dm_content[0].offsetWidth-e_left;
		newdiv.style.left = c_left + "px";
		newdiv.style.top = c_top +"px";	
		newdiv.style.color = GetTextColor();
		Dmtext[0].value="";
		var i=c_left-3;
		var autoleft = setInterval(function () {
			newdiv.style.left = i +"px";
			i -= 3;
			if(-e_left > newdiv.offsetLeft ){
				clearInterval(autoleft);
				Dm_content[0].removeChild(newdiv);
			}
		},25)
	};
}