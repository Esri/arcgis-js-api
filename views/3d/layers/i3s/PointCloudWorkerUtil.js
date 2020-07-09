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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../renderers/PointCloudClassBreaksRenderer","../../../../renderers/PointCloudStretchRenderer","../../../../renderers/PointCloudUniqueValueRenderer","./I3SBinaryReader","./LEPCC"],(function(e,r,o,n,t,l,a,i){function u(e,r){for(var o=new Float64Array(r),n=0;n<r;n++)o[n]=e[3*n+2];return o}function f(e){return null==e||"none"===e?null:"low-four-bit"===e?function(e){return 15&e}:"high-four-bit"===e?function(e){return(240&e)>>4}:"absolute-value"===e?function(e){return Math.abs(e)}:"modulo-ten"===e?function(e){return e%10}:null}function s(e){for(var r=0,o=0,n=e||[];o<n.length;o++){r|=1<<n[o]}return r}Object.defineProperty(r,"__esModule",{value:!0}),r.evaluateRenderer=function(e,r,o,a){var i=e.rendererJSON,u=e.isRGBRenderer,s=null,c=null;if(r&&u)s=r;else if(r&&"pointCloudUniqueValueRenderer"===i.type){var d=(c=l.fromJSON(i)).colorUniqueValueInfos;s=new Uint8Array(3*a);for(var v=f(c.fieldTransformType),b=0;b<a;b++)for(var g=(p=v?v(r[b]):r[b])+"",y=0;y<d.length;y++)if(d[y].values.indexOf(g)>=0){s[3*b]=d[y].color.r,s[3*b+1]=d[y].color.g,s[3*b+2]=d[y].color.b;break}}else if(r&&"pointCloudStretchRenderer"===i.type){var m=(c=t.fromJSON(i)).stops;s=new Uint8Array(3*a);for(v=f(c.fieldTransformType),b=0;b<a;b++){var p=v?v(r[b]):r[b],h=m.length-1;if(p<m[0].value)s[3*b]=m[0].color.r,s[3*b+1]=m[0].color.g,s[3*b+2]=m[0].color.b;else if(p>=m[h].value)s[3*b]=m[h].color.r,s[3*b+1]=m[h].color.g,s[3*b+2]=m[h].color.b;else for(y=1;y<m.length;y++)if(p<m[y].value){var C=(p-m[y-1].value)/(m[y].value-m[y-1].value);s[3*b]=m[y].color.r*C+m[y-1].color.r*(1-C),s[3*b+1]=m[y].color.g*C+m[y-1].color.g*(1-C),s[3*b+2]=m[y].color.b*C+m[y-1].color.b*(1-C);break}}}else if(r&&"pointCloudClassBreaksRenderer"===i.type){var R=(c=n.fromJSON(i)).colorClassBreakInfos;s=new Uint8Array(3*a);for(v=f(c.fieldTransformType),b=0;b<a;b++)for(p=v?v(r[b]):r[b],y=0;y<R.length;y++)if(p>=R[y].minValue&&p<=R[y].maxValue){s[3*b]=R[y].color.r,s[3*b+1]=R[y].color.g,s[3*b+2]=R[y].color.b;break}}else{s=new Uint8Array(3*a);for(b=0;b<s.length;b++)s[b]=255}if(o&&c&&c.colorModulation){var S=c.colorModulation.minValue,x=c.colorModulation.maxValue;for(b=0;b<a;b++){var A=(p=o[b])>=x?1:p<=S?.3:.3+.7*(p-S)/(x-S);s[3*b]=A*s[3*b],s[3*b+1]=A*s[3*b+1],s[3*b+2]=A*s[3*b+2]}}return s},r.readGeometry=function(e,r){if(null==e.encoding||""===e.encoding){var n=a.createGeometryIndexFromSchema(r,e);if(o.isNone(n.vertexAttributes.position))return;for(var t=a.createTypedView(r,n.vertexAttributes.position),l=n.header.fields,u=[l.offsetX,l.offsetY,l.offsetZ],f=[l.scaleX,l.scaleY,l.scaleZ],s=t.length/3,c=new Float64Array(3*s),d=0;d<s;d++)c[3*d]=t[3*d]*f[0]+u[0],c[3*d+1]=t[3*d+1]*f[1]+u[1],c[3*d+2]=t[3*d+2]*f[2]+u[2];return c}if("lepcc-xyz"===e.encoding)return i.decodeXYZ(r).result},r.getAttributeValues=function(e,r,n){return o.isSome(e)&&e.attributeInfo.useElevation?u(r,n):o.isSome(e)?a.readBinaryAttribute(e.attributeInfo.storageInfo,e.buffer,n):null},r.elevationFromPositions=u,r.filterInPlace=function(e,r,o,n,t){for(var l=e.length/3,a=0,i=0;i<l;i++){for(var u=!0,f=0;f<n.length&&u;f++){var c=n[f].filterJSON,d=t[f].values[i];switch(c.type){case"pointCloudValueFilter":var v="exclude"===c.mode;-1!==c.values.indexOf(d)===v&&(u=!1);break;case"pointCloudBitfieldFilter":var b=s(c.requiredSetBits),g=s(c.requiredClearBits);(d&b)===b&&0==(d&g)||(u=!1);break;case"pointCloudReturnFilter":for(var y=15&d,m=d>>>4&15,p=m>1,h=1===y,C=y===m,R=!1,S=0,x=c.includedReturns;S<x.length;S++){var A=x[S];if("last"===A&&C||"firstOfMany"===A&&h&&p||"lastOfMany"===A&&C&&p||"single"===A&&!p){R=!0;break}}R||(u=!1)}}u&&(o[a]=i,e[3*a]=e[3*i],e[3*a+1]=e[3*i+1],e[3*a+2]=e[3*i+2],r[3*a]=r[3*i],r[3*a+1]=r[3*i+1],r[3*a+2]=r[3*i+2],a++)}return a}}));