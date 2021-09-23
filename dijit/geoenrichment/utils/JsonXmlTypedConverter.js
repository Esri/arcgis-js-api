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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","./RegExpUtil"],(function(e,r){return e(null,{parseJson:function(e,n){var o=n&&n.rootName||"root",t=n&&n.addDocumentOptions,a="";function i(e,n){var o;"string"==typeof e?a+="<"+n+' type="string">'+r.encodeXML(e,!1)+"</"+n+">":"number"==typeof e?a+="<"+n+' type="number">'+e+"</"+n+">":"boolean"==typeof e?a+="<"+n+' type="boolean">'+e+"</"+n+">":Array.isArray(e)?(a+="<"+(o=n)+' type="array">',e.forEach((function(e){i(e,"item")})),a+="</"+o+">"):e&&"object"==typeof e&&function(e,r){for(var n in a+="<"+r+' type="object">',e)i(e[n],n);a+="</"+r+">"}(e,n)}return t&&(a+='<?xml version="1.0" encoding="utf-8"?>'),i(e,o),a=decodeURIComponent(encodeURIComponent(a).replace("%19",""))},parseXml:function(e){var n;function o(e){if(!e.attributes)return null;for(var r=0;r<e.attributes.length;r++){var n=e.attributes[r];if("type"===n.name)return n.value}return null}function t(e,r){if(r.childNodes)for(var n=0,o=r.childNodes.length;n<o;n++){var t=r.childNodes[n],i=a(t);void 0!==i&&(e[t.nodeName]=i)}return e}function a(e){var n=o(e);if(e.nodeName&&n)switch(n){case"string":return e.childNodes[0]?r.decodeXML(e.childNodes[0].nodeValue):"";case"number":return Number(e.childNodes[0].nodeValue);case"boolean":return"true"===e.childNodes[0].nodeValue;case"object":return t({},e);case"array":return i([],e)}}function i(e,r){if(r.childNodes)for(var n=0,o=r.childNodes.length;n<o;n++){var t=r.childNodes[n];e[n]=a(t)}return e}for(var d,c=(new DOMParser).parseFromString(e,"text/xml").childNodes,u=0;u<c.length;u++)if(1===c[u].nodeType){d=c[u];break}if(d){var l=o(d);"object"===l?t(n={},d):"array"===l&&i(n=[],d)}return n}})()}));