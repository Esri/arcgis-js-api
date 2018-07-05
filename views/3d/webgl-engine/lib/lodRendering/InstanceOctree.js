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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../gl-matrix","../Octree"],function(e,t,n,a,i){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){function t(t,n){var i=e.call(this,[0,0,0],1,{getCenter:function(e){var t=i._instanceData.view.boundingSphere,n=i._tmpCenter;return n[0]=t.get(e,0),n[1]=t.get(e,1),n[2]=t.get(e,2),n},getRadius:function(e){return i._instanceData.view.boundingSphere.get(e,3)}},{maximumDepth:25})||this;return i._instanceData=t,i._boundingSphere=n,i._tmpCenter=a.vec3d.create(),i._tmpTranslation=a.vec3d.create(),i._tmpModel=a.mat3d.create(),i}return n(t,e),t.prototype.addInstance=function(e){var t=this._instanceData.view.boundingSphere,n=this._tmpCenter;this._instanceData.getModel(e,this._tmpModel),a.mat3d.multiplyVec3(this._tmpModel,this._boundingSphere.center,n),this._instanceData.getTranslation(e,this._tmpTranslation),a.vec3d.add(n,this._tmpTranslation);var i=this._boundingSphere.radius*this._instanceData.getScaleFactor(e);t.set(e,0,n[0]),t.set(e,1,n[1]),t.set(e,2,n[2]),t.set(e,3,i),this.add(e)},t.prototype.removeInstance=function(e){this.remove(e)},t}(i);t.InstanceOctree=r});