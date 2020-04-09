// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./byteStreamUtils"],(function(e,t,r){return function(){function e(){}return Object.defineProperty(e,"supportedVersions",{get:function(){return[5]},enumerable:!0,configurable:!0}),e.parse=function(e){var t=new DataView(e),n=3&t.getUint8(0);if(3!==n)return{header:{version:n},recordSet:null};var i,a=t.getUint32(4,!0),o=t.getUint16(8,!0),s=t.getUint16(10,!0),u={version:n,recordCount:a,headerByteCount:o,recordByteCount:s},l=32,f=[],p=[];if(3===n){for(;13!==t.getUint8(l);)i=String.fromCharCode(t.getUint8(l+11)).trim(),f.push({name:r.bytesToUTF8(new Uint8Array(e,l,11)),type:i,typeName:["String","Date","Double","Boolean","String","Integer"][["C","D","F","L","M","N"].indexOf(i)],length:t.getUint8(l+16)}),l+=32;if(l+=1,f.length>0)for(var g=function(){var n=[];32===t.getUint8(l)?(l+=1,f.forEach((function(t){if("C"===t.type)n.push(r.bytesToUTF8(new Uint8Array(e,l,t.length)).trim());else if("N"===t.type)n.push(parseInt(String.fromCharCode.apply(null,new Uint8Array(e,l,t.length)).trim(),10));else if("F"===t.type)n.push(parseFloat(String.fromCharCode.apply(null,new Uint8Array(e,l,t.length)).trim()));else if("D"===t.type){var i=String.fromCharCode.apply(null,new Uint8Array(e,l,t.length)).trim();n.push(new Date(parseInt(i.substring(0,4),10),parseInt(i.substring(4,6),10)-1,parseInt(i.substring(6,8),10)))}l+=t.length})),p.push(n)):l+=s};p.length<a&&e.byteLength-l>s;)g()}var d=function(e){var t=e.fields,r=e.records,n=t.some((function(e){return"oid"===e.name.toLowerCase()}))?"OBJECTID":"OID",i=[{name:n,type:"esriFieldTypeOID",alias:"OID"}].concat(t.map((function(e){return{name:e.name,type:"esriFieldType"+e.typeName,alias:e.name}}))),a=i.map((function(e){return e.name})),o=[],s=0,u=0;return r.forEach((function(e){var t={};for(t[n]=s++,u=1;u<a.length;u++)t[a[u]]=e[u-1];o.push({attributes:t})})),{displayFieldName:"",fields:i,features:o}}({fields:f,records:p});return{header:u,fields:f,records:p,recordSet:d}},e}()}));