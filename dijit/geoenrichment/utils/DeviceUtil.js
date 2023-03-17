// COPYRIGHT © 2022 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/sniff","dojo/domReady!"],(function(e){var o,i,n,d,s,t,r,a,c,p,h,u,f,l,m,w,v,x={},g=(o=window,i=o.navigator.platform,n=o.navigator.userAgent,d={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!o.cordova&&!o.phonegap),phonegap:!(!o.cordova&&!o.phonegap),electron:!1,nwjs:!1},s=o.screen.width,t=o.screen.height,r=n.match(/(Android);?[\s\/]+([\d.]+)?/),a=n.match(/(iPad).*OS\s([\d_]+)/),c=n.match(/(iPod)(.*OS\s([\d_]+))?/),p=!a&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0,u=n.indexOf("Edge/")>=0,f=n.indexOf("Gecko/")>=0&&n.indexOf("Firefox/")>=0,l="Win32"===i,m=n.toLowerCase().indexOf("electron")>=0,w="undefined"!=typeof nw&&"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.nw,v="MacIntel"===i,!a&&v&&e("touch")&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768"].indexOf(s+"x"+t)>=0&&((a=n.match(/(Version)\/([\d.]+)/))||(a=[0,1,"13_0_0"]),v=!1),d.ie=h,d.edge=u,d.firefox=f,r&&!l&&(d.os="android",d.osVersion=r[2],d.android=!0,d.androidChrome=n.toLowerCase().indexOf("chrome")>=0),(a||p||c)&&(d.os="ios",d.ios=!0),p&&!c&&(d.osVersion=p[2].replace(/_/g,"."),d.iphone=!0),a&&(d.osVersion=a[2].replace(/_/g,"."),d.ipad=!0),c&&(d.osVersion=c[3]?c[3].replace(/_/g,"."):null,d.ipod=!0),d.ios&&d.osVersion&&n.indexOf("Version/")>=0&&"10"===d.osVersion.split(".")[0]&&(d.osVersion=n.toLowerCase().split("version/")[1].split(" ")[0]),d.webView=!(!(p||a||c)||!n.match(/.*AppleWebKit(?!.*Safari)/i)&&!o.navigator.standalone)||o.matchMedia&&o.matchMedia("(display-mode: standalone)").matches,d.webview=d.webView,d.standalone=d.webView,d.desktop=!(d.ios||d.android)||m||w,d.desktop&&(d.electron=m,d.nwjs=w,d.macos=v,d.windows=l,d.macos&&(d.os="macos"),d.windows&&(d.os="windows")),d.pixelRatio=o.devicePixelRatio||1,d);x.device=g,x.isMobileDevice=function(){return!g.desktop},x.isPCWithTouchScreen=function(){return g.desktop&&e("touch")},x.isLandscape=function(){return 90===Math.abs(window.orientation)};var k=null;return x.isWebLayout=function(){var e=7*function(){if(k)return k;var e=document.createElement("div");return e.style="visibility:hidden;height:1in;width:1in;position:absolute;left: -100%;top:-100%;",document.body.appendChild(e),k=e.offsetHeight,e.parentNode.removeChild(e),k}(),o=document.body.offsetWidth;if(o>=e)return!0;var i=document.body.offsetHeight;if(o>=i&&Math.sqrt(o*o+i*i)>=e)return!0;return!1},x.press=g.desktop?"mousedown":"touchstart",x.release=g.desktop?"mouseup":"touchend",x.click=g.desktop?"click":"touchend",x.clickOrRelease=g.desktop?"click, mouseup":"touchend",x.move=g.desktop?"mousemove":"touchmove",x}));