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

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec2"],(function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(){this._reference=null}return Object.defineProperty(e.prototype,"dirty",{get:function(){return this.reference&&this.reference.isDirty},set:function(e){this.reference&&this.reference.hasData&&(e||this.reference.isDirty)&&(this.reference.isDirty=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return this._reference&&this._reference.labelIndex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reference",{get:function(){return this._reference},set:function(e){this._reference=e},enumerable:!0,configurable:!0}),e.prototype.reset=function(e,r,n){var i=e.state,o=n.layerView.tileRenderer,a=this.reference;if(!a||!a.hasData)return!1;r&&(a.isDirty=!0);for(var c=a.transforms.labelMat2d,f=c[4],s=c[5],u=0,l=a.displayObjects;u<l.length;u++)for(var d=l[u],h=o.featuresView.attributeView,b=n.hasVV()?h.getVVSize(d.id):0,v=0,y=d.metrics;v<y.length;v++){var p=y[v];n.hasVV()&&p.computeVVOffset(b,n.vvEval);var g=p.bounds.center,m=p.bounds.centerT;a.isDirty&&(p.minZoom=-1);var V=t.vec2.copy(m,p.anchor);if(i.rotation?t.vec2.transformMat2d(V,V,c):(m[0]=V[0]+f,m[1]=V[1]+s),t.vec2.add(m,V,g),m[0]+=p.offsetX,m[1]+=p.offsetY,p.boxes)for(var D=0,_=p.boxes;D<_.length;D++){var x=_[D],O=x.center,j=p.anchor,M=x.centerT;t.vec2.add(M,j,O),i.rotation?t.vec2.transformMat2d(M,M,c):(M[0]=M[0]+f,M[1]=M[1]+s)}}return!0},e}();r.default=n}));