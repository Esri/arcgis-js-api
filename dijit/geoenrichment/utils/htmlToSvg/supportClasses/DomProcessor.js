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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/dom-construct","./text/ReplaceUtil"],function(e,n){var i=/^ /,r=/ $/,t={_tempNode:e.create("div",null,document.body),replaceTextWithSpans:function(o){function d(e,i){var r=function(){var n;return e.parentNode?n=e.parentNode.innerHTML:(t._tempNode.appendChild(e),n=e.parentNode.innerHTML,t._tempNode.removeChild(e)),n||""}();return r.trim()?function(e){var n=!1;return e=e.replace(/([^;])(&nbsp;)([^&])/g,"$1 $3"),-1!==e.indexOf("&nbsp;")&&(e=e.split("&nbsp;").map(function(e){return e?(n=!0,"<span>"+e+"</span>"):e}).join("&nbsp;")),n&&(e=e.replace(/((&nbsp;)+)/g,"<span>$1</span>")),e}(r):i?n.removeReturns(r):null}if(o.childNodes.length<2&&"TD"!==o.nodeName){if(1===o.childNodes.length){var s=o.childNodes[0];if("#text"===s.nodeName){var a=d(s);a&&o.innerHTML!==a&&(o.innerHTML=a)}}}else{for(var l=[];o.childNodes.length;)l.push(o.removeChild(o.childNodes[0]));l.forEach(function(n){if("#text"===n.nodeName){var i=d(n,"TR"!==o.nodeName);if(i){var r=e.create("span",{innerHTML:i});if(1===r.childNodes.length)e.place(r,o);else for(;r.childNodes.length;)o.appendChild(r.removeChild(r.childNodes[0]))}}else e.place(n,o)});for(var c=0;c<o.childNodes.length;c++){var p=o.childNodes[c-1],T=o.childNodes[c];if(p&&"SPAN"===p.nodeName&&"SPAN"===T.nodeName){if(!p.innerHTML.trim()&&!T.innerHTML.trim())continue;if(!p.innerHTML.trim()&&i.test(T.innerHTML)){T.innerHTML=T.innerHTML.substr(1);continue}if(r.test(p.innerHTML)&&!T.innerHTML.trim()){p.innerHTML=p.innerHTML.substr(0,p.innerHTML.length-1);continue}if(!r.test(p.innerHTML)&&i.test(T.innerHTML)){T.innerHTML=T.innerHTML.substr(1),e.create("span",{innerHTML:" "},p,"after"),c++;continue}if(r.test(p.innerHTML)&&!i.test(T.innerHTML)){p.innerHTML=p.innerHTML.substr(0,p.innerHTML.length-1),e.create("span",{innerHTML:" "},p,"after"),c++;continue}}}}}};return t});