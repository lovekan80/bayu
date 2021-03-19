
//localStorage(默认) 或者 sessionStorage 处理
function isPrivateMode(){
	if(typeof window.privateMode == 'undefined'){
		try {
    		localStorage.setItem('privateMode', '1');
    		localStorage.removeItem('privateMode');
    		window.privateMode = false;
		} catch(e) {
    		window.privateMode = true;
		}
	}
	return window.privateMode;
}

var Storage = {
    get: function (n) {
        if (window.localStorage && !isPrivateMode() && (arguments.length < 2 || arguments[1] == 'local')) return localStorage.getItem(n);
        else if (window.sessionStorage && !isPrivateMode() && arguments.length > 1 && arguments[1] == 'session') return sessionStorage.getItem(n);
        else return Cookie.get(n);
    },
    set: function (name, value) {
        if (window.localStorage && !isPrivateMode() && (arguments.length < 3 || arguments[2] == 'local')) return localStorage.setItem(name, value);
        else if (window.sessionStorage && !isPrivateMode() && arguments.length > 2 && arguments[2] == 'session') return sessionStorage.setItem(name, value);
        else return Cookie.set(name, value, 365, '/', '', '');
    },
    del: function (n) {
        if (window.localStorage && !isPrivateMode() && (arguments.length < 2 || arguments[1] == 'local')) return localStorage.removeItem(n);
        else if (window.sessionStorage && !isPrivateMode() && arguments.length > 1 && arguments[1] == 'session') return sessionStorage.removeItem(n);
        else return Cookie.del(n);
    }
};

//显示最近阅读记录，需要先加载 /scripts/json2.js
var hisStorageName = 'babayu'; //变量名
var hisStorageValue = Storage.get(hisStorageName); //读取记录
var hisBookAry = []; //记录数组

try{
	hisBookAry = JSON.parse(hisStorageValue);
	if(!hisBookAry) hisBookAry = [];
}catch(e){
}

//显示最近阅读
if(hisBookAry.length > 0){
	var htmlStr;
	for(var i = hisBookAry.length - 1; i >= 0; i--){
		htmlStr = '<tr><td class="tc">' + (i+1) + '</td><td class="tc"><a href="' + hisBookAry[i].sortUrl + '" target="_blank">[' + hisBookAry[i].sortname + ']</a></td><td><a href="' + hisBookAry[i].articleUrl + '" title="' + hisBookAry[i].articlename + '" target="_blank" class="title">《' + hisBookAry[i].articlename + '》</a><a href="' + hisBookAry[i].chapterUrl + '" target="_blank" class="chapter">' + hisBookAry[i].chaptername + '</a></td><td><span class="author">' + hisBookAry[i].author + '</span></td><td class="tc"><span class="gray">' + hisBookAry[i].lastupdate + '</span></td></tr>';
		document.write(htmlStr);
	}
}else{
	document.write('');
}

//删除一本书
function hisBookRemove(aid){
	var o = arguments.length > 1 ? arguments[1] : getTarget();
	for(var i = 0; i < hisBookAry.length; i++){
		if(hisBookAry[i].articleid == aid){
			hisBookAry.splice(i, 1);
			hisStorageValue = JSON.stringify(hisBookAry);
			Storage.set(hisStorageName, hisStorageValue);
			o.parentNode.parentNode.parentNode.removeChild(o.parentNode.parentNode);
			break;
		}
	}
}