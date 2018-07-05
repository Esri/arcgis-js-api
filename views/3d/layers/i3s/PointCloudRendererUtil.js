// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../renderers/PointCloudClassBreaksRenderer","../../../../renderers/PointCloudStretchRenderer","../../../../renderers/PointCloudUniqueValueRenderer","./I3SBinaryReader"],function(e,r,o,n,t,l){function a(e){var r=e.renderer,o=r&&r.type,n=r&&e.renderer.toJSON()||null,t=null,l=!1;"point-cloud-unique-value"===o?t=c(e.attributeStorageInfo,r.field):"point-cloud-stretch"===o?t=c(e.attributeStorageInfo,r.field):"point-cloud-class-breaks"===o?t=c(e.attributeStorageInfo,r.field):"point-cloud-rgb"===o?(t=s(e.attributeStorageInfo,r.field),l=null!=t):(t=s(e.attributeStorageInfo,"RGB"),l=null!=t);var a=null;return r&&r.colorModulation&&(a=c(e.attributeStorageInfo,r.colorModulation.field)),{rendererJSON:n,isRGBRenderer:l,primaryAttribute:t,modulationAttribute:a}}function u(e,r,l,a,u){var i=e.rendererJSON,f=e.isRGBRenderer,d=e.primaryAttribute,s=e.modulationAttribute,c=v(d,r,a,u),b=v(s,l,a,u),p=null,m=null;if(c&&f)p=c;else if(c&&"pointCloudUniqueValueRenderer"===i.type){m=t.fromJSON(i);var y=m.colorUniqueValueInfos;p=new Uint8Array(3*u);for(var S=g(m.fieldTransformType),h=0;h<u;h++)for(var A=S?S(c[h]):c[h],I=A+"",R=0;R<y.length;R++)if(y[R].values.indexOf(I)>=0){p[3*h]=y[R].color.r,p[3*h+1]=y[R].color.g,p[3*h+2]=y[R].color.b;break}}else if(c&&"pointCloudStretchRenderer"===i.type){m=n.fromJSON(i);var C=m.stops;p=new Uint8Array(3*u);for(var S=g(m.fieldTransformType),h=0;h<u;h++){var A=S?S(c[h]):c[h],V=C.length-1;if(A<C[0].value)p[3*h]=C[0].color.r,p[3*h+1]=C[0].color.g,p[3*h+2]=C[0].color.b;else if(A>=C[V].value)p[3*h]=C[V].color.r,p[3*h+1]=C[V].color.g,p[3*h+2]=C[V].color.b;else for(var R=1;R<C.length;R++)if(A<C[R].value){var U=(A-C[R-1].value)/(C[R].value-C[R-1].value);p[3*h]=C[R].color.r*U+C[R-1].color.r*(1-U),p[3*h+1]=C[R].color.g*U+C[R-1].color.g*(1-U),p[3*h+2]=C[R].color.b*U+C[R-1].color.b*(1-U);break}}}else if(c&&"pointCloudClassBreaksRenderer"===i.type){m=o.fromJSON(i);var x=m.colorClassBreakInfos;p=new Uint8Array(3*u);for(var S=g(m.fieldTransformType),h=0;h<u;h++)for(var A=S?S(c[h]):c[h],R=0;R<x.length;R++)if(A>=x[R].minValue&&A<=x[R].maxValue){p[3*h]=x[R].color.r,p[3*h+1]=x[R].color.g,p[3*h+2]=x[R].color.b;break}}else{p=new Uint8Array(3*u);for(var h=0;h<p.length;h++)p[h]=255}if(b&&m&&m.colorModulation)for(var z=m.colorModulation.minValue,B=m.colorModulation.maxValue,h=0;h<u;h++){var A=b[h],O=A>=B?1:A<=z?.3:.3+.7*(A-z)/(B-z);p[3*h]=O*p[3*h],p[3*h+1]=O*p[3*h+1],p[3*h+2]=O*p[3*h+2]}return p}function i(e){var r=e&&e.pointSizeAlgorithm;return r&&"splat"===r.type?r:null}function f(e){var r=e&&e.pointSizeAlgorithm;return r&&"fixed-size"===r.type?r:null}function d(e){var r=e&&e.pointSizeAlgorithm;return!(!r||!r.type)&&"fixed-size"===r.type}function s(e,r){for(var o=0,n=e;o<n.length;o++){var t=n[o];if(t.name===r&&null!=t.attributeValues&&"UInt8"===t.attributeValues.valueType&&3===t.attributeValues.valuesPerElement)return{storageInfo:t,useElevation:!1}}return null}function c(e,r){for(var o=0,n=e;o<n.length;o++){var t=n[o];if(t.name===r){var l="embedded-elevation"===t.encoding;return{storageInfo:l?null:t,useElevation:l}}}return"elevation"===r.toLowerCase()?{storageInfo:null,useElevation:!0}:null}function v(e,r,o,n){if(e&&e.useElevation){for(var t=new Float64Array(n),a=0;a<n;a++)t[a]=o[3*a+2];return t}return e&&r?l.readBinaryAttribute(e.storageInfo,r,n):null}function g(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}Object.defineProperty(r,"__esModule",{value:!0}),r.getRendererInfo=a,r.evaluateRenderer=u,r.getSplatSizeAlgorithm=i,r.getFixedSizeAlgorithm=f,r.rendererUsesFixedSizes=d});