// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./gl-matrix"],function(t,i,n){var e=n.vec3d,s=n.mat4d,a=function(){function t(t,i,n,s,a,o,r,h,d,u,c){this.data=t,this.boundingInfo=i,this.material=n,this.origin=null,this.center=e.create(),this.bsRadius=0,this.transformation=null,s&&this.updateTransformation(s,a),this.castShadow=o,this.singleUse=r,this.name=h,this.uniqueName=d,this.idx=u,this.canBeMerged=!0,this.componentIdx=c,this.displayedIndexRange=void 0,this.instanceParameters=void 0}return t.prototype.updateTransformation=function(t,i){i=i||s.maxScale(t),this.transformation=t,s.multiplyVec3(t,this.boundingInfo.getCenter(),this.center),this.bsRadius=this.boundingInfo.getBSRadius()*i},t}();return a});