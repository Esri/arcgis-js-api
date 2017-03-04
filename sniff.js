// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/sniff","./kernel"],function(r,e){var i,n=function(){return this}(),s=r("ff"),a=r("ie"),t=void 0===a&&r("trident")>=7,o=r("edge"),d=r("webkit"),f=r("opera"),m=r("chrome"),c=r("safari"),l=navigator.userAgent;return i=l.match(/(iPhone|iPad|CPU)\s+OS\s+(\d+\_\d+)/i),i&&r.add("esri-iphone",parseFloat(i[2].replace("_","."))),i=l.match(/Android\s+(\d+\.\d+)/i),i&&r.add("esri-android",parseFloat(i[1])),i=l.match(/Fennec\/(\d+\.\d+)/i),i&&r.add("esri-fennec",parseFloat(i[1])),l.indexOf("BlackBerry")>=0&&l.indexOf("WebKit")>=0&&r.add("esri-blackberry",1),r.add("esri-touch",r("esri-iphone")||r("esri-android")||r("esri-blackberry")||r("esri-fennec")>=6||(s||d)&&document.createTouch?!0:!1),i=l.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i),i&&r.add("esri-mobile",i),r.add("esri-pointer",navigator.pointerEnabled||navigator.msPointerEnabled),e._getDOMAccessor=function(r){var e="";return s?e="Moz":d?e="Webkit":a?e="ms":f&&(e="O"),e+r.charAt(0).toUpperCase()+r.substr(1)},r.add("esri-phonegap",!!n.cordova),r.add("esri-cors",r("esri-phonegap")||n.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest),r.add("esri-file-upload",n.FormData&&n.FileList?!0:!1),r.add("esri-workers",n.Worker?!0:!1),r.add("esri-transforms",t||o||a>=9||s>=3.5||m>=4||c>=3.1||f>=10.5||r("esri-iphone")>=3.2||r("esri-android")>=2.1),r.add("esri-transitions",t||o||a>=10||s>=4||m>=4||c>=3.1||f>=10.5||r("esri-iphone")>=3.2||r("esri-android")>=2.1),r.add("esri-transforms3d",t||o||s>=10||m>=12||c>=4||r("esri-iphone")>=3.2||r("esri-android")>=3),r.add("esri-url-encodes-apostrophe",function(){if(n.document)return!1;var r=n.document.createElement("a");return r.href="?'",r.href.indexOf("?%27")>-1}),r("esri-android")<3&&(r.add("esri-transforms",!1,!1,!0),r.add("esri-transitions",!1,!1,!0),r.add("esri-transforms3d",!1,!1,!0)),r.add("esri-will-change",r("esri-transforms")&&(m>=52||c>=9.1)),e._css=function(e){var i=r("esri-transforms3d");void 0!==e&&null!==e?i=e:i&&(m||c&&!r("esri-iphone"))&&(i=!1);var n=i?"translate3d(":"translate(",t=i?m?",-1px)":",0px)":")",o=i?"scale3d(":"scale(",l=i?",1)":")",u=i?"rotate3d(0,0,1,":"rotate(",p=i?"matrix3d(":"matrix(",h=i?",0,0,":",",x=i?",0,0,0,0,1,0,":",",b=i?",0,1)":")";return{names:{transition:d&&"-webkit-transition"||s&&"MozTransition"||f&&"OTransition"||a&&"msTransition"||"transition",transform:d&&"-webkit-transform"||s&&"MozTransform"||f&&"OTransform"||a&&"msTransform"||"transform",transformName:d&&"-webkit-transform"||s&&"-moz-transform"||f&&"-o-transform"||a&&"-ms-transform"||"transform",origin:d&&"-webkit-transform-origin"||s&&"MozTransformOrigin"||f&&"OTransformOrigin"||a&&"msTransformOrigin"||"transformOrigin",endEvent:d&&"webkitTransitionEnd"||s&&"transitionend"||f&&"oTransitionEnd"||a&&"MSTransitionEnd"||"transitionend"},translate:function(r,e){return n+r+"px,"+e+"px"+t},scale:function(r){return o+r+","+r+l},rotate:function(r){return u+r+"deg)"},matrix:function(r){return p+r.xx+","+r.xy+h+r.yx+","+r.yy+x+r.dx.toFixed(10)+(s?"px,":",")+r.dy.toFixed(10)+(s?"px":"")+b},getScaleFromMatrix:function(r){if(!r)return 1;r=r.toLowerCase();var e=r.indexOf("matrix3d")>-1?"matrix3d(":"matrix(";return Number(r.substring(e.length,r.indexOf(",")))}}},r("extend-esri")&&(e.isiPhone=r("esri-iphone"),e.isAndroid=r("esri-android"),e.isFennec=r("esri-fennec"),e.isBlackBerry=r("esri-blackberry"),e.isTouchEnabled=r("esri-touch"),e.isPointerEnabled=r("esri-pointer"),e._hasCors=r("esri-cors"),e._hasFileUpload=r("esri-file-upload"),e._hasTransforms=r("esri-transforms"),e._hasTransitions=r("esri-transitions"),e._has3DTransforms=r("esri-transforms3d")),r});