$(function(){
    //首页
    $(".icon-home").bind("click",function(){
        window.location.href="/";
    });
    //回到顶部
    $(".totop").bind("click",function(){
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    //搜索
    $(".icon-search").bind("click",function(event){ 
        $(".menu").removeClass("show");
        $(".search").toggleClass("show")
        event.stopPropagation();
        $(document).bind("click",function(event){
            if (!$('.search-panel').is(event.target) && $('.search-panel').has(event.target).length === 0) {
                $(".search").removeClass("show");
            }
        });
    });
    //菜单
    $(".icon-menu").bind("click",function(){
        $(".search").removeClass("show");
        $(".menu").toggleClass("show")
        event.stopPropagation();
        $(document).bind("click",function(event){
            if (!$('.menu-panel').is(event.target) && $('.menu-panel').has(event.target).length === 0) {
                $(".menu").removeClass("show");
            }
        });
    });
    //目录

    $(".btn-bookshelf").bind("click",function(){
        if (($(".bookshelf-mask").hasClass("show")) && $(".bookshelf-panel").hasClass("show")) {
            $(".bookshelf-panel").removeClass("show");
            $(".bookshelf-mask").removeClass("show");
        }
        else {
            $(".bookshelf-panel").addClass("show");
            $(".bookshelf-mask").addClass("show");
        }
    });
    $(".bookshelf-mask").bind("click",function(){
        $(".bookshelf-panel").removeClass("show");
        $(".bookshelf-mask").removeClass("show");
    });
    $(".bookshelf-set").on("click", function() {
        $(".bookshelf-panel").removeClass("show");
        $(".bookshelf-mask").removeClass("show");
    });

    //选项卡切换
    $(".mod-tabs ol li").bind("click",function(){
        var index = $(this).index();
        $(this).addClass("on").siblings("li").removeClass("on");
        $(".mod-body").eq(index).show().siblings(".mod-body").hide();
    });

    var $review = $(".review-list ul");
    if ($review.children("li").length > 5) {
        $review.children("li").slice(5).css("display","none");
        $(".review-more").bind("click",function(){
            $(this).css("display","none");
            $review.children("li").slice(5).css("display","block");
        });
    }

    //筛选列表
	$('.x-library_category-more').click(function(event) {
		if($('.x-category_box:gt(2)').is(':hidden')){
			$('.x-category_box:gt(2)').slideDown();
			$(this).text('隐藏更多筛选项');
		}else{
			$('.x-category_box:gt(2)').slideUp();
			$(this).text('展开更多筛选项');
		}
	});

});
function LiuXiaoBai(){
	var img=event.srcElement;
	img.src="/nocover.jpg";
	img.onerror=null;
}