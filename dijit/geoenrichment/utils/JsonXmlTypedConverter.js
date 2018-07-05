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

define(["dojo/_base/declare","./RegExpUtil"],function(e,r){var n=e(null,{parseJson:function(e,n){function t(e,r){c+="<"+r+' type="object">';for(var n in e)o(e[n],n);c+="</"+r+">"}function o(e,n){"string"==typeof e?c+="<"+n+' type="string">'+r.encodeXML(e,!1)+"</"+n+">":"number"==typeof e?c+="<"+n+' type="number">'+e+"</"+n+">":"boolean"==typeof e?c+="<"+n+' type="boolean">'+e+"</"+n+">":Array.isArray(e)?a(e,n):e&&"object"==typeof e&&t(e,n)}function a(e,r){c+="<"+r+' type="array">',e.forEach(function(e){o(e,"item")}),c+="</"+r+">"}var i=n&&n.rootName||"root",u=n&&n.addDocumentOptions,c="";return u&&(c+='<?xml version="1.0" encoding="utf-8"?>'),t(e,i),c=decodeURIComponent(encodeURIComponent(c).replace("%19",""))},parseXml:function(e){function n(e){if(!e.attributes)return null;for(var r=0;r<e.attributes.length;r++){var n=e.attributes[r];if("type"===n.name)return n.value}return null}function t(e,r){if(r.children)for(var n=0,t=r.children.length;n<t;n++){var a=r.children[n],i=o(a);void 0!==i&&(e[a.nodeName]=i)}return e}function o(e){var o=n(e);if(e.nodeName&&o)switch(o){case"string":return r.decodeXML(e.childNodes[0].nodeValue);case"number":return Number(e.childNodes[0].nodeValue);case"boolean":return"true"===e.childNodes[0].nodeValue;case"object":return t({},e);case"array":return a([],e)}}function a(e,r){if(r.children)for(var n=0,t=r.children.length;n<t;n++){var a=r.children[n];e[n]=o(a)}return e}for(var i,u=(new DOMParser).parseFromString(e,"text/xml"),c={},d=u.childNodes,l=0;l<d.length;l++)if(1===d[l].nodeType){i=d[l];break}return i&&t(c,i),c}});return n()});