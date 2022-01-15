if(!window.jQuery == true){console.log("JM.JS: I need jQuery. Include it into the page. Thx.");}
var JMCursorePositionX = 0;
var JMCursorePositionY = 0;
var JMAcceleratorPositionX = 0;
var JMAcceleratorPositionY = 0;
var JMAcceleratorPositionLandscape = undefined;
var JMCursoreInitialization = false;

var jm = {
	version: "JM v1.0",
	developer: "mircheg.ru | Ilya Ruchagov",
	include: function(arg){
		if(arg.indexOf(".js")>-1){
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = arg;
			head.appendChild(script);
		}else if(arg.indexOf(".css")>-1){
			$('head').append('<link rel="stylesheet" href="'+arg+'" type="text/css" />');
		}
	},
	//
	device: {
		mobile: function(){
		(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
		return jQuery.browser.mobile
		}
	},
	//
	go: function(url){document.location.href = url;},
	//
	refresh: function(){document.location.reload(true);},
	//
	preload: function(imgURL){
		$("body").append("<img src='"+imgURL+"' style='position: fixed; top: -9999px; left: -9999px; height: 1px; width: 1px; background: url("+imgURL+");'>");
	},
	//
	mouseMove: {
		css: function(obj, mouseEnterCSS, mouseLeaveCSS){
			$(obj).mouseenter(function(){
				str = mouseEnterCSS;
				arr = str.split(";");
				arr.forEach(function(entry){
	 				val = entry.slice(entry.indexOf(":")).replace(":","").replace(/ /g,'');
	 				atr = entry.replace(entry.slice(entry.indexOf(":")), "").replace(/ /g,'');
	 				if(atr != ""  || val != ""){$(obj).css(atr, val);}
	 		});});
			$(obj).mouseleave(function(){
				str = mouseLeaveCSS;
				arr = str.split(";");
				arr.forEach(function(entry){
	 				val = entry.slice(entry.indexOf(":")).replace(":","").replace(/ /g,'');
	 				atr = entry.replace(entry.slice(entry.indexOf(":")), "").replace(/ /g,'');
	 				if(atr != ""  || val != ""){$(obj).css(atr, val);}
			});});
		},
		bg: function(obj,mouseEnterImg, mouseLeaveImg){
			$(obj).mouseenter(function(){
				$(this).css("background","url('"+mouseEnterImg+"')");
			});
			$(obj).mouseleave(function(){$(this).css("background","url('"+mouseLeaveImg+"')");});
		},
		src: function(obj,mouseEnterImg, mouseLeaveImg){
			$(obj).mouseenter(function(){$(this).attr('src', mouseEnterImg)});
			$(obj).mouseleave(function(){$(this).attr('src', mouseLeaveImg)});
		},
		},
	//
	position: {
		pageCenter: function(obj){
			$(obj).css("position", "fixed");
			$(obj).css("top", "50%");
			$(obj).css("left", "50%");
			$(obj).css("margin-top", -1*parseFloat($(obj).height()/2));
			$(obj).css("margin-left", -1*parseFloat($(obj).width()/2));
		}
	},
	//
	fade: {
		in: function(color, time, callback){
			if(!color){color = "black";}
			if(!time){time = 500;}
			if(!callback){callback = function(){}}
			$("body").append("<div id='JSMFadeIn' style='background: "+color+"; height: 100%; width: 100%; opacity: 0; position: fixed; top: 0px; left: 0px;'></div>");
			jm.position.pageCenter("#JSMFadeIn");
			$("#JSMFadeIn").animate({opacity: 1}, time, function(){callback();});
		},
		out: function(color, time, callback){
			if(!color){color = "black";}
			if(!time){time = 500;}
			if(!callback){callback = function(){}}
			if($("#JSMScreen").length == 0){ //jm.setScreen
				$("body").append("<div id='JSMFadeOut' style='background: "+color+"; height: 100%; width: 100%; position: fixed; top: 0px; left: 0px;'></div>");
				$("#JSMFadeOut").animate({opacity: 0}, time, function(){$(this).remove(); callback();});
			}else{time = color; $("#JSMScreen").animate({opacity: 0}, time, function(){$(this).remove(); callback();});}
		}
	},
	//
	cursor: {
		x: function(event){
			return(JMCursorePositionX);
		},
		y: function(){
			return(JMCursorePositionY);
		},
		initialization: function(){
			$("body").mousemove(function(event){
				var yIs = event.pageY; 
				var xIs = event.pageX; 
				JMCursorePositionX = xIs
				JMCursorePositionY = yIs;
				JMCursoreInitialization = true; //document.title = xIs+":"+yIs;
			});
		}
	},
	//
	accelerator: {
		x: function(){
			return(JMAcceleratorPositionX);
		},
		y: function(){
			return(JMAcceleratorPositionY);
		},
		initialization: function(){
			window.ondevicemotion = function(e) {
				if(window.orientation == -90 || window.orientation == 90){
					JMAcceleratorPositionLandscape = true;
				}else{
					JMAcceleratorPositionLandscape = false;
				}
				JMAcceleratorPositionX = event.accelerationIncludingGravity.y;
				JMAcceleratorPositionX = event.accelerationIncludingGravity.x;

			}
		}
	},
	//
	random: function(up){
		if(up === undefined){up = 100;}
		x = Math.floor((Math.random()*up));
		return x;
	},
	//
	get: function(name){
		str = document.location.href.slice(document.location.href.indexOf("?")+1);
		arr = str.split("&");
		returnedVal = "";
		arr.forEach(function(entry){
		val = entry.slice(entry.indexOf("=")).replace("=","").replace(/ /g,'');
		atr = entry.replace(entry.slice(entry.indexOf("=")), "").replace(/ /g,'');
		if(atr==name){returnedVal = val;}
		});
		return returnedVal;
	},
	cutString: function(text, up){
		if(up === undefined){up == 10;}
		text = text.substring(0,up);
		return text;
	},
	cutWords: function(text, up){
		text = text.split(/\s+/).slice(0, up).join(" ");
		return text;
	},
	setScreen: function(color, callback){
		if(!color){color = "black"}
		if(!callback){callback = function(){}}
		$("body").append("<div id='JSMScreen' style='background: "+color+"; height: 100%; width: 100%; position: fixed; top: 0px; left: 0px;'></div>");
		callback();
	}
	//
	
}



window.onload = function(){
	//Check objs with attr: clickable
	var items = document.getElementsByTagName("*");
	for (var i = items.length; i--;) {if($(items[i]).attr("clickable") != undefined){$(items[i]).css("cursor","pointer");}}
	//
	
	
}