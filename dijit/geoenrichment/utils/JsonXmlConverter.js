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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","./RegExpUtil"],function(e,n){function t(e,n,t,r){return u(t,r)+"<"+e+(n?o(n):"")+">"+(r?"\n":"")}function r(e,n,t){return u(n,t)+"</"+e+">"+(t?"\n":"")}function i(e,n,t,r){return u(t,r)+"<"+e+(n?o(n):"")+" />"+(r?"\n":"")}function a(e,t,r){return e=n.encodeXML(e,!1),u(t,r)+e+(r?"\n":"")}function o(e){var t="";for(var r in e){var i=e[r];Array.isArray(i)&&(i=i.join(";")),void 0!==i&&null!==i&&(t+=" "+r+'="'+n.encodeXML(i,!0)+'"')}return t}function u(e,n){if(!n)return"";for(var t="",r=0;r<e;r++)t+="     ";return t}var s=e(null,{parseJson:function(e,n){function o(e,n){if(e.text||"#text"==e.name)return void(f+=a(e.text,n,s));if(e.name){if(!e.tags||!e.tags.length)return void(f+=i(e.name,e.attributes,n,s));f+=t(e.name,e.attributes,n,s),e.tags&&e.tags.forEach(function(e){o(e,n+1)}),f+=r(e.name,n,s)}}var u=n&&n.addDocumentOptions,s=n&&n.prettify,f="";return u&&(f+='<?xml version="1.0" encoding="utf-8"?>'),o(e,0),f=decodeURIComponent(encodeURIComponent(f).replace("%19",""))},parseXml:function(e,t){function r(e){return"#text"!=e.nodeName||(o?e.nodeValue.trim():e.nodeValue)}function i(e,o){if(e.name=o.nodeName,t.saveInnerHTML&&(e.innerHTML=o.innerHTML),o.attributes&&o.attributes.length){e.attributes={};for(var u=0;u<o.attributes.length;u++){var s=o.attributes[u],f=s.value;if(!0===f||"true"===f)f=!0;else if(!1===f||"false"===f)f=!1;else if(a&&f){var c=Number(f);isNaN(c)||(f=c)}e.attributes[s.nodeName]=f}}if(o.childNodes&&o.childNodes.length){e.tags=[];for(var d=0;d<o.childNodes.length;d++){var l=o.childNodes[d];if(r(l)){var m={};e.tags.push(m),i(m,l)}}}else"#text"==o.nodeName&&(e.text=n.decodeXML(o.nodeValue))}t=t||{};var a=t.parseNumbers,o=t.ignoreWhiteSpacedTextNodes;o=void 0===o||o;for(var u,s=(new DOMParser).parseFromString(e,"text/xml"),f={},c=s.childNodes,d=0;d<c.length;d++)if(1===c[d].nodeType){u=c[d];break}return u&&i(f,u),f},queryJson:function(e,n,t){function r(e,a){e.tags&&e.tags.forEach(function(e){(n.test?n.test(e.name):e.name===n)&&i.push(e),t&&0==a||r(e,a+1)})}var i=[];return r(e,0),i},getInnerHTML:function(e){return e.innerHTML?e.innerHTML.trim():this.parseJson(e).replace(/^<[^<]*>/,"").replace(/<\/[^<]*>$/,"").trim()},_IS_RICH_RE:/<.+>.*<\/.+>|<br\s*\/>|<\/br>/,_UNRICH_RE:/<.{1,3}>|<\/.{1,3}>|<br\s*\/>|<\/br>/g,isRichText:function(e){var n=String(e);return n&&this._IS_RICH_RE.test(n)},unrichHTML:function(e){return e?(e=n.decodeXML(String(e).trim()).replace(this._UNRICH_RE,""),0===e.indexOf("<")&&-1!==e.indexOf(">")&&(e=""),e):""}});return s()});