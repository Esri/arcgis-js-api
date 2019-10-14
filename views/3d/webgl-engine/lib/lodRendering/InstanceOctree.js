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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/mat4f64","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../support/mathUtils","../Octree"],function(e,t,n,r,i,a,s,o){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t,n){var i=e.call(this,[0,0,0],1,{getCenter:function(e){var t=i._instanceData.view.boundingSphere,n=i._tmpCenter;return n[0]=t.get(e,0),n[1]=t.get(e,1),n[2]=t.get(e,2),n},getRadius:function(e){return i._instanceData.view.boundingSphere.get(e,3)}},{maximumDepth:25})||this;return i._tmpCenter=a.vec3f64.create(),i._tmpMat4=r.mat4f64.create(),i._instanceData=t,i._boundingSphere=n,i}return n(t,e),t.prototype.addInstance=function(e){var t=this._instanceData.view.boundingSphere,n=this._instanceData.getCombinedModelTransform(e,this._tmpMat4),r=i.vec3.transformMat4(this._tmpCenter,this._boundingSphere.center,n),a=this._boundingSphere.radius*s.maxScale(n);t.set(e,0,r[0]),t.set(e,1,r[1]),t.set(e,2,r[2]),t.set(e,3,a),this.add(e)},t.prototype.removeInstance=function(e){this.remove(e)},t}(o);t.InstanceOctree=c});