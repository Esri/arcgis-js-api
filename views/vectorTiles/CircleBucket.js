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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./Bucket"],function(e,t,r,i,a){return function(e){function t(t,r,i,a){var n=e.call(this,t,r)||this;return n._circleVertexBuffer=i,n._circleIndexBuffer=a,n}return r(t,e),Object.defineProperty(t.prototype,"circleIndexStart",{get:function(){return this._circleIndexStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"circleIndexCount",{get:function(){return this._circleIndexCount},enumerable:!0,configurable:!0}),t.prototype.assignBufferInfo=function(e){var t=e;t._circleIndexStart=this._circleIndexStart,t._circleIndexCount=this._circleIndexCount},t.prototype.processFeatures=function(e,t){var r=this._circleVertexBuffer,i=this._circleIndexBuffer;this._circleIndexStart=i.index,this._circleIndexCount=0;var a=this.layer,n=this.zoom;e&&e.setExtent(this.layerExtent);for(var c=1,o=[1,1,1,1],l=1,u=0,s=1,d=[1,1,1,1],f=1,h=0,x=this._features;h<x.length;h++){var p=x[h],v=p.getGeometry(e);if(v){a.hasDataDrivenRadius&&(c=a.getPaintValue("circle-radius",n,p)),a.hasDataDrivenColor&&(o=a.getPaintValue("circle-color",n,p)),a.hasDataDrivenOpacity&&(l=a.getPaintValue("circle-opacity",n,p)),a.hasDataDrivenStrokeWidth&&(s=a.getPaintValue("circle-stroke-width",n,p)),a.hasDataDrivenStrokeColor&&(d=a.getPaintValue("circle-stroke-color",n,p)),a.hasDataDrivenStrokeOpacity&&(f=a.getPaintValue("circle-stroke-opacity",n,p)),a.hasDataDrivenBlur&&(u=a.getPaintValue("circle-blur",n,p));for(var y=0,g=v;y<g.length;y++){var D=g[y];if(D)for(var I=0,_=D;I<_.length;I++){var S=_[I],P=r.index;r.add(S.x,S.y,0,0,c,o,l,u,s,d,f),r.add(S.x,S.y,0,1,c,o,l,u,s,d,f),r.add(S.x,S.y,1,0,c,o,l,u,s,d,f),r.add(S.x,S.y,1,1,c,o,l,u,s,d,f),i.add(P+0,P+1,P+2),i.add(P+1,P+2,P+3),this._circleIndexCount+=6}}}}},t}(a)});