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

define(["require","exports","../../../../../core/RandomLCG","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/buffer/glUtil","./bufferLayouts"],(function(t,e,o,n,r,i,a){Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(){}return t.prototype.updateSettings=function(t){this.settings=t},t.prototype.write=function(t,e,o){var n=function(t){var e=s;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],f[0]=5381;for(var o=0;o<c.length;o++)f[0]=31*f[0]+c[o];return f[0]}(o);p.seed=n;var r,i,a,u=p.getIntRange(0,255),m=p.getIntRange(0,this.settings.variants-1),l=p.getFloat(),g=-(1-Math.min(l/.7,1)),y=Math.max(0,l-.7)/(1-.7),d=255*(.5*(i=1.2,a=(r=g+y)<0?-1:1,Math.pow(Math.abs(r),i)*a)+.5);t.position0.setVec(e,o.position0),t.position1.setVec(e,o.position1),t.componentIndex.set(e,o.componentIndex),t.variantOffset.set(e,u),t.variantStroke.set(e,m),t.variantExtension.set(e,d)},t.prototype.trim=function(t,e){return t.slice(0,e)},t}();e.CommonBufferWriter=u;var s=new Float32Array(6),c=new Uint32Array(s.buffer),f=new Uint32Array(1);var p=new o,m=function(){function t(){this.commonWriter=new u}return t.prototype.updateSettings=function(t){this.commonWriter.updateSettings(t)},t.prototype.allocate=function(t){return a.RegularEdgeInstancesLayout.createBuffer(t)},t.prototype.write=function(t,e,o){this.commonWriter.write(t,e,o),n.vec3.add(g,o.faceNormal0,o.faceNormal1),n.vec3.normalize(g,g),t.normal.setVec(e,g)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=a.RegularEdgeInstancesLayout,t.glLayout=i.glLayout(a.RegularEdgeInstancesLayout,{divisor:1}),t}();e.RegularEdgeBufferWriter=m;var l=function(){function t(){this.commonWriter=new u}return t.prototype.updateSettings=function(t){this.commonWriter.updateSettings(t)},t.prototype.allocate=function(t){return a.SilhouetteEdgeInstancesLayout.createBuffer(t)},t.prototype.write=function(t,e,o){this.commonWriter.write(t,e,o),t.normalA.setVec(e,o.faceNormal0),t.normalB.setVec(e,o.faceNormal1)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=a.SilhouetteEdgeInstancesLayout,t.glLayout=i.glLayout(a.SilhouetteEdgeInstancesLayout,{divisor:1}),t}();e.SilhouetteEdgeBufferWriter=l;var g=r.vec3f64.create()}));