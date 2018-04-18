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

define(["require","exports","../../../../../core/tsSupport/assignHelper","../../../../../core/tsSupport/extendsHelper","../../../lib/glMatrix","../../../support/buffer/glUtil","../../../support/buffer/InterleavedLayout","../Util"],function(t,e,n,o,r,i,a,u){function s(t){var e=l;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],d[0]=5381;for(var n=0;n<m.length;n++)d[0]=31*d[0]+m[n];return d[0]}function c(t,e){var n=t<0?-1:1;return Math.pow(Math.abs(t),e)*n}Object.defineProperty(e,"__esModule",{value:!0});var p=a.newLayout().vec3f("position0").vec3f("position1").u16("componentIndex").vec2u8("packedAttributes").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}),f=function(){function t(t){this.settings=t}return t.prototype.write=function(t,e,n){var o=s(n);y.reseed(o);var r=y.randomRangeInt(0,255),i=y.randomRangeInt(0,this.settings.variants-1),a=y.randomFloat(),p=-(1-Math.min(a/.7,1)),f=Math.max(0,a-.7)/(1-.7),l=.5*c(p+f,1.2)+.5,m=255*l;if(t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),this.settings.uber){var d=n.type|u.clamp(n.lineWidth,0,127)<<1;t.packedAttributes.set(e,0,d),t.packedAttributes.set(e,1,Math.round(u.clamp(n.extensions,0,255)))}t.variantOffset.set(e,r),t.variantStroke.set(e,i),t.variantExtension.set(e,m)},t.prototype.trim=function(t,e){return t.slice(0,e)},t}();e.RibbonCommonBufferWriter=f;var l=new Float32Array(6),m=new Uint32Array(l.buffer),d=new Uint32Array(1),v=function(){function t(t){void 0===t&&(t=1),this.seed=t}return t.prototype.randomFloat=function(){return this.step()/t.LARGE_PRIME},t.prototype.randomRangeInt=function(t,e){var n=e-t;return Math.round(t+this.randomFloat()*n)},t.prototype.reseed=function(t){this.seed=t},t.prototype.step=function(){return this.seed=this.seed*t.SMALL_PRIME%t.LARGE_PRIME},t.LARGE_PRIME=2147483647,t.SMALL_PRIME=16807,t}(),y=new v,h=p.clone().vec3f("normal"),g=function(){function t(t){this.commonWriter=new f(t)}return t.prototype.allocate=function(t){return h.createBuffer(t)},t.prototype.write=function(t,e,n){this.commonWriter.write(t,e,n);var o=r.vec3d.normalize(r.vec3d.add(n.faceNormal0,n.faceNormal1,M));t.normal.setVec(e,o)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=h,t.glLayout=i.glLayout(h,1),t}();e.RibbonDefaultEdgeBufferWriter=g;var b=p.clone().vec3f("normalA").vec3f("normalB"),L=function(){function t(t){this.commonWriter=new f(t)}return t.prototype.allocate=function(t){return b.createBuffer(t)},t.prototype.write=function(t,e,n){this.commonWriter.write(t,e,n),t.normalA.setVec(e,n.faceNormal0),t.normalB.setVec(e,n.faceNormal1)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=b,t.glLayout=i.glLayout(b,1),t}();e.RibbonSilhouetteBufferWriter=L;var M=r.vec3d.create()});