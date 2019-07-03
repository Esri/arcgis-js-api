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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","./RegExpUtil"],function(e,o){function n(){console.log("------------------------------Testing JsonXmlTypedConverter.js------------------------------");var e={type:"uniqueValue",field1:"SubtypeCD",fieldDelimiter:", ",defaultSymbol:{type:"esriSLS",style:"esriSLSSolid",color:[130,130,130,255],width:1},defaultLabel:"<Other values>",uniqueValueInfos:[{value:"1",label:"Duct Bank",description:"Duct Bank description",symbol:{type:"esriSLS",style:"esriSLSDash",color:[76,0,163,255],width:1}},{value:"2",label:"Trench",description:"Trench description",symbol:{type:"esriSLS",style:"esriSLSDot",color:[115,76,0,255],width:1}}],rotationType:"geographic",rotationExpression:"[Rotation] * 2"},o=new r;e=JSON.parse(JSON.stringify(e)),console.log(JSON.stringify(e,void 0,4));var n=o.parseJson(e);console.log(n);var t=o.parseXml(n);console.log(JSON.stringify(t,void 0,4));var i=o.parseJson(t);console.log(i),console.log("Compare JSON1 and JSON2: "+(JSON.stringify(e)===JSON.stringify(t))),console.log("Compare XML1 and XML2: "+(n===i)),console.log("------------------------------Testing JsonXmlTypedConverter.js------------------------------")}var r=e(null,{parseJson:function(e,n){function r(e,o){a+="<"+o+' type="object">';for(var n in e)t(e[n],n);a+="</"+o+">"}function t(e,n){"string"==typeof e?a+="<"+n+' type="string">'+o.encodeXML(e,!1)+"</"+n+">":"number"==typeof e?a+="<"+n+' type="number">'+e+"</"+n+">":"boolean"==typeof e?a+="<"+n+' type="boolean">'+e+"</"+n+">":Array.isArray(e)?i(e,n):e&&"object"==typeof e&&r(e,n)}function i(e,o){a+="<"+o+' type="array">',e.forEach(function(e){t(e,"item")}),a+="</"+o+">"}var l=n&&n.rootName||"root",s=n&&n.addDocumentOptions,a="";return s&&(a+='<?xml version="1.0" encoding="utf-8"?>'),r(e,l),a=decodeURIComponent(encodeURIComponent(a).replace("%19",""))},parseXml:function(e){function n(e){if(!e.attributes)return null;for(var o=0;o<e.attributes.length;o++){var n=e.attributes[o];if("type"===n.name)return n.value}return null}function r(e,o){if(o.childNodes)for(var n=0,r=o.childNodes.length;n<r;n++){var i=o.childNodes[n],l=t(i);void 0!==l&&(e[i.nodeName]=l)}return e}function t(e){var t=n(e);if(e.nodeName&&t)switch(t){case"string":return e.childNodes[0]?o.decodeXML(e.childNodes[0].nodeValue):"";case"number":return Number(e.childNodes[0].nodeValue);case"boolean":return"true"===e.childNodes[0].nodeValue;case"object":return r({},e);case"array":return i([],e)}}function i(e,o){if(o.childNodes)for(var n=0,r=o.childNodes.length;n<r;n++){var i=o.childNodes[n];e[n]=t(i)}return e}for(var l,s=(new DOMParser).parseFromString(e,"text/xml"),a={},c=s.childNodes,d=0;d<c.length;d++)if(1===c[d].nodeType){l=c[d];break}return l&&r(a,l),a}}),t=r();return t.runTest=n,t});