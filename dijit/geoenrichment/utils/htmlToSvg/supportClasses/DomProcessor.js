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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/dom-construct","./text/ReplaceUtil"],function(e,n){var i=/^ /,t=/ $/,r={_tempNode:null,cleanUp:function(){this._tempNode&&e.destroy(this._tempNode),this._tempNode=null},replaceTextWithSpans:function(n,i){if(n.childNodes.length<2){if(1===n.childNodes.length){var t=n.childNodes[0];if("#text"===t.nodeName){var s=r._provideSpansToPreserveNBSPs(t);s&&n.innerHTML!==s&&(n.innerHTML=s)}}}else{for(var o=[];n.childNodes.length;)o.push(n.removeChild(n.childNodes[0]));o.forEach(function(i){if("#text"===i.nodeName){var t=r._provideSpansToPreserveNBSPs(i,!1);if(t){var s=e.create("span",{innerHTML:t});if(1===s.childNodes.length)e.place(s,n);else for(;s.childNodes.length;)n.appendChild(s.removeChild(s.childNodes[0]))}}else e.place(i,n)})}this._processWhiteSpacesInSpans(n)},_provideSpansToPreserveNBSPs:function(e,i){var t=this._getDisplayedText(e);return t.trim()?function(e){var n=!1;return e=e.replace(/([^;])(&nbsp;)([^&])/g,"$1 $3"),-1!==e.indexOf("&nbsp;")&&(e=e.split("&nbsp;").map(function(e){return e?(n=!0,"<span>"+e+"</span>"):e}).join("&nbsp;")),n&&(e=e.replace(/((&nbsp;)+)/g,"<span>$1</span>")),e}(t):i?n.removeReturns(t):null},_getDisplayedText:function(n){this._tempNode=this._tempNode||e.create("div",null,document.body);var i;return n.parentNode?i=n.parentNode.innerHTML:(this._tempNode.appendChild(n),i=n.parentNode.innerHTML,this._tempNode.removeChild(n)),i||""},_processWhiteSpacesInSpans:function(n){for(var r=0;r<n.childNodes.length;r++){var s=n.childNodes[r-1],o=n.childNodes[r];if(s&&"SPAN"===s.nodeName&&"SPAN"===o.nodeName){if(!s.innerHTML.trim()&&!o.innerHTML.trim())continue;if(!s.innerHTML.trim()&&i.test(o.innerHTML)){o.innerHTML=o.innerHTML.substr(1);continue}if(t.test(s.innerHTML)&&!o.innerHTML.trim()){s.innerHTML=s.innerHTML.substr(0,s.innerHTML.length-1);continue}if(!t.test(s.innerHTML)&&i.test(o.innerHTML)){o.innerHTML=o.innerHTML.substr(1),e.create("span",{innerHTML:" "},s,"after"),r++;continue}if(t.test(s.innerHTML)&&!i.test(o.innerHTML)){s.innerHTML=s.innerHTML.substr(0,s.innerHTML.length-1),e.create("span",{innerHTML:" "},s,"after"),r++;continue}}}}};return r});