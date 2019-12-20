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

define(["require","exports","../../../../core/tsSupport/extendsHelper","./Bucket"],function(e,t,r,i){return function(e){function t(t,r,i,a){var n=e.call(this,t,r)||this;return n._circleVertexBuffer=i,n._circleIndexBuffer=a,n}return r(t,e),Object.defineProperty(t.prototype,"circleIndexStart",{get:function(){return this._circleIndexStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"circleIndexCount",{get:function(){return this._circleIndexCount},enumerable:!0,configurable:!0}),t.prototype.assignBufferInfo=function(e){var t=e;t._circleIndexStart=this._circleIndexStart,t._circleIndexCount=this._circleIndexCount},t.prototype.processFeatures=function(e){var t=this._circleVertexBuffer,r=this._circleIndexBuffer;this._circleIndexStart=r.index,this._circleIndexCount=0;var i=this.layer,a=this.zoom;e&&e.setExtent(this.layerExtent);for(var n=1,c=[1,1,1,1],o=1,l=0,u=1,s=[1,1,1,1],d=1,f=0,h=this._features;f<h.length;f++){var x=h[f],p=x.getGeometry(e);if(p){i.hasDataDrivenRadius&&(n=i.getPaintValue("circle-radius",a,x)),i.hasDataDrivenColor&&(c=i.getPaintValue("circle-color",a,x)),i.hasDataDrivenOpacity&&(o=i.getPaintValue("circle-opacity",a,x)),i.hasDataDrivenStrokeWidth&&(u=i.getPaintValue("circle-stroke-width",a,x)),i.hasDataDrivenStrokeColor&&(s=i.getPaintValue("circle-stroke-color",a,x)),i.hasDataDrivenStrokeOpacity&&(d=i.getPaintValue("circle-stroke-opacity",a,x)),i.hasDataDrivenBlur&&(l=i.getPaintValue("circle-blur",a,x));for(var v=0,y=p;v<y.length;v++){var g=y[v];if(g)for(var D=0,I=g;D<I.length;D++){var _=I[D],P=t.index;t.add(_.x,_.y,0,0,n,c,o,l,u,s,d),t.add(_.x,_.y,0,1,n,c,o,l,u,s,d),t.add(_.x,_.y,1,0,n,c,o,l,u,s,d),t.add(_.x,_.y,1,1,n,c,o,l,u,s,d),r.add(P+0,P+1,P+2),r.add(P+1,P+2,P+3),this._circleIndexCount+=6}}}}},t}(i)});