// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./Bucket"],function(e,t,r,i,c){return function(e){function t(t,r,i,c){var a=e.call(this,t,r)||this;return a._circleVertexBuffer=i,a._circleIndexBuffer=c,a}return r(t,e),Object.defineProperty(t.prototype,"circleIndexStart",{get:function(){return this._circleIndexStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"circleIndexCount",{get:function(){return this._circleIndexCount},enumerable:!0,configurable:!0}),t.prototype.assignBufferInfo=function(e){var t=e;t._circleIndexStart=this._circleIndexStart,t._circleIndexCount=this._circleIndexCount},t.prototype.processFeatures=function(e,t){var r=this._circleVertexBuffer,i=this._circleIndexBuffer;this._circleIndexStart=i.index,this._circleIndexCount=0;var c=this.layer,a=this.zoom;e&&e.setExtent(this.layerExtent);for(var n=c.getPaintValue("circle-radius",a),o=c.getPaintValue("circle-color",a),l=c.getPaintValue("circle-opacity",a),u=c.getPaintValue("circle-blur",a),s=c.getPaintValue("circle-stroke-width",a),d=c.getPaintValue("circle-stroke-color",a),g=c.getPaintValue("circle-stroke-opacity",a),f=c.getPaintProperty("circle-radius"),p=c.getPaintProperty("circle-color"),x=c.getPaintProperty("circle-opacity"),y=c.getPaintProperty("circle-blur"),P=c.getPaintProperty("circle-stroke-width"),h=c.getPaintProperty("circle-stroke-color"),v=c.getPaintProperty("circle-stroke-opacity"),V=0,D=this._features;V<D.length;V++){var I=D[V],_=I.getGeometry(e);if(_){f&&f.isDataDriven&&(n=f.getValue(a,I)),p&&p.isDataDriven&&(o=p.getValue(a,I)),x&&x.isDataDriven&&(l=x.getValue(a,I)),y&&y.isDataDriven&&(u=y.getValue(a,I)),P&&P.isDataDriven&&(s=P.getValue(a,I)),h&&h.isDataDriven&&(d=h.getValue(a,I)),v&&v.isDataDriven&&(g=v.getValue(a,I));for(var b=0,k=_;b<k.length;b++){var S=k[b];if(S)for(var B=0,C=S;B<C.length;B++){var m=C[B],j=r.index;r.add(m.x,m.y,0,0,n,o,l,u,s,d,g),r.add(m.x,m.y,0,1,n,o,l,u,s,d,g),r.add(m.x,m.y,1,0,n,o,l,u,s,d,g),r.add(m.x,m.y,1,1,n,o,l,u,s,d,g),i.add(j+0,j+1,j+2),i.add(j+1,j+2,j+3),this._circleIndexCount+=6}}}}},t}(c)});