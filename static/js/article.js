$(function() {
  $(".m-read").hover(function() {
    $(this).children(".m-qrcode").show();
    $('.qrcode_img').empty().qrcode({
      width: 125,
      height: 125,
      text: ReadParams.wapUrl
    });
  }, function() {
    $(this).children(".m-qrcode").hide();
  });
});
