(function ($) {
    $.book = {};
    $.book.totalChapter = function () {
        var needMoney = 0;
        $(":checkbox:checked[name='chk_bid']").each(function () {
            needMoney += parseInt($("#chapter_money_" + $(this).val()).val());
        });
        $("#needVipMoney").html(needMoney);
    };
    $.book.action = {
        recomm: function () {
            if (!core.isLogin()) { return false; }
            var $this = $(this);
            core.ajax("book/bookRecomm", { "bid": _book.id, "num": 1 }, function (data) {
                if (data.Success) {
                    $this.after('<em class="addone">+1</em>');
                    $this.next(".addone").animate({ top: -15, right: -10, opacity: 0 }, 500, function () { $(this).remove(); });
                    var lunum = parseInt($this.parents(".lu").children(".num").text());
                    $this.parents(".lu").children(".num").text(lunum + 1);
                } else {
                    core.box(data.Error, "no", 2000, null);
                }
            }, null);
        },
        prop: function () {
            if (!core.isLogin()) { return false; }
            core.ajax("book/bookProps", { "bid": _book.id, "num": $("#prop_num").val(), "iType": $("#prop_iCate").val(), "area": $("#prop_area").val() }, function (data) {
                if (data.Success) {
                    core.box("捧场成功！", "ok", 1500, function () {
                        location.href = location.href;
                    });
                } else {
                    core.box(data.Error, "no", 2000, null);
                }
            }, null);
        }
    };
    $.book.buy = {
        chapter: function () {
            if (!core.isLogin()) { return false; }
            core.ajax("book/buyThisChapter", { "bid": _book.id, "cid": _book.chapterid, "isAuto": $("#c_autoMatic").is(":checked") }, function (data) {
                if (data.Success) {
                    location.href = data.InnerResult;
                } else {
                    core.box(data.Error, "no", 2000, null);
                }
            }, null);
        },
        all: function () {
            if (!core.isLogin()) { return false; }
            if (core.get_checkbox_id() == "") { core.box("请选择要订阅的章节", "no", 2000, null); return false; }
            core.ajax("book/buyChapter", { "bid": _book.id, "cid": core.get_checkbox_id(), "isAuto": $("#autoMatic").is(":checked") }, function (data) {
                if (data.Success) {
                    location.href = data.InnerResult;
                } else {
                    core.box(data.Error, "no", 2000, null);
                }
            }, null);
        }
    };

    $.book.load = {
        fans: function () {
            core.ajax("book/listBookFans", { "bid": _book.id, "top": 10 }, function (data) {
                if (data.Success) {
                    var $this = $("ul.fanslist");
                    $this.empty();
                    $.each(data.InnerResult, function (index, va) {
                        $this.append("<li><div class=\"num\"><em class=\"ui-icon" + (index < 3 ? " three" : "") + "\">" + (index + 1) + "</em>" +
                                               "<span class=\"username\"><a href=\"javascript:;\" target=\"_blank\">" + va.username + "</a></span>" +
                                               "<span class=\"level\">" + va.fansTitle + "</span></li>");
                    });
                }
            }, null);
        },
        prop: function () {
            core.ajax("book/listBookActive", { "bid": _book.id, "top": 2, "iType": 4 }, function (data) {
                if (data.Success) {
                    var $this = $("ul.proplist");
                    $this.empty();
                    $.each(data.InnerResult, function (index, va) {
                    $this.append("<li><span class=\"col-1\"><a href=\"javascript:;\">" + va.username + "</a></span>" +
                                                "<span class=\"col-2\"><img src=\"/images/prop/support-icon-" + va.iCate + ".png\" />x" + va.score + "</span></li>");
                    });
                }
            }, null);
        }
    };

    $.book.prop = {
        numKeyup: function (n) {
            if (!core.isNum(n)) { return false; }
            $("#prop_total").html(parseInt($("#prop_price").val()) * $(n).val());
        },
        show: function () {
            if (!core.isLogin()) { return false; }
            core.popup.init(".prop_overlay");
            core.popup.show();
        }
    };

    $.book.init = function () {
        $.book.load.fans();
        $.book.load.prop();
    };

})(jQuery);

$(function () {

    $("#btn_thisChapterBuy").click($.book.buy.chapter);
    $("#btn_chapterBuy").click($.book.buy.all);
    $("#btn_props").click($.book.action.prop);
    $("a.lubtn").click($.book.action.recomm);
    $("a.addProp").click($.book.prop.show);

    $(".support-goods ul li").click(function () {
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        var json = $(this).attr("data-json");
        var prop = $.parseJSON(json);
        $("#prop_num").val("1");
        $("#prop_iCate").val(prop.id);
        $("#prop_price").val(prop.price);
        $("#prop_total").html(prop.price);
        $(".support-con .fillform .unit").html(prop.unit);
        $(".support-con .fillform .goods").html(prop.title);
    });

    $('a.icommentbtn').click(function () {
        $("html,body").animate({ scrollTop: $('#btn_saveComment').offset().top }, 1000);
        return false;
    });
	
    $(".m-read").hover(function () {
        $(this).children(".m-qrcode").show();
        $('.qrcode_img').empty().qrcode({ width: 125, height: 125, text: _book.web_url });
    }, function () { $(this).children(".m-qrcode").hide(); });
	
    $(".orderpay .question-icon").hover(function () { $(this).siblings(".explain").show().css({ left: $(this).offset().left - 80, top: $(this).offset().top + 25 }); }, function () { $(this).siblings(".explain").hide(); });
    $("#chk_all").click(function () {
        var isChecked = $(this).is(":checked");
        $(":input[name='chk_bid']").each(function () {
            if (!$(this).is(":disabled")) {
                $(this).attr("checked", isChecked);
            }
        });
        $.book.totalChapter();
    });
    $("#btn_chkAll").click(function () {
        var isChecked = $(this).attr("rel");
        $(":input[name='chk_bid']").each(function () {
            if (!$(this).is(":disabled")) {
                $(this).attr("checked", isChecked == "0" ? true : false);
            }
        });
        $(this).html(isChecked == "0" ? "反选" : "全选").attr("rel", isChecked == "0" ? "1" : "0");
        $("#chk_all").attr("checked", isChecked == "0" ? true : false);
        $.book.totalChapter();
    });
});

scriptDomElement('/static/js/jquery.qrcode.min.js');
	
	