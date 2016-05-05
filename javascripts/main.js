$(document).ready(function(){
    
    /* 如果是mobile，就不预加载视频 */
    (function () {
    	var useragent  = navigator.userAgent.toLowerCase(),
    	    isIPad     = useragent.match(/ipad/i) == "ipad",
    	    isIPhoneOs = useragent.match(/iphone os/i) == "iphone os",
    	    isMidp     = useragent.match(/midp/i) == "midp",
    	    isUc7      = useragent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
    	    isUc       = useragent.match(/ucweb/i) == "ucweb",
    	    isAndroid  = useragent.match(/android/i) == "android",
    	    isCE       = useragent.match("/windows ce/i") == "windows ce",
    	    isWM       = useragent.match(/windows mobile/i) == "windows mobile";
            
        if (isAndroid) {
            alert("android");
        } else if (isIPhoneOs || isIPad) {
            alert("ios");
        }

    	if (isIPad || isIPhoneOs || isMidp || isUc7 || isUc || isAndroid || isCE || isWM) {
    		$("#video-bkg-hd").attr({
    			"autoplay" : false,
    			"loop"     : false,
    			"preload"  : "none"
    		});
    		return true;
    	} else {
    		$("#video-bkg-hd").attr({
    			"autoplay" : true,
    			"loop"     : true,
    			"preload"  : "auto"
    		});
    		return true;
    	}
    })();
});
