
function Chapter_Read(){
  var content=$("#BookText").html();
  content=content.replace("Chapter_Read()","");
	
  var data=content.split("<br>"); 
  if(data.length>10){
    var newcontent="";
    for (var i=0; i <=5 ; i++) { 
      newcontent+=data[i]+"<br/>";
    }
    for (i=data.length-7; i>5 ; i--) { 
      newcontent+=data[i]+"<br/>";
    }
    for (i=data.length-6; i <data.length ; i++) { 
      newcontent+=data[i];
      if(i!=data.length-1){
        newcontent+="<br/>";
      }
    }
    $(BookText).html(newcontent);
  }
}


var this_url = window.location.href;
var web_domain = window.location.host;
var list_s = document.getElementsByTagName('a');
var source_url = [];

for (var i = 0; i < list_s.length; ++i) {
  if (list_s[i].href.indexOf(web_domain) != -1){
    if (list_s[i].href.indexOf('#') == -1) {
      //if (list_s[i].href.indexOf('chapter') != -1 || list_s[i].href.indexOf('shu') != -1) {
        source_url.push(list_s[i].href);
      //}
    }
  }
}

function tongji(){
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?c971e5ce86b30eb6e6bfebf9dc11bb58";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
}

var time_num = new Date().getSeconds().toString().substr( - 1, 1).valueOf();
if(time_num == 0 || time_num == 2 || time_num == 4 || time_num == 6 || time_num == 8) {
  ads_code = ""
}else{
  ads_code = ""
}

if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))){
  function code_ads() {
    document.writeln(ads_code)
  }
}else{
  function code_ads() {
    document.writeln(ads_code)
  }
}

