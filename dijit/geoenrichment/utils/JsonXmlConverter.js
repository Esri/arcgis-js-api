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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare"],function(e){function t(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n(e){return t(e).replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function r(e,r){return void 0!==e?r===!1?t(e):n(e):""}function i(e){return void 0!==e?String(e).replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&"):""}function a(e,t,n,r){return f(n,r)+"<"+e+(t?c(t):"")+">"}function o(e,t,n){return f(t,n)+"</"+e+">"+(n?"\n":"")}function u(e,t,n,r){return f(n,r)+"<"+e+(t?c(t):"")+" />"+(r?"\n":"")}function s(e,t,n){return e=r(e,!1),f(t,n)+e+(n?"\n":"")}function c(e){var t="";for(var n in e){var i=e[n];Array.isArray(i)&&(i=i.join(";")),void 0!==i&&(t+=" "+n+'="'+r(i)+'"')}return t}function f(e,t){if(!t)return"";for(var n="",r=0;e>r;r++)n+="     ";return n}var l=e(null,{parseJson:function(e,t){function n(e,t){if(e.text||"#text"==e.name)return void(c+=s(e.text,t,i));if(e.name){if(!e.tags||!e.tags.length)return void(c+=u(e.name,e.attributes,t,i));c+=a(e.name,e.attributes,t,i),e.tags&&e.tags.forEach(function(e){n(e,t+1)}),c+=o(e.name,t,i)}}var r=t&&t.addDocumentOptions,i=t&&t.prettify,c="";return r&&(c+='<?xml version="1.0" encoding="utf-8"?>'),n(e,0),c=decodeURIComponent(encodeURIComponent(c).replace("%19",""))},parseXml:function(e,t){function n(e){return"#text"!=e.nodeName||(o?e.nodeValue.trim():e.nodeValue)}function r(e,t){if(e.name=t.nodeName,e.innerHTML=t.innerHTML,t.attributes&&t.attributes.length){e.attributes={};for(var o=0;o<t.attributes.length;o++){var u=t.attributes[o],s=u.value;if(s===!0||"true"===s)s=!0;else if(s===!1||"false"===s)s=!1;else if(a&&s){var c=Number(s);isNaN(c)||(s=c)}e.attributes[u.nodeName]=s}}if(t.childNodes&&t.childNodes.length){e.tags=[];for(var f=0;f<t.childNodes.length;f++){var l=t.childNodes[f];if(n(l)){var d={};e.tags.push(d),r(d,l)}}}else"#text"==t.nodeName&&(e.text=i(t.nodeValue))}var a=t&&t.parseNumbers,o=t&&t.ignoreWhiteSpacedTextNodes;o=void 0===o?!0:o;var u=(new DOMParser).parseFromString(e,"text/xml"),s={};return r(s,u.childNodes[0]),s},queryJson:function(e,t,n){function r(e,a){e.tags&&e.tags.forEach(function(e){(t.test?t.test(e.name):e.name==t)&&i.push(e),n&&0==a||r(e,a+1)})}var i=[];return r(e,0),i},getInnerHTML:function(e){return e.innerHTML?e.innerHTML.trim():this.parseJson(e).replace(/^<[^<]*>/,"").replace(/<\/[^<]*>$/,"").trim()},_IS_RICH_RE:/<.+>.*<\/.+>|<br\s*\/>|<\/br>/,_UNRICH_RE:/<.{1,3}>|<\/.{1,3}>|<br\s*\/>|<\/br>/g,isRichText:function(e){var t=String(e);return t&&this._IS_RICH_RE.test(t)},unrichHTML:function(e){return e?(e=i(String(e).trim()).replace(this._UNRICH_RE,""),0===e.indexOf("<")&&-1!==e.indexOf(">")&&(e=""),e):""}});return l()});