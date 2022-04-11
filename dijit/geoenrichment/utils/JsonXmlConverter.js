// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","./RegExpUtil"],(function(e,n){function t(e){var t="";for(var r in e){var a=e[r];Array.isArray(a)&&(a=a.join(";")),null==a||"number"==typeof a&&isNaN(a)||(t+=" "+r+'="'+n.encodeXML(a,!0)+'"')}return t}function r(e,n){if(!n)return"";for(var t="",r=0;r<e;r++)t+="     ";return t}return e(null,{parseJson:function(e,a){var i=a&&a.addDocumentOptions,o=a&&a.prettify,u="";return i&&(u+='<?xml version="1.0" encoding="utf-8"?>'),function e(a,i){a.text||"#text"===a.name?u+=function(e,t,a){return e=n.encodeXML(e,!1),r(t,a)+e+(a?"\n":"")}(a.text,i,o):a.name&&(a.tags&&a.tags.length?(u+=function(e,n,a,i){return r(a,i)+"<"+e+(n?t(n):"")+">"+(i?"\n":"")}(a.name,a.attributes,i,o),a.tags&&a.tags.forEach((function(n){e(n,i+1)})),u+=function(e,n,t){return r(n,t)+"</"+e+">"+(t?"\n":"")}(a.name,i,o)):u+=function(e,n,a,i){return r(a,i)+"<"+e+(n?t(n):"")+" />"+(i?"\n":"")}(a.name,a.attributes,i,o))}(e,0),u=decodeURIComponent(encodeURIComponent(u).replace("%19",""))},parseXml:function(e,t){var r=(t=t||{}).parseNumbers,a=t.ignoreWhiteSpacedTextNodes;function i(e){return"#text"!==e.nodeName||(a?e.nodeValue.trim():e.nodeValue)}a=void 0===a||a;var o={};for(var u,s=(new DOMParser).parseFromString(e,"text/xml").childNodes,c=0;c<s.length;c++)if(1===s[c].nodeType){u=s[c];break}return u&&function e(a,o){if(a.name=o.nodeName,t.saveInnerHTML&&(a.innerHTML=o.innerHTML),o.attributes&&o.attributes.length){a.attributes={};for(var u=0;u<o.attributes.length;u++){var s=o.attributes[u],c=s.value;if(!0===c||"true"===c)c=!0;else if(!1===c||"false"===c)c=!1;else if(r&&c){var f=Number(c);isNaN(f)||(c=f)}a.attributes[s.nodeName]=c}}if(o.childNodes&&o.childNodes.length){a.tags=[];for(var d=0;d<o.childNodes.length;d++){var l=o.childNodes[d];if(i(l)){var m={};a.tags.push(m),e(m,l)}}}else"#text"===o.nodeName&&(delete a.name,a.text=n.decodeXML(o.nodeValue))}(o,u),o},queryTopJson:function(e,n){return this.queryJson(e,n,!0)},queryJson:function(e,n,t){var r=[];return function e(a,i){a.tags&&a.tags.forEach((function(a){(n.test?n.test(a.name):a.name===n)&&r.push(a),t&&0===i||e(a,i+1)}))}(e,0),r},traverseJson:function(e,n){var t=!1;!function e(r){t||(!0!==n(r)?r.tags&&r.tags.forEach(e):t=!0)}(e)},getInnerHTML:function(e){return e.innerHTML?e.innerHTML.trim():this.parseJson(e).replace(/^<[^<]*>/,"").replace(/<\/[^<]*>$/,"").trim()},_IS_RICH_RE:/<.+>.*<\/.+>|<br\s*\/>|<\/br>/,_UNRICH_RE:/<.*?>/g,isRichText:function(e){var n=String(e);return n&&this._IS_RICH_RE.test(n)},unrichHTML:function(e){return e?(0===(e=n.decodeXML(String(e).trim()).replace(this._UNRICH_RE,"")).indexOf("<")&&-1!==e.indexOf(">")&&(e=""),e):""}})()}));