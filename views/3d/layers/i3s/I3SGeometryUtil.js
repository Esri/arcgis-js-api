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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports"],function(r,e){function t(r,e,t,c){void 0===c&&(c=[]);var y=r.params.vertexAttributes,d=y.position.count;if(!o(t[0].stride))throw u("Layout stride must use "+Uint32Array.BYTES_PER_ELEMENT+"-byte words");var l=t[0].stride/Uint32Array.BYTES_PER_ELEMENT,v=new Uint32Array(l*d);t=t.slice(0).sort(function(r,e){return r.offset-e.offset});for(var T=function(r){var t=y[r.name],l=i(r.type),T=void 0,_=!1;if(null==t){var U=c.filter(function(e){var t=e.name;return t===r.name})[0];if(!U)throw u("Geometry definition is missing attribute");t={valueType:E(r.type),byteOffset:0,count:d,valuesPerElement:r.count};for(var w=0;w<f.length;w++)f[w]=U.byteValue;T=f.buffer,_=!0}else T=e;if(E(r.type)!==t.valueType)throw u("Geometry definition type must match attribute type");if(!s(t.byteOffset)||!s(r.offset))throw u(r.name+" offset must use "+Uint32Array.BYTES_PER_ELEMENT+"-byte words");if(!o(t.valuesPerElement*l.BYTES_PER_ELEMENT)||!o(r.count*l.BYTES_PER_ELEMENT))throw u(r.name+" data must use "+Uint32Array.BYTES_PER_ELEMENT+"-byte words");var b=new Uint32Array(T),A=t.byteOffset/Uint32Array.BYTES_PER_ELEMENT,h=t.valuesPerElement*l.BYTES_PER_ELEMENT/Uint32Array.BYTES_PER_ELEMENT,m=r.offset/Uint32Array.BYTES_PER_ELEMENT,P=r.stride/Uint32Array.BYTES_PER_ELEMENT;_?a(b,h,v,m,P,d):n(b,A,h,v,m,P,d)},_=0,U=t;_<U.length;_++){var w=U[_];T(w)}return v.buffer}function n(r,e,t,n,a,i,E){switch(t){case 1:for(var s=0;E>s;s++)n[a]=r[e],e+=1,a+=i;break;case 2:for(var s=0;E>s;s++)n[a]=r[e],n[a+1]=r[e+1],e+=2,a+=i;break;case 3:for(var s=0;E>s;s++)n[a]=r[e],n[a+1]=r[e+1],n[a+2]=r[e+2],e+=3,a+=i;break;case 4:for(var s=0;E>s;s++)n[a]=r[e],n[a+1]=r[e+1],n[a+2]=r[e+2],n[a+3]=r[e+3],e+=4,a+=i;break;default:throw u("Unhandled stride size "+t)}}function a(r,e,t,n,a,i){switch(e){case 1:for(var E=0;i>E;E++)t[n]=r[0],n+=a;break;case 2:for(var E=0;i>E;E++)t[n]=r[0],t[n+1]=r[0],n+=a;break;case 3:for(var E=0;i>E;E++)t[n]=r[0],t[n+1]=r[0],t[n+2]=r[0],n+=a;break;case 4:for(var E=0;i>E;E++)t[n]=r[0],t[n+1]=r[0],t[n+2]=r[0],t[n+3]=r[0],n+=a;break;default:throw u("Unhandled stride size "+e)}}function i(r){switch(r){case 5120:return Int8Array;case 5126:return Float32Array;case 5124:return Int32Array;case 5122:return Int16Array;case 5121:return Uint8Array;case 5125:return Uint32Array;case 5123:return Uint16Array}throw new Error("Unhandled data type: "+r)}function E(r){switch(r){case 5120:return"Int8";case 5126:return"Float32";case 5124:return"Int32";case 5122:return"Int16";case 5121:return"UInt8";case 5125:return"UInt32";case 5123:return"UInt16"}throw new Error("Unhandled data type: "+r)}function s(r){return r%Uint32Array.BYTES_PER_ELEMENT===0}function o(r){return r>0&&r%Uint32Array.BYTES_PER_ELEMENT===0}function u(r){return new Error("I3SGeometryUtil processing failed: "+r)}Object.defineProperty(e,"__esModule",{value:!0});var f=new Uint8Array(64);e.interleaveGeometryBuffer=t});