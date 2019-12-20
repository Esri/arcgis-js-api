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

define(["dojo/_base/declare","./RegExpUtil"],function(e,o){function r(){console.log("------------------------------Testing JsonXmlTypedConverter.js------------------------------");var e={type:"uniqueValue",field1:"SubtypeCD",fieldDelimiter:", ",defaultSymbol:{type:"esriSLS",style:"esriSLSSolid",color:[130,130,130,255],width:1},defaultLabel:"<Other values>",uniqueValueInfos:[{value:"1",label:"Duct Bank",description:"Duct Bank description",symbol:{type:"esriSLS",style:"esriSLSDash",color:[76,0,163,255],width:1}},{value:"2",label:"Trench",description:"Trench description",symbol:{type:"esriSLS",style:"esriSLSDot",color:[115,76,0,255],width:1}}],rotationType:"geographic",rotationExpression:"[Rotation] * 2"},o=new n;e=JSON.parse(JSON.stringify(e)),console.log(JSON.stringify(e,void 0,4));var r=o.parseJson(e);console.log(r);var t=o.parseXml(r);console.log(JSON.stringify(t,void 0,4));var i=o.parseJson(t);console.log(i),console.log("Compare JSON1 and JSON2: "+(JSON.stringify(e)===JSON.stringify(t))),console.log("Compare XML1 and XML2: "+(r===i)),console.log("------------------------------Testing JsonXmlTypedConverter.js------------------------------")}var n=e(null,{parseJson:function(e,r){function n(e,o){s+="<"+o+' type="object">';for(var r in e)t(e[r],r);s+="</"+o+">"}function t(e,r){"string"==typeof e?s+="<"+r+' type="string">'+o.encodeXML(e,!1)+"</"+r+">":"number"==typeof e?s+="<"+r+' type="number">'+e+"</"+r+">":"boolean"==typeof e?s+="<"+r+' type="boolean">'+e+"</"+r+">":Array.isArray(e)?i(e,r):e&&"object"==typeof e&&n(e,r)}function i(e,o){s+="<"+o+' type="array">',e.forEach(function(e){t(e,"item")}),s+="</"+o+">"}var a=r&&r.rootName||"root",l=r&&r.addDocumentOptions,s="";return l&&(s+='<?xml version="1.0" encoding="utf-8"?>'),t(e,a),s=decodeURIComponent(encodeURIComponent(s).replace("%19",""))},parseXml:function(e){function r(e){if(!e.attributes)return null;for(var o=0;o<e.attributes.length;o++){var r=e.attributes[o];if("type"===r.name)return r.value}return null}function n(e,o){if(o.childNodes)for(var r=0,n=o.childNodes.length;r<n;r++){var i=o.childNodes[r],a=t(i);void 0!==a&&(e[i.nodeName]=a)}return e}function t(e){var t=r(e);if(e.nodeName&&t)switch(t){case"string":return e.childNodes[0]?o.decodeXML(e.childNodes[0].nodeValue):"";case"number":return Number(e.childNodes[0].nodeValue);case"boolean":return"true"===e.childNodes[0].nodeValue;case"object":return n({},e);case"array":return i([],e)}}function i(e,o){if(o.childNodes)for(var r=0,n=o.childNodes.length;r<n;r++){var i=o.childNodes[r];e[r]=t(i)}return e}for(var a,l,s=(new DOMParser).parseFromString(e,"text/xml"),c=s.childNodes,d=0;d<c.length;d++)if(1===c[d].nodeType){l=c[d];break}if(l){var u=r(l);"object"===u?n(a={},l):"array"===u&&i(a=[],l)}return a}}),t=n();return t.runTest=r,t});