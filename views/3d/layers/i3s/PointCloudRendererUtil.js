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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./I3SBinaryReader"],function(e,r,o){function t(e){var r=e.renderer,o=r&&r.type,t=null,n=!1;"pointCloudUniqueValueRenderer"===o?t=f(e.attributeStorageInfo,r.field):"pointCloudStretchRenderer"===o?t=f(e.attributeStorageInfo,r.field):"pointCloudClassBreaksRenderer"===o?t=f(e.attributeStorageInfo,r.field):"pointCloudRGBRenderer"===o?(t=u(e.attributeStorageInfo,r.field),n=null!=t):(t=u(e.attributeStorageInfo,"RGB"),n=null!=t);var l=null;return r&&r.colorModulation&&(l=f(e.attributeStorageInfo,r.colorModulation.field)),{renderer:r,isRGBRenderer:n,primaryAttribute:t,modulationAttribute:l}}function n(e,r,o,t,n){var l=e.renderer,a=e.isRGBRenderer,i=e.primaryAttribute,u=e.modulationAttribute,f=d(i,r,t,n),v=d(u,o,t,n),c=null;if(f&&a)c=f;else if(f&&l&&"pointCloudUniqueValueRenderer"===l.type){var g=l.colorUniqueValueInfos;c=new Uint8Array(3*n);for(var b=s(l.fieldTransformType),p=0;n>p;p++)for(var y=b?b(f[p]):f[p],m=y+"",h=0;h<g.length;h++)if(g[h].values.indexOf(m)>=0){c[3*p]=g[h].color.r,c[3*p+1]=g[h].color.g,c[3*p+2]=g[h].color.b;break}}else if(f&&l&&"pointCloudStretchRenderer"===l.type){var R=l.stops;c=new Uint8Array(3*n);for(var b=s(l.fieldTransformType),p=0;n>p;p++){var y=b?b(f[p]):f[p],S=R.length-1;if(y<R[0].value)c[3*p]=R[0].color.r,c[3*p+1]=R[0].color.g,c[3*p+2]=R[0].color.b;else if(y>=R[S].value)c[3*p]=R[S].color.r,c[3*p+1]=R[S].color.g,c[3*p+2]=R[S].color.b;else for(var h=1;h<R.length;h++)if(y<R[h].value){var A=(y-R[h-1].value)/(R[h].value-R[h-1].value);c[3*p]=R[h].color.r*A+R[h-1].color.r*(1-A),c[3*p+1]=R[h].color.g*A+R[h-1].color.g*(1-A),c[3*p+2]=R[h].color.b*A+R[h-1].color.b*(1-A);break}}}else if(f&&l&&"pointCloudClassBreaksRenderer"===l.type){var I=l.colorClassBreakInfos;c=new Uint8Array(3*n);for(var b=s(l.fieldTransformType),p=0;n>p;p++)for(var y=b?b(f[p]):f[p],h=0;h<I.length;h++)if(y>=I[h].minValue&&y<=I[h].maxValue){c[3*p]=I[h].color.r,c[3*p+1]=I[h].color.g,c[3*p+2]=I[h].color.b;break}}else{c=new Uint8Array(3*n);for(var p=0;p<c.length;p++)c[p]=255}if(v&&l&&l.colorModulation)for(var C=l.colorModulation.minValue,V=l.colorModulation.maxValue,B=.3,p=0;n>p;p++){var y=v[p],U=y>=V?1:C>=y?B:B+(1-B)*(y-C)/(V-C);c[3*p]=U*c[3*p],c[3*p+1]=U*c[3*p+1],c[3*p+2]=U*c[3*p+2]}return c}function l(e){var r=e&&e.pointSizeAlgorithm;return r&&"splat"===r.type?r:null}function a(e){var r=e&&e.pointSizeAlgorithm;return r&&"fixed-size"===r.type?r:null}function i(e){var r=e&&e.pointSizeAlgorithm;return r&&r.type?"fixed-size"===r.type:!1}function u(e,r){for(var o=0,t=e;o<t.length;o++){var n=t[o];if(n.name===r&&null!=n.attributeValues&&"UInt8"===n.attributeValues.valueType&&3===n.attributeValues.valuesPerElement)return{storageInfo:n,useElevation:!1}}return null}function f(e,r){for(var o=0,t=e;o<t.length;o++){var n=t[o];if(n.name===r){var l="embedded-elevation"===n.encoding;return{storageInfo:l?null:n,useElevation:l}}}return"elevation"===r.toLowerCase()?{storageInfo:null,useElevation:!0}:null}function d(e,r,t,n){if(e&&e.useElevation){for(var l=new Float64Array(n),a=0;n>a;a++)l[a]=t[3*a+2];return l}return e&&r?o.readBinaryAttribute(e.storageInfo,r,n):null}function s(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}Object.defineProperty(r,"__esModule",{value:!0}),r.getRendererInfo=t,r.evaluateRenderer=n,r.getSplatSizeAlgorithm=l,r.getFixedSizeAlgorithm=a,r.rendererUsesFixedSizes=i});