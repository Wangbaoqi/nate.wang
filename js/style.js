if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    new WOW().init();
};
function showMenu() {
    if ($(".menu_btn").hasClass("active")) {
        $(".menu_btn").removeClass("active");
        $(".menu").removeClass("active");
    } else {
        $(".menu_btn").addClass("active");
        $(".menu").addClass("active");
    }
}
function showcustomer() {
    if ($(".customerpage").hasClass("active")) {
        $(".customerpage").removeClass("active");
        $(".fiexdcustomer").show();
    } else {
        $(".customerpage").addClass("active");
        $(".fiexdcustomer").hide();
    }
}
$(function () {
    $("body").on("click", ".menu_btn", function () {
        showMenu();
    });
    $("body").on("click", ".fiexdcustomer", function () {
        showcustomer();
    });
    $("body").on("click", ".close", function () {
        $(".customerpage").removeClass("active");
        $(".fiexdcustomer").show();
    });
    $(".businessTabLeftLi").on("mouseover", function (e) {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $('.businessTabRight .businessTabRightLi').eq(index).addClass("active").siblings().removeClass("active");
    });
    $(".Lisel").on("click", function (e) {
        e.stopPropagation();
        $('.LiselListBoxafter').hide()
        $(this).parent().parent().addClass("active").siblings().removeClass("active");
        $(this).next('.LiselListBoxafter').show();
    })
    $("body").on("click", function () {
        $(".LiselListBoxafter").hide();
        $(".dataBoxRightLiBox").removeClass("active");
    });
   
})