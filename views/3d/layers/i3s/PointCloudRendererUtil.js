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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./I3SBinaryReader","../../../../renderers/PointCloudRenderer"],function(e,r,o,t){function n(e){var r=e.renderer,o=r&&r.type,t=null,n=!1;"point-cloud-unique-value"===o?t=s(e.attributeStorageInfo,r.field):"point-cloud-stretch"===o?t=s(e.attributeStorageInfo,r.field):"point-cloud-class-breaks"===o?t=s(e.attributeStorageInfo,r.field):"point-cloud-rgb"===o?(t=c(e.attributeStorageInfo,r.field),n=null!=t):(t=c(e.attributeStorageInfo,"RGB"),n=null!=t);var l=null;return r&&r.colorModulation&&(l=s(e.attributeStorageInfo,r.colorModulation.field)),{renderer:r,isRGBRenderer:n,primaryAttribute:t,modulationAttribute:l}}function l(e,r,o,t,n){var l=e.renderer,i=e.isRGBRenderer,a=e.primaryAttribute,u=e.modulationAttribute,f=d(a,r,t,n),c=d(u,o,t,n),s=null;if(f&&i)s=f;else if(f&&l&&"point-cloud-unique-value"===l.type){var g=l.colorUniqueValueInfos;s=new Uint8Array(3*n);for(var b=v(l.fieldTransformType),p=0;n>p;p++)for(var m=b?b(f[p]):f[p],y=m+"",S=0;S<g.length;S++)if(g[S].values.indexOf(y)>=0){s[3*p]=g[S].color.r,s[3*p+1]=g[S].color.g,s[3*p+2]=g[S].color.b;break}}else if(f&&l&&"point-cloud-stretch"===l.type){var h=l.stops;s=new Uint8Array(3*n);for(var b=v(l.fieldTransformType),p=0;n>p;p++){var m=b?b(f[p]):f[p],A=h.length-1;if(m<h[0].value)s[3*p]=h[0].color.r,s[3*p+1]=h[0].color.g,s[3*p+2]=h[0].color.b;else if(m>=h[A].value)s[3*p]=h[A].color.r,s[3*p+1]=h[A].color.g,s[3*p+2]=h[A].color.b;else for(var S=1;S<h.length;S++)if(m<h[S].value){var I=(m-h[S-1].value)/(h[S].value-h[S-1].value);s[3*p]=h[S].color.r*I+h[S-1].color.r*(1-I),s[3*p+1]=h[S].color.g*I+h[S-1].color.g*(1-I),s[3*p+2]=h[S].color.b*I+h[S-1].color.b*(1-I);break}}}else if(f&&l&&"point-cloud-class-breaks"===l.type){var z=l.colorClassBreakInfos;s=new Uint8Array(3*n);for(var b=v(l.fieldTransformType),p=0;n>p;p++)for(var m=b?b(f[p]):f[p],S=0;S<z.length;S++)if(m>=z[S].minValue&&m<=z[S].maxValue){s[3*p]=z[S].color.r,s[3*p+1]=z[S].color.g,s[3*p+2]=z[S].color.b;break}}else{s=new Uint8Array(3*n);for(var p=0;p<s.length;p++)s[p]=255}if(c&&l&&l.colorModulation)for(var M=l.colorModulation.minValue,R=l.colorModulation.maxValue,x=.3,p=0;n>p;p++){var m=c[p],V=m>=R?1:M>=m?x:x+(1-x)*(m-M)/(R-M);s[3*p]=V*s[3*p],s[3*p+1]=V*s[3*p+1],s[3*p+2]=V*s[3*p+2]}return s}function i(e){var r=e&&e.pointSizeAlgorithm;return r&&"splat"===r.type?r:null}function a(e){var r=i(e);return r&&null!=r.minSize?r.minSize:t.defaultMinSize}function u(e){var r=e&&e.pointSizeAlgorithm;return r&&"fixed-size"===r.type?r:null}function f(e){var r=e&&e.pointSizeAlgorithm;return r&&r.type?"fixed-size"===r.type:!1}function c(e,r){for(var o=0,t=e;o<t.length;o++){var n=t[o];if(n.name===r&&null!=n.attributeValues&&"UInt8"===n.attributeValues.valueType&&3===n.attributeValues.valuesPerElement)return{storageInfo:n,useElevation:!1}}return null}function s(e,r){for(var o=0,t=e;o<t.length;o++){var n=t[o];if(n.name===r){var l="embedded-elevation"===n.encoding;return{storageInfo:l?null:n,useElevation:l}}}return"elevation"===r.toLowerCase()?{storageInfo:null,useElevation:!0}:null}function d(e,r,t,n){if(e&&e.useElevation){for(var l=new Float64Array(n),i=0;n>i;i++)l[i]=t[3*i+2];return l}return e&&r?o.readBinaryAttribute(e.storageInfo,r,n):null}function v(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}Object.defineProperty(r,"__esModule",{value:!0}),r.getRendererInfo=n,r.evaluateRenderer=l,r.getSplatSizeAlgorithm=i,r.getMinSize=a,r.getFixedSizeAlgorithm=u,r.rendererUsesFixedSizes=f});