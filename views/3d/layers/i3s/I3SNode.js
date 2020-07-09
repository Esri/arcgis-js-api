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

define(["require","exports","tslib","../../../../core/libs/gl-matrix-2/vec4f64"],(function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0});var n=function(e,r){this.id=e,this.mbs=r,this.isComputedObb=!1,this.renderMbs=i.vec4f64.fromArray([0,0,0,-1])};r.NodeBase=n;var o=function(e){function r(r,t,i,n,o,s,u,c,a,d){var l=e.call(this,r,i)||this;return l.index=t,l.childCount=n,l.level=o,l.resources=s,l.version=u,l.lodMetric=c,l.maxError=a,l.numFeatures=d,l.failed=!1,l.cacheState=0,l.vertexCount=0,l.memory=0,l}return t.__extends(r,e),r}(n);r.Node=o}));