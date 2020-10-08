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

define(["require","exports","tslib","./BaseBucket"],(function(e,r,t,i){"use strict";return function(e){function r(r,t,i,a){var n=e.call(this,r,t)||this;return n.type=4,n._circleVertexBuffer=i,n._circleIndexBuffer=a,n}return t.__extends(r,e),Object.defineProperty(r.prototype,"circleIndexStart",{get:function(){return this._circleIndexStart},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"circleIndexCount",{get:function(){return this._circleIndexCount},enumerable:!1,configurable:!0}),r.prototype.processFeatures=function(e){var r=this._circleVertexBuffer,t=this._circleIndexBuffer;this._circleIndexStart=3*t.index,this._circleIndexCount=0;var i=this.layer,a=this.zoom;e&&e.setExtent(this.layerExtent);for(var n=1,c=[1,1,1,1],l=1,s=0,u=1,o=[1,1,1,1],f=1,h=0,d=this._features;h<d.length;h++){var y=d[h],x=y.getGeometry(e);if(x){i.hasDataDrivenRadius&&(n=i.getPaintValue("circle-radius",a,y)),i.hasDataDrivenColor&&(c=i.getPaintValue("circle-color",a,y)),i.hasDataDrivenOpacity&&(l=i.getPaintValue("circle-opacity",a,y)),i.hasDataDrivenStrokeWidth&&(u=i.getPaintValue("circle-stroke-width",a,y)),i.hasDataDrivenStrokeColor&&(o=i.getPaintValue("circle-stroke-color",a,y)),i.hasDataDrivenStrokeOpacity&&(f=i.getPaintValue("circle-stroke-opacity",a,y)),i.hasDataDrivenBlur&&(s=i.getPaintValue("circle-blur",a,y));for(var g=0,_=x;g<_.length;g++){var v=_[g];if(v)for(var I=0,p=v;I<p.length;I++){var B=p[I],D=r.index;r.add(B.x,B.y,0,0,n,c,l,s,u,o,f),r.add(B.x,B.y,0,1,n,c,l,s,u,o,f),r.add(B.x,B.y,1,0,n,c,l,s,u,o,f),r.add(B.x,B.y,1,1,n,c,l,s,u,o,f),t.add(D+0,D+1,D+2),t.add(D+1,D+2,D+3),this._circleIndexCount+=6}}}}},r.prototype.serialize=function(){var e=6;e+=this.layerIndices.length,e+=this._circleVertexBuffer.array.length,e+=this._circleIndexBuffer.array.length;var r=0,t=new Uint32Array(e),i=new Int32Array(t.buffer);t[r++]=this.type,t[r++]=this.layerIndices.length;for(var a=0;a<this.layerIndices.length;a++)t[r++]=this.layerIndices[a];t[r++]=this._circleIndexStart,t[r++]=this._circleIndexCount,t[r++]=this._circleVertexBuffer.array.length;for(var n=0;n<this._circleVertexBuffer.array.length;n++)i[r++]=this._circleVertexBuffer.array[n];t[r++]=this._circleIndexBuffer.array.length;for(var c=0;c<this._circleIndexBuffer.array.length;c++)t[r++]=this._circleIndexBuffer.array[c];return t.buffer},r}(i)}));