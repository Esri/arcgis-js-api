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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec2"],function(e,r,M){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){this._reference=null}return Object.defineProperty(e.prototype,"dirty",{get:function(){return this.reference&&this.reference.isDirty},set:function(e){this.reference&&this.reference.hasData&&(this.reference.isDirty=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return this._reference&&this._reference.labelIndex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reference",{get:function(){return this._reference},set:function(e){this._reference=e},enumerable:!0,configurable:!0}),e.prototype.reset=function(e,r,t){var n=t.layerView.tileRenderer,i=this.reference;if(!i||!i.hasData)return!1;r&&(i.isDirty=!0);for(var o=i.labelMat2d,a=i.labelMat2d[4],c=i.labelMat2d[5],f=0,s=i.displayObjects;f<s.length;f++)for(var u=s[f],l=n.featuresView.attributeView.getVVSize(u.id),d=0,b=u.metrics;d<b.length;d++){var h=b[d];t.hasVV()&&h.computeOffset(l,t.vvEval);var v=h.bounds.center,p=h.bounds.centerT;i.isDirty&&(h.minZoom=-1);var y=M.vec2.copy(p,h.anchor);if(e.rotation?M.vec2.transformMat2d(y,y,o):(p[0]=y[0]+a,p[1]=y[1]+c),M.vec2.add(p,y,v),p[0]+=h.offsetX,p[1]+=h.offsetY,h.boxes)for(var g=0,m=h.boxes;g<m.length;g++){var V=m[g],_=V.center,x=h.anchor,D=V.centerT;M.vec2.add(D,x,_),e.rotation?M.vec2.transformMat2d(D,D,o):(D[0]=D[0]+a,D[1]=D[1]+c)}}return!0},e}();r.default=t});