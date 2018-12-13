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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","../../../support/mathUtils","../Octree"],function(e,t,n,r,a,i){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t,n){var a=e.call(this,[0,0,0],1,{getCenter:function(e){var t=a._instanceData.view.boundingSphere,n=a._tmpCenter;return n[0]=t.get(e,0),n[1]=t.get(e,1),n[2]=t.get(e,2),n},getRadius:function(e){return a._instanceData.view.boundingSphere.get(e,3)}},{maximumDepth:25})||this;return a._tmpCenter=r.vec3f64.create(),a._tmpMat4=r.mat4f64.create(),a._instanceData=t,a._boundingSphere=n,a}return n(t,e),t.prototype.addInstance=function(e){var t=this._instanceData.view.boundingSphere,n=this._instanceData.getCombinedModelTransform(e,this._tmpMat4),i=r.vec3.transformMat4(this._tmpCenter,this._boundingSphere.center,n),s=this._boundingSphere.radius*a.maxScale(n);t.set(e,0,i[0]),t.set(e,1,i[1]),t.set(e,2,i[2]),t.set(e,3,s),this.add(e)},t.prototype.removeInstance=function(e){this.remove(e)},t}(i);t.InstanceOctree=s});