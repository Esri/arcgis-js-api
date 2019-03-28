// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/sniff"],function(e){var o={},i=function(){var e=window,o=document,i=e.navigator.platform,n=e.navigator.userAgent,s={ios:!1,android:!1,androidChrome:!1,desktop:!1,windowsPhone:!1,iphone:!1,iphoneX:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!e.cordova&&!e.phonegap),phonegap:!(!e.cordova&&!e.phonegap)},t=e.screen.width,a=e.screen.height,r=n.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),d=n.match(/(Android);?[\s\/]+([\d.]+)?/),c=n.match(/(iPad).*OS\s([\d_]+)/),h=n.match(/(iPod)(.*OS\s([\d_]+))?/),p=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),w=p&&(375===t&&812===a||414===t&&896===a),u=n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0,l=n.indexOf("Edge/")>=0,m=n.indexOf("Gecko/")>=0&&n.indexOf("Firefox/")>=0,f="MacIntel"===i,v="Win32"===i;if(s.ie=u,s.edge=l,s.firefox=m,r&&(s.os="windows",s.osVersion=r[2],s.windowsPhone=!0),d&&!v&&(s.os="android",s.osVersion=d[2],s.android=!0,s.androidChrome=n.toLowerCase().indexOf("chrome")>=0),(c||p||h)&&(s.os="ios",s.ios=!0),p&&!h&&(s.osVersion=p[2].replace(/_/g,"."),s.iphone=!0,s.iphoneX=w),c&&(s.osVersion=c[2].replace(/_/g,"."),s.ipad=!0),h&&(s.osVersion=h[3]?h[3].replace(/_/g,"."):null,s.iphone=!0),s.ios&&s.osVersion&&n.indexOf("Version/")>=0&&"10"===s.osVersion.split(".")[0]&&(s.osVersion=n.toLowerCase().split("version/")[1].split(" ")[0]),s.webView=!(!(p||c||h)||!n.match(/.*AppleWebKit(?!.*Safari)/i)&&!e.navigator.standalone)||e.matchMedia&&e.matchMedia("(display-mode: standalone)").matches,s.webview=s.webView,s.standalone=s.webView,s.desktop=!(s.os||s.android||s.webView),s.desktop&&(s.macos=f,s.windows=v),s.os&&"ios"===s.os){var g=s.osVersion.split("."),V=o.querySelector('meta[name="viewport"]');s.minimalUi=!s.webView&&(h||p)&&(1*g[0]==7?1*g[1]>=1:1*g[0]>7)&&V&&V.getAttribute("content").indexOf("minimal-ui")>=0}return s.needsStatusbarOverlay=function(){return!(!(s.webView||s.android&&s.cordova)||e.innerWidth*e.innerHeight!=e.screen.width*e.screen.height)&&(!s.iphoneX||90!==e.orientation&&-90!==e.orientation)},s.statusbar=s.needsStatusbarOverlay(),s.pixelRatio=e.devicePixelRatio||1,s}(),n=!i.desktop;return o.device=i,o.isMobileDevice=function(){return n},o.isPCWithTouchScreen=function(){return!n&&e("touch")},o.isLandscape=function(){return 90===Math.abs(window.orientation)},o.press=n?"touchstart":"mousedown",o.release=n?"touchend":"mouseup",o.click=n?"touchend":"click",o.clickOrRelease=n?"touchend":"click, mouseup",o.move=n?"touchmove":"mousemove",o});