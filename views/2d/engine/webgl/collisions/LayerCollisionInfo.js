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

define(["require","exports","../../../../../core/Logger","../../../../../core/screenUtils","../../../../3d/support/mathUtils"],function(e,r,n,t,s){Object.defineProperty(r,"__esModule",{value:!0});var c=function(e,r){return e.order-r.order},o=function(e,r){return e.index-r.index},i=n.getLogger("esri/views/2d/engine/webgl/collisions/CollisionEngine");function a(r){return function(e){return t.pt2px(r.getSize(e))}}function f(e){if(!e)return null;for(var r=0,n=e;r<n.length;r++){var t=n[r];if("size"===t.type)return a(t)}return null}r.createLabelVVEvaluator=f;var l=function(){function v(e,r,n,l){var t=this;this._vvHandle=null;var o=e.geometryType,i=e.labelingInfo,a=e.renderer;this.vvEval=f("visualVariables"in a&&a.visualVariables),this._vvHandle=e.watch("visualVariables",function(e){t.vvEval=f(e)});var u=i.map(function(e){return n=l,t=!!(r=e).minScale,o=!!r.maxScale,i=t&&n.scaleToZoom(r.minScale)||0,a=o&&n.scaleToZoom(r.maxScale)||255,{minZoom:s.clamp(Math.floor(10*i),0,255),maxZoom:s.clamp(Math.floor(10*a),0,255)};var r,n,t,o,i,a});this.geometryType=o,this.index=r,this.order=n,this.zoomRanges=u}return v.prototype.hasVV=function(){return!!this.vvEval},v.prototype.allOrNothing=function(){return!("polyline"===this.geometryType)},v.prototype.destroy=function(){this._vvHandle.remove()},v.create=function(e,r,n,t){for(var o=n.sort(c),i=!1,a=-1,l=0,u=o;l<u.length;l++){var s=u[l];!i&&s.order>r&&(a=s.index,i=!0),i&&s.index++}return i||(a=o.length),new v(e,a,r,t)},v.delete=function(e,r){for(var n=r.sort(o),t=e+1;t<n.length;t++)r[t].index--;r[e].destroy(),r.splice(e,1)},v.find=function(e,r){for(var n=0,t=r;n<t.length;n++){var o=t[n];if(o.index===e)return o}return i.error("Tried to get a LayerCollisionInfo for an index that doesn't exist!"),null},v}();r.default=l});