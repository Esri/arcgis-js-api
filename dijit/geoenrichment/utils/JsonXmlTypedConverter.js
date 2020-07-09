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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","./RegExpUtil"],(function(e,o){var r=e(null,{parseJson:function(e,r){var n=r&&r.rootName||"root",t=r&&r.addDocumentOptions,i="";function a(e,r){var n;"string"==typeof e?i+="<"+r+' type="string">'+o.encodeXML(e,!1)+"</"+r+">":"number"==typeof e?i+="<"+r+' type="number">'+e+"</"+r+">":"boolean"==typeof e?i+="<"+r+' type="boolean">'+e+"</"+r+">":Array.isArray(e)?(i+="<"+(n=r)+' type="array">',e.forEach((function(e){a(e,"item")})),i+="</"+n+">"):e&&"object"==typeof e&&function(e,o){for(var r in i+="<"+o+' type="object">',e)a(e[r],r);i+="</"+o+">"}(e,r)}return t&&(i+='<?xml version="1.0" encoding="utf-8"?>'),a(e,n),i=decodeURIComponent(encodeURIComponent(i).replace("%19",""))},parseXml:function(e){var r;function n(e){if(!e.attributes)return null;for(var o=0;o<e.attributes.length;o++){var r=e.attributes[o];if("type"===r.name)return r.value}return null}function t(e,o){if(o.childNodes)for(var r=0,n=o.childNodes.length;r<n;r++){var t=o.childNodes[r],a=i(t);void 0!==a&&(e[t.nodeName]=a)}return e}function i(e){var r=n(e);if(e.nodeName&&r)switch(r){case"string":return e.childNodes[0]?o.decodeXML(e.childNodes[0].nodeValue):"";case"number":return Number(e.childNodes[0].nodeValue);case"boolean":return"true"===e.childNodes[0].nodeValue;case"object":return t({},e);case"array":return a([],e)}}function a(e,o){if(o.childNodes)for(var r=0,n=o.childNodes.length;r<n;r++){var t=o.childNodes[r];e[r]=i(t)}return e}for(var l,s=(new DOMParser).parseFromString(e,"text/xml").childNodes,c=0;c<s.length;c++)if(1===s[c].nodeType){l=s[c];break}if(l){var d=n(l);"object"===d?t(r={},l):"array"===d&&a(r=[],l)}return r}}),n=r();return n.runTest=function(){console.log("------------------------------Testing JsonXmlTypedConverter.js------------------------------");var e={type:"uniqueValue",field1:"SubtypeCD",fieldDelimiter:", ",defaultSymbol:{type:"esriSLS",style:"esriSLSSolid",color:[130,130,130,255],width:1},defaultLabel:"<Other values>",uniqueValueInfos:[{value:"1",label:"Duct Bank",description:"Duct Bank description",symbol:{type:"esriSLS",style:"esriSLSDash",color:[76,0,163,255],width:1}},{value:"2",label:"Trench",description:"Trench description",symbol:{type:"esriSLS",style:"esriSLSDot",color:[115,76,0,255],width:1}}],rotationType:"geographic",rotationExpression:"[Rotation] * 2"},o=new r;e=JSON.parse(JSON.stringify(e)),console.log(JSON.stringify(e,void 0,4));var n=o.parseJson(e);console.log(n);var t=o.parseXml(n);console.log(JSON.stringify(t,void 0,4));var i=o.parseJson(t);console.log(i),console.log("Compare JSON1 and JSON2: "+(JSON.stringify(e)===JSON.stringify(t))),console.log("Compare XML1 and XML2: "+(n===i)),console.log("------------------------------Testing JsonXmlTypedConverter.js------------------------------")},n}));