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

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec2"],function(e,r,H){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){this._reference=null}return Object.defineProperty(e.prototype,"dirty",{get:function(){return this.reference&&this.reference.isDirty},set:function(e){this.reference&&this.reference.hasData&&(e||this.reference.isDirty)&&(this.reference.isDirty=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return this._reference&&this._reference.labelIndex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reference",{get:function(){return this._reference},set:function(e){this._reference=e},enumerable:!0,configurable:!0}),e.prototype.reset=function(e,r,t){var n=e.state,i=e.renderingOptions,o=t.layerView.tileRenderer,a=this.reference;if(!a||!a.hasData)return!1;r&&(a.isDirty=!0);for(var f=a.transforms.labelMat2d,s=f[4],c=f[5],u=0,l=a.displayObjects;u<l.length;u++)for(var d=l[u],h=o.featuresView.attributeView,b=t.hasVV()?h.getVVSize(d.id):0,v=0,y=d.metrics;v<y.length;v++){var p=y[v];t.hasVV()&&p.computeOffset(b,t.vvEval);var g=p.bounds.center,m=p.bounds.centerT;a.isDirty&&(p.minZoom=-1);var V=H.vec2.copy(m,p.anchor);n.rotation?H.vec2.transformMat2d(V,V,f):(m[0]=V[0]+s,m[1]=V[1]+c),H.vec2.add(m,V,g),m[0]+=p.offsetX,m[1]+=p.offsetY;var D=n.size,O=D[0],_=D[1],x=p.bounds,j=x.halfHeight,M=x.halfWidth,P=i.edgeLabelsVisible?-1:1;if("polyline"!==t.geometryType&&(m[0]-M*P<0||m[0]+M*P>O||m[1]-j*P<0||m[1]+j*P>_)&&(p.minZoom=255),p.boxes)for(var w=0,T=p.boxes;w<T.length;w++){var z=T[w],Z=z.center,q=p.anchor,E=z.centerT;H.vec2.add(E,q,Z),n.rotation?H.vec2.transformMat2d(E,E,f):(E[0]=E[0]+s,E[1]=E[1]+c)}}return!0},e}();r.default=t});