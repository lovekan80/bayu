//下拉菜单
function menufix() {
	var sfEls=document.getElementById("jieqi_menu");
	if(sfEls) sfEls=sfEls.getElementsByTagName("li");
	if(sfEls){
		for(var i=0; i<sfEls.length; i++){
			sfEls[i].onmouseover=function(){ this.className="sfhover"; }
			sfEls[i].onmouseout=function(){ this.className="nohover"; }
			sfEls[i].onmousedown=function(){ this.className="sfhover"; }
			sfEls[i].onmouseup=function(){ this.className="sfhover"; }
		}
	}
}
/**
if (document.all){
	window.attachEvent('onload',menufix);
}else{
	window.addEventListener('load',menufix,false);
}

if (document.all){
	window.attachEvent('onload',tipinit);
}else{
	window.addEventListener('load',tipinit,false);
} 
**/

//tab效果
function selecttab(obj){
	var n = 0;
	var tabs = obj.parentNode.parentNode.getElementsByTagName("li"); 
	for(i=0; i<tabs.length; i++){
		tmp = tabs[i].getElementsByTagName("a")[0];
		if(tmp == obj){
			tmp.className="selected";
			n=i;
		}else{
			tmp.className="";
		}
 	}
	var contents = obj.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("div")[1].getElementsByTagName("div");
	for(i=0; i<contents.length; i++){
		contents[i].style.display = i==n ? "block" : "none";   
 	}
}