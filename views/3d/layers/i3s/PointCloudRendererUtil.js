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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../renderers/PointCloudClassBreaksRenderer","../../../../renderers/PointCloudRenderer","../../../../renderers/PointCloudStretchRenderer","../../../../renderers/PointCloudUniqueValueRenderer","./I3SBinaryReader"],function(e,r,o,n,t,l,i){function u(e){var r=e.renderer,o=r&&r.type,n=r&&e.renderer.toJSON()||null,t=null,l=!1;"point-cloud-unique-value"===o?t=g(e.attributeStorageInfo,r.field):"point-cloud-stretch"===o?t=g(e.attributeStorageInfo,r.field):"point-cloud-class-breaks"===o?t=g(e.attributeStorageInfo,r.field):"point-cloud-rgb"===o?(t=v(e.attributeStorageInfo,r.field),l=null!=t):(t=v(e.attributeStorageInfo,"RGB"),l=null!=t);var i=null;return r&&r.colorModulation&&(i=g(e.attributeStorageInfo,r.colorModulation.field)),{rendererJSON:n,isRGBRenderer:l,primaryAttribute:t,modulationAttribute:i}}function a(e,r,n,i,u){var a=e.rendererJSON,f=e.isRGBRenderer,d=e.primaryAttribute,s=e.modulationAttribute,c=b(d,r,i,u),v=b(s,n,i,u),g=null,m=null;if(c&&f)g=c;else if(c&&"pointCloudUniqueValueRenderer"===a.type){m=l.fromJSON(a);var S=m.colorUniqueValueInfos;g=new Uint8Array(3*u);for(var y=p(m.fieldTransformType),h=0;h<u;h++)for(var A=y?y(c[h]):c[h],I=A+"",R=0;R<S.length;R++)if(S[R].values.indexOf(I)>=0){g[3*h]=S[R].color.r,g[3*h+1]=S[R].color.g,g[3*h+2]=S[R].color.b;break}}else if(c&&"pointCloudStretchRenderer"===a.type){m=t.fromJSON(a);var z=m.stops;g=new Uint8Array(3*u);for(var y=p(m.fieldTransformType),h=0;h<u;h++){var A=y?y(c[h]):c[h],C=z.length-1;if(A<z[0].value)g[3*h]=z[0].color.r,g[3*h+1]=z[0].color.g,g[3*h+2]=z[0].color.b;else if(A>=z[C].value)g[3*h]=z[C].color.r,g[3*h+1]=z[C].color.g,g[3*h+2]=z[C].color.b;else for(var R=1;R<z.length;R++)if(A<z[R].value){var V=(A-z[R-1].value)/(z[R].value-z[R-1].value);g[3*h]=z[R].color.r*V+z[R-1].color.r*(1-V),g[3*h+1]=z[R].color.g*V+z[R-1].color.g*(1-V),g[3*h+2]=z[R].color.b*V+z[R-1].color.b*(1-V);break}}}else if(c&&"pointCloudClassBreaksRenderer"===a.type){m=o.fromJSON(a);var M=m.colorClassBreakInfos;g=new Uint8Array(3*u);for(var y=p(m.fieldTransformType),h=0;h<u;h++)for(var A=y?y(c[h]):c[h],R=0;R<M.length;R++)if(A>=M[R].minValue&&A<=M[R].maxValue){g[3*h]=M[R].color.r,g[3*h+1]=M[R].color.g,g[3*h+2]=M[R].color.b;break}}else{g=new Uint8Array(3*u);for(var h=0;h<g.length;h++)g[h]=255}if(v&&m&&m.colorModulation)for(var U=m.colorModulation.minValue,x=m.colorModulation.maxValue,h=0;h<u;h++){var A=v[h],B=A>=x?1:A<=U?.3:.3+.7*(A-U)/(x-U);g[3*h]=B*g[3*h],g[3*h+1]=B*g[3*h+1],g[3*h+2]=B*g[3*h+2]}return g}function f(e){var r=e&&e.pointSizeAlgorithm;return r&&"splat"===r.type?r:null}function d(e){var r=f(e);return r&&null!=r.minSize?r.minSize:n.defaultMinSize}function s(e){var r=e&&e.pointSizeAlgorithm;return r&&"fixed-size"===r.type?r:null}function c(e){var r=e&&e.pointSizeAlgorithm;return!(!r||!r.type)&&"fixed-size"===r.type}function v(e,r){for(var o=0,n=e;o<n.length;o++){var t=n[o];if(t.name===r&&null!=t.attributeValues&&"UInt8"===t.attributeValues.valueType&&3===t.attributeValues.valuesPerElement)return{storageInfo:t,useElevation:!1}}return null}function g(e,r){for(var o=0,n=e;o<n.length;o++){var t=n[o];if(t.name===r){var l="embedded-elevation"===t.encoding;return{storageInfo:l?null:t,useElevation:l}}}return"elevation"===r.toLowerCase()?{storageInfo:null,useElevation:!0}:null}function b(e,r,o,n){if(e&&e.useElevation){for(var t=new Float64Array(n),l=0;l<n;l++)t[l]=o[3*l+2];return t}return e&&r?i.readBinaryAttribute(e.storageInfo,r,n):null}function p(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}Object.defineProperty(r,"__esModule",{value:!0}),r.getRendererInfo=u,r.evaluateRenderer=a,r.getSplatSizeAlgorithm=f,r.getMinSize=d,r.getFixedSizeAlgorithm=s,r.rendererUsesFixedSizes=c});