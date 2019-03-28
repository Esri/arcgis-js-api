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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/Logger","../../../../../core/screenUtils","../../../../3d/support/mathUtils"],function(e,r,n,t,v){Object.defineProperty(r,"__esModule",{value:!0});var f=function(e,r){return e.order-r.order},o=function(e,r){return e.index-r.index},i=n.getLogger("esri/views/2d/engine/webgl/collisions/CollisionEngine");function a(r){return function(e){return t.pt2px(r.getSize(e))}}function d(e){if(!e)return null;for(var r=0,n=e;r<n.length;r++){var t=n[r];if("size"===t.type)return a(t)}return null}r.createLabelVVEvaluator=d;var l=function(){function c(e,r,n,t,l){var o=this;this._vvHandle=null;var i=e.geometryType,a=e.labelingInfo,u=e.renderer;this.vvEval=d("visualVariables"in u&&u.visualVariables),this._vvHandle=e.watch("visualVariables",function(e){o.vvEval=d(e)});var s=a.map(function(e){return n=l,t=!!(r=e).minScale,o=!!r.maxScale,i=t&&n.scaleToZoom(r.minScale)||0,a=o&&n.scaleToZoom(r.maxScale)||255,{minZoom:v.clamp(Math.floor(10*i),0,255),maxZoom:v.clamp(Math.floor(10*a),0,255)};var r,n,t,o,i,a});this.geometryType=i,this.index=n,this.order=t,this.zoomRanges=s,this.layerView=r}return c.prototype.hasVV=function(){return!!this.vvEval},c.prototype.allOrNothing=function(){return!("polyline"===this.geometryType)},c.prototype.destroy=function(){this._vvHandle.remove()},c.create=function(e,r,n,t,o){for(var i=t.sort(f),a=!1,l=-1,u=0,s=i;u<s.length;u++){var v=s[u];!a&&v.order>n&&(l=v.index,a=!0),a&&v.index++}return a||(l=i.length),new c(e,r,l,n,o)},c.delete=function(e,r){for(var n=r.sort(o),t=e+1;t<n.length;t++)r[t].index--;r[e].destroy(),r.splice(e,1)},c.find=function(e,r){for(var n=0,t=r;n<t.length;n++){var o=t[n];if(o.index===e)return o}return i.error("Tried to get a LayerCollisionInfo for an index that doesn't exist!"),null},c}();r.default=l});