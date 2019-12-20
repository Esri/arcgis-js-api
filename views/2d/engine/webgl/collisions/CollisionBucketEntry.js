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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec2"],function(e,r,M){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){this._reference=null}return Object.defineProperty(e.prototype,"dirty",{get:function(){return this.reference&&this.reference.isDirty},set:function(e){this.reference&&this.reference.hasData&&(e||this.reference.isDirty)&&(this.reference.isDirty=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return this._reference&&this._reference.labelIndex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reference",{get:function(){return this._reference},set:function(e){this._reference=e},enumerable:!0,configurable:!0}),e.prototype.reset=function(e,r,t){var n=e.state,i=t.layerView.tileRenderer,o=this.reference;if(!o||!o.hasData)return!1;r&&(o.isDirty=!0);for(var a=o.transforms.labelMat2d,c=a[4],f=a[5],s=0,u=o.displayObjects;s<u.length;s++)for(var l=u[s],d=i.featuresView.attributeView,h=t.hasVV()?d.getVVSize(l.id):0,b=0,v=l.metrics;b<v.length;b++){var y=v[b];t.hasVV()&&y.computeOffset(h,t.vvEval);var p=y.bounds.center,g=y.bounds.centerT;o.isDirty&&(y.minZoom=-1);var m=M.vec2.copy(g,y.anchor);if(n.rotation?M.vec2.transformMat2d(m,m,a):(g[0]=m[0]+c,g[1]=m[1]+f),M.vec2.add(g,m,p),g[0]+=y.offsetX,g[1]+=y.offsetY,y.boxes)for(var V=0,D=y.boxes;V<D.length;V++){var _=D[V],x=_.center,O=y.anchor,j=_.centerT;M.vec2.add(j,O,x),n.rotation?M.vec2.transformMat2d(j,j,a):(j[0]=j[0]+c,j[1]=j[1]+f)}}return!0},e}();r.default=t});