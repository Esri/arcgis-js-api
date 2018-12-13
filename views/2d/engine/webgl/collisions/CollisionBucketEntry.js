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

define(["require","exports","../../../../../core/libs/gl-matrix-2/gl-matrix"],function(e,r,_){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){this._reference=null}return Object.defineProperty(e.prototype,"dirty",{get:function(){return this.reference&&this.reference.isDirty},set:function(e){this.reference&&this.reference.hasData&&(this.reference.isDirty=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return this._reference&&this._reference.labelIndex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reference",{get:function(){return this._reference},set:function(e){this._reference=e},enumerable:!0,configurable:!0}),e.prototype.reset=function(e,r,t){var n=this.reference;if(!n||!n.hasData)return!1;r&&(n.isDirty=!0);for(var i=n.labelMat2d,o=n.labelMat2d[4],a=n.labelMat2d[5],c=0,f=n.displayObjects;c<f.length;c++)for(var s=0,u=f[c].metrics;s<u.length;s++){var l=u[s];t.hasVV()&&l.computeOffset(t.vvEval);var d=l.bounds.center,b=l.bounds.centerT;n.isDirty&&(l.minZoom=-1);var h=_.vec2.copy(b,l.anchor);if(e.rotation?_.vec2.transformMat2d(h,h,i):(b[0]=h[0]+o,b[1]=h[1]+a),_.vec2.add(b,h,d),b[0]+=l.offsetX,b[1]+=l.offsetY,l.boxes)for(var v=0,p=l.boxes;v<p.length;v++){var y=p[v],g=y.center,m=l.anchor,x=y.centerT;_.vec2.add(x,m,g),e.rotation?_.vec2.transformMat2d(x,x,i):(x[0]=x[0]+o,x[1]=x[1]+a)}}return!0},e}();r.default=t});