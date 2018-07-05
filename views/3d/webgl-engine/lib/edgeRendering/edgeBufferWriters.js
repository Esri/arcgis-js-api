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

define(["require","exports","../../../../../core/tsSupport/assignHelper","../../../../../core/tsSupport/extendsHelper","../../../lib/glMatrix","../../../support/buffer/glUtil","./bufferLayouts"],function(t,e,o,n,r,i,a){function u(t){var e=p;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],m[0]=5381;for(var o=0;o<f.length;o++)m[0]=31*m[0]+f[o];return m[0]}function s(t,e){var o=t<0?-1:1;return Math.pow(Math.abs(t),e)*o}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(){}return t.prototype.updateSettings=function(t){this.settings=t},t.prototype.write=function(t,e,o){var n=u(o);l.reseed(n);var r=l.randomRangeInt(0,255),i=l.randomRangeInt(0,this.settings.variants-1),a=l.randomFloat(),c=-(1-Math.min(a/.7,1)),p=Math.max(0,a-.7)/(1-.7),f=.5*s(c+p,1.2)+.5,m=255*f;t.position0.setVec(e,o.position0),t.position1.setVec(e,o.position1),t.componentIndex.set(e,o.componentIndex),t.variantOffset.set(e,r),t.variantStroke.set(e,i),t.variantExtension.set(e,m)},t.prototype.trim=function(t,e){return t.slice(0,e)},t}();e.CommonBufferWriter=c;var p=new Float32Array(6),f=new Uint32Array(p.buffer),m=new Uint32Array(1),d=function(){function t(t){void 0===t&&(t=1),this.seed=t}return t.prototype.randomFloat=function(){return this.step()/t.LARGE_PRIME},t.prototype.randomRangeInt=function(t,e){var o=e-t;return Math.round(t+this.randomFloat()*o)},t.prototype.reseed=function(t){this.seed=t},t.prototype.step=function(){return this.seed=this.seed*t.SMALL_PRIME%t.LARGE_PRIME},t.LARGE_PRIME=2147483647,t.SMALL_PRIME=16807,t}(),l=new d,y=function(){function t(){this.commonWriter=new c}return t.prototype.updateSettings=function(t){this.commonWriter.updateSettings(t)},t.prototype.allocate=function(t){return a.RegularEdgeInstancesLayout.createBuffer(t)},t.prototype.write=function(t,e,o){this.commonWriter.write(t,e,o);var n=r.vec3d.normalize(r.vec3d.add(o.faceNormal0,o.faceNormal1,h));t.normal.setVec(e,n)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=a.RegularEdgeInstancesLayout,t.glLayout=i.glLayout(a.RegularEdgeInstancesLayout,{prefixA:!0,divisor:1}),t}();e.RegularEdgeBufferWriter=y;var g=function(){function t(){this.commonWriter=new c}return t.prototype.updateSettings=function(t){this.commonWriter.updateSettings(t)},t.prototype.allocate=function(t){return a.SilhouetteEdgeInstancesLayout.createBuffer(t)},t.prototype.write=function(t,e,o){this.commonWriter.write(t,e,o),t.normalA.setVec(e,o.faceNormal0),t.normalB.setVec(e,o.faceNormal1)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=a.SilhouetteEdgeInstancesLayout,t.glLayout=i.glLayout(a.SilhouetteEdgeInstancesLayout,{prefixA:!0,divisor:1}),t}();e.SilhouetteEdgeBufferWriter=g;var h=r.vec3d.create()});