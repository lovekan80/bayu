//移动环境访问PC自动适配M版
function redirectMobile(){
	 var url=window.location.href;
     if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER| LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
	    url=url.replace('://www.','://m.');
	    window.location.href=url;
	 }
}
redirectMobile();