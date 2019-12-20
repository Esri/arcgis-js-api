// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/assignHelper","../../../../../core/tsSupport/extendsHelper","../../../../../core/RandomLCG","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/buffer/glUtil","./bufferLayouts"],function(t,e,o,r,n,i,a,u,s){function c(t){var e=l;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],g[0]=5381;for(var o=0;o<m.length;o++)g[0]=31*g[0]+m[o];return g[0]}function p(t,e){var o=t<0?-1:1;return Math.pow(Math.abs(t),e)*o}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function t(){}return t.prototype.updateSettings=function(t){this.settings=t},t.prototype.write=function(t,e,o){var r=c(o);y.seed=r;var n=y.getIntRange(0,255),i=y.getIntRange(0,this.settings.variants-1),a=y.getFloat(),u=-(1-Math.min(a/.7,1)),s=Math.max(0,a-.7)/(1-.7),f=.5*p(u+s,1.2)+.5,l=255*f;t.position0.setVec(e,o.position0),t.position1.setVec(e,o.position1),t.componentIndex.set(e,o.componentIndex),t.variantOffset.set(e,n),t.variantStroke.set(e,i),t.variantExtension.set(e,l)},t.prototype.trim=function(t,e){return t.slice(0,e)},t}();e.CommonBufferWriter=f;var l=new Float32Array(6),m=new Uint32Array(l.buffer),g=new Uint32Array(1),y=new n,d=function(){function t(){this.commonWriter=new f}return t.prototype.updateSettings=function(t){this.commonWriter.updateSettings(t)},t.prototype.allocate=function(t){return s.RegularEdgeInstancesLayout.createBuffer(t)},t.prototype.write=function(t,e,o){this.commonWriter.write(t,e,o),i.vec3.add(h,o.faceNormal0,o.faceNormal1),i.vec3.normalize(h,h),t.normal.setVec(e,h)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=s.RegularEdgeInstancesLayout,t.glLayout=u.glLayout(s.RegularEdgeInstancesLayout,{divisor:1}),t}();e.RegularEdgeBufferWriter=d;var v=function(){function t(){this.commonWriter=new f}return t.prototype.updateSettings=function(t){this.commonWriter.updateSettings(t)},t.prototype.allocate=function(t){return s.SilhouetteEdgeInstancesLayout.createBuffer(t)},t.prototype.write=function(t,e,o){this.commonWriter.write(t,e,o),t.normalA.setVec(e,o.faceNormal0),t.normalB.setVec(e,o.faceNormal1)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=s.SilhouetteEdgeInstancesLayout,t.glLayout=u.glLayout(s.SilhouetteEdgeInstancesLayout,{divisor:1}),t}();e.SilhouetteEdgeBufferWriter=v;var h=a.vec3f64.create()});