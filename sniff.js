// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/sniff","./kernel"],function(r,i){var e,n=r("ff"),s=r("ie"),a=void 0===s&&r("trident")>=7,o=r("webkit"),t=r("opera"),d=r("chrome"),f=r("safari"),m=navigator.userAgent;return e=m.match(/(iPhone|iPad|CPU)\s+OS\s+(\d+\_\d+)/i),e&&r.add("esri-iphone",parseFloat(e[2].replace("_","."))),e=m.match(/Android\s+(\d+\.\d+)/i),e&&r.add("esri-android",parseFloat(e[1])),e=m.match(/Fennec\/(\d+\.\d+)/i),e&&r.add("esri-fennec",parseFloat(e[1])),m.indexOf("BlackBerry")>=0&&m.indexOf("WebKit")>=0&&r.add("esri-blackberry",1),r.add("esri-touch",r("esri-iphone")||r("esri-android")||r("esri-blackberry")||r("esri-fennec")>=6||(n||o)&&document.createTouch?!0:!1),e=m.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i),e&&r.add("esri-mobile",e),r.add("esri-pointer",navigator.pointerEnabled||navigator.msPointerEnabled),i._getDOMAccessor=function(r){var i="";return n?i="Moz":o?i="Webkit":s?i="ms":t&&(i="O"),i+r.charAt(0).toUpperCase()+r.substr(1)},r.add("esri-phonegap",!!window.cordova),r.add("esri-cors",r("esri-phonegap")||"XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest),r.add("esri-file-upload",window.FormData&&window.FileList?!0:!1),r.add("esri-workers",window.Worker?!0:!1),r.add("esri-transforms",a||s>=9||n>=3.5||d>=4||f>=3.1||t>=10.5||r("esri-iphone")>=3.2||r("esri-android")>=2.1),r.add("esri-transitions",a||s>=10||n>=4||d>=4||f>=3.1||t>=10.5||r("esri-iphone")>=3.2||r("esri-android")>=2.1),r.add("esri-transforms3d",a||n>=10||d>=12||f>=4||r("esri-iphone")>=3.2||r("esri-android")>=3),r.add("esri-url-encodes-apostrophe",function(){var r=window.document.createElement("a");return r.href="?'",r.href.indexOf("?%27")>-1}),r("esri-android")<3&&(r.add("esri-transforms",!1,!1,!0),r.add("esri-transitions",!1,!1,!0),r.add("esri-transforms3d",!1,!1,!0)),i._css=function(i){var e=r("esri-transforms3d");void 0!==i&&null!==i?e=i:e&&(d||f&&!r("esri-iphone"))&&(e=!1);var a=e?"translate3d(":"translate(",m=e?d?",-1px)":",0px)":")",c=e?"scale3d(":"scale(",l=e?",1)":")",p=e?"rotate3d(0,0,1,":"rotate(",u=e?"matrix3d(":"matrix(",h=e?",0,0,":",",x=e?",0,0,0,0,1,0,":",",b=e?",0,1)":")";return{names:{transition:o&&"-webkit-transition"||n&&"MozTransition"||t&&"OTransition"||s&&"msTransition"||"transition",transform:o&&"-webkit-transform"||n&&"MozTransform"||t&&"OTransform"||s&&"msTransform"||"transform",transformName:o&&"-webkit-transform"||n&&"-moz-transform"||t&&"-o-transform"||s&&"-ms-transform"||"transform",origin:o&&"-webkit-transform-origin"||n&&"MozTransformOrigin"||t&&"OTransformOrigin"||s&&"msTransformOrigin"||"transformOrigin",endEvent:o&&"webkitTransitionEnd"||n&&"transitionend"||t&&"oTransitionEnd"||s&&"MSTransitionEnd"||"transitionend"},translate:function(r,i){return a+r+"px,"+i+"px"+m},scale:function(r){return c+r+","+r+l},rotate:function(r){return p+r+"deg)"},matrix:function(r){return u+r.xx+","+r.xy+h+r.yx+","+r.yy+x+r.dx.toFixed(10)+(n?"px,":",")+r.dy.toFixed(10)+(n?"px":"")+b},getScaleFromMatrix:function(r){if(!r)return 1;r=r.toLowerCase();var i=r.indexOf("matrix3d")>-1?"matrix3d(":"matrix(";return Number(r.substring(i.length,r.indexOf(",")))}}},r("extend-esri")&&(i.isiPhone=r("esri-iphone"),i.isAndroid=r("esri-android"),i.isFennec=r("esri-fennec"),i.isBlackBerry=r("esri-blackberry"),i.isTouchEnabled=r("esri-touch"),i.isPointerEnabled=r("esri-pointer"),i._hasCors=r("esri-cors"),i._hasFileUpload=r("esri-file-upload"),i._hasTransforms=r("esri-transforms"),i._hasTransitions=r("esri-transitions"),i._has3DTransforms=r("esri-transforms3d")),r});