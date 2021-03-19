//禁止拖动图片
var im = document.getElementsByTagName('img');
for(var i = 0; i < im.length; i++) {
	im[i].onmousedown = function(e) {
		e.preventDefault()
	}
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?73f097a670bee9a51edae708eda38d9c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();