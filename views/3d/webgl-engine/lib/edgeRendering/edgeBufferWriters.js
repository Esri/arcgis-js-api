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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/assignHelper","../../../../../core/tsSupport/extendsHelper","../../../../../core/RandomLCG","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/buffer/glUtil","./bufferLayouts"],(function(t,e,o,r,n,i,a,s,u){Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(){}return t.prototype.updateSettings=function(t){this.settings=t},t.prototype.write=function(t,e,o){var r=function(t){var e=p;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],l[0]=5381;for(var o=0;o<f.length;o++)l[0]=31*l[0]+f[o];return l[0]}(o);m.seed=r;var n,i,a,s=m.getIntRange(0,255),u=m.getIntRange(0,this.settings.variants-1),c=m.getFloat(),g=-(1-Math.min(c/.7,1)),y=Math.max(0,c-.7)/(1-.7),d=255*(.5*(i=1.2,a=(n=g+y)<0?-1:1,Math.pow(Math.abs(n),i)*a)+.5);t.position0.setVec(e,o.position0),t.position1.setVec(e,o.position1),t.componentIndex.set(e,o.componentIndex),t.variantOffset.set(e,s),t.variantStroke.set(e,u),t.variantExtension.set(e,d)},t.prototype.trim=function(t,e){return t.slice(0,e)},t}();e.CommonBufferWriter=c;var p=new Float32Array(6),f=new Uint32Array(p.buffer),l=new Uint32Array(1);var m=new n,g=function(){function t(){this.commonWriter=new c}return t.prototype.updateSettings=function(t){this.commonWriter.updateSettings(t)},t.prototype.allocate=function(t){return u.RegularEdgeInstancesLayout.createBuffer(t)},t.prototype.write=function(t,e,o){this.commonWriter.write(t,e,o),i.vec3.add(d,o.faceNormal0,o.faceNormal1),i.vec3.normalize(d,d),t.normal.setVec(e,d)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=u.RegularEdgeInstancesLayout,t.glLayout=s.glLayout(u.RegularEdgeInstancesLayout,{divisor:1}),t}();e.RegularEdgeBufferWriter=g;var y=function(){function t(){this.commonWriter=new c}return t.prototype.updateSettings=function(t){this.commonWriter.updateSettings(t)},t.prototype.allocate=function(t){return u.SilhouetteEdgeInstancesLayout.createBuffer(t)},t.prototype.write=function(t,e,o){this.commonWriter.write(t,e,o),t.normalA.setVec(e,o.faceNormal0),t.normalB.setVec(e,o.faceNormal1)},t.prototype.trim=function(t,e){return this.commonWriter.trim(t,e)},t.Layout=u.SilhouetteEdgeInstancesLayout,t.glLayout=s.glLayout(u.SilhouetteEdgeInstancesLayout,{divisor:1}),t}();e.SilhouetteEdgeBufferWriter=y;var d=a.vec3f64.create()}));