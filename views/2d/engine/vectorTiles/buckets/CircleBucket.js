/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","./BaseBucket"],(function(e,t){"use strict";return function(t){function r(e,r,n,i){var c;return(c=t.call(this,e,r)||this).type=4,c._circleVertexBuffer=n,c._circleIndexBuffer=i,c}e._inheritsLoose(r,t);var n=r.prototype;return n.processFeatures=function(e){const t=this._circleVertexBuffer,r=this._circleIndexBuffer;this._circleIndexStart=3*r.index,this._circleIndexCount=0;const n=this.layer,i=this.zoom;e&&e.setExtent(this.layerExtent);for(const c of this._features){const s=c.getGeometry(e);if(!s)continue;const l=n.circleMaterial.encodeAttributes(c,i,n);for(const e of s)if(e)for(const n of e){const e=t.index;t.add(n.x,n.y,0,0,l),t.add(n.x,n.y,0,1,l),t.add(n.x,n.y,1,0,l),t.add(n.x,n.y,1,1,l),r.add(e+0,e+1,e+2),r.add(e+1,e+2,e+3),this._circleIndexCount+=6}}},n.serialize=function(){let e=6;e+=this.layerUIDs.length,e+=this._circleVertexBuffer.array.length,e+=this._circleIndexBuffer.array.length;const t=new Uint32Array(e),r=new Int32Array(t.buffer);let n=0;t[n++]=this.type,t[n++]=this.layerUIDs.length;for(let i=0;i<this.layerUIDs.length;i++)t[n++]=this.layerUIDs[i];t[n++]=this._circleIndexStart,t[n++]=this._circleIndexCount,t[n++]=this._circleVertexBuffer.array.length;for(let i=0;i<this._circleVertexBuffer.array.length;i++)r[n++]=this._circleVertexBuffer.array[i];t[n++]=this._circleIndexBuffer.array.length;for(let i=0;i<this._circleIndexBuffer.array.length;i++)t[n++]=this._circleIndexBuffer.array[i];return t.buffer},e._createClass(r,[{key:"circleIndexStart",get:function(){return this._circleIndexStart}},{key:"circleIndexCount",get:function(){return this._circleIndexCount}}]),r}(t)}));
