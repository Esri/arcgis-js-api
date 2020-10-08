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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/libs/gl-matrix-2/vec4f64"],(function(e,i,r,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.Node=i.NodeBase=void 0;var o=function(e,i){this.id=e,this.mbs=i,this.renderMbs=t.vec4f64.fromArray([0,0,0,-1]),this.imModificationImpact=4};i.NodeBase=o;var s=function(e){function i(i,r,t,o,s,n,a,c,d,u){var f=e.call(this,i,t)||this;return f.index=r,f.childCount=o,f.level=s,f.resources=n,f.version=a,f.lodMetric=c,f.maxError=d,f.numFeatures=u,f.failed=!1,f.hasModifications=!1,f.cacheState=0,f.vertexCount=0,f.memory=0,f}return r.__extends(i,e),i}(o);i.Node=s}));