function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
$(function (){
    var commonDom=$(".commonbox");
    var commonNav=commonDom.find(".nav");
    commonNav.find("li").click(function (){
        location.href=$(this).attr("link");
    });
    

    function setWidnowSize(){
        var windowWidth=$(window).width();
        var windowHeight=$(window).height();
        var larWidth=1600;
        var larHeight=850;
        if(windowWidth >= larWidth && windowHeight>=larHeight){
            commonDom.css({width:larWidth,height:larHeight,"margin-top":-larHeight/2,"margin-left":-larWidth/2,left:"50%",top:"50%"});
        }else{
            var marL=parseInt(commonDom.css("margin-left"));
            var marT=parseInt(commonDom.css("margin-top"));
            var marginL=Math.ceil(marL)*2;
            var marginT=Math.ceil(marT)*1.5;
            commonDom.css({width:windowWidth-marginL,height:windowHeight-marginT,left:0,top:0});
            var type=$("body").attr("resizeType");
            switch(type){
                case "tongji"://统计
                    //$("#tjmap").height()
                    var w=commonDom.find(".showbox").width()*0.832/4;
                    commonDom.find(".tongji-navs").css({"margin-top":-w/2,width:5*w}).find("li").css({width:w,height:0.8*w});
                break;
                case "manage":
                    var w=commonDom.find(".showbox").width()*0.832/5;
                    commonDom.find(".manage-navs").css({"margin-top":-w/2,width:6*w}).find("li").css({width:w,height:w});
                break;
            }
        }        
    }
    function hideLoading(){
        /*loading*/
        var loadDom=document.getElementById("loading");
        loadDom.setAttribute("class","outloading");
        setTimeout(function (){
            document.body.removeChild(loadDom);
        },500);
    }
    function init(){
        setWidnowSize();
        hideLoading();
    }
    init();
});