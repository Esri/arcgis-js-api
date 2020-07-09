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

define(["require","exports","tslib","../../../../../core/Logger","../../../../../core/mathUtils","../../../../../core/screenUtils","./visualVariableSimpleUtils"],(function(e,r,n,t,i,o,a){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e,r){return e.order-r.order},u=function(e,r){return e.index-r.index},s=t.getLogger("esri/views/2d/engine/webgl/collisions/CollisionEngine");function c(e,r){var n=!!e.minScale,t=!!e.maxScale,o=n&&r.scaleToZoom(e.minScale)||0,a=t&&r.scaleToZoom(e.maxScale)||255;return{deconflictionStrategy:e.deconflictionStrategy,minZoom:i.clamp(Math.floor(10*o),0,255),maxZoom:i.clamp(Math.floor(10*a),0,255)}}function f(e){return function(r){return o.pt2px(a.getSizeForValueSimple(r,e))}}function v(e){if(!e)return null;for(var r=0,n=e;r<n.length;r++){var t=n[r];if("size"===t.type)return f(t)}return null}r.createLabelVVEvaluator=v;var d=function(){function e(e,r,t,i){var o=this;this._vvHandle=null;var a=e.layer,l=a.geometryType,u=a.labelingInfo,s=a.renderer;s&&(this.vvEval=v("visualVariables"in s&&s.visualVariables)),this._vvHandle=a.watch("renderer",(function(e){e&&(o.vvEval=v("visualVariables"in e&&e.visualVariables))}));var f=a.featureReduction,d=f&&"cluster"===f.type&&f.labelingInfo,h=(u||[]).map((function(e){return c(e,i)})),g=(d||[]).map((function(e){return c(e,i)}));this.layerView=e,this.geometryType=l,this.index=r,this.order=t,this.zoomRanges=n.__spreadArrays(h,g),this.layerView=e}return e.prototype.hasVV=function(){return!!this.vvEval},e.prototype.allOrNothing=function(){return!("polyline"===this.geometryType)},e.prototype.destroy=function(){this._vvHandle.remove()},e.create=function(r,n,t,i){for(var o=t.sort(l),a=!1,u=-1,s=0,c=o;s<c.length;s++){var f=c[s];!a&&f.order>n&&(u=f.index,a=!0),a&&f.index++}return a||(u=o.length),new e(r,u,n,i)},e.delete=function(e,r){for(var n=r.sort(u),t=e+1;t<n.length;t++)r[t].index--;r[e].destroy(),r.splice(e,1)},e.find=function(e,r){for(var n=0,t=r;n<t.length;n++){var i=t[n];if(i.index===e)return i}return s.error("Tried to get a LayerCollisionInfo for an index that doesn't exist!"),null},e}();r.default=d}));