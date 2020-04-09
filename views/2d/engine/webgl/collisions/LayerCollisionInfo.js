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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/Logger","../../../../../core/mathUtils","../../../../../core/screenUtils","./visualVariableSimpleUtils"],(function(e,r,n,t,i,o){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,r){return e.order-r.order},l=function(e,r){return e.index-r.index},s=n.getLogger("esri/views/2d/engine/webgl/collisions/CollisionEngine");function u(e){return function(r){return i.pt2px(o.getSizeForValueSimple(r,e))}}function v(e){if(!e)return null;for(var r=0,n=e;r<n.length;r++){var t=n[r];if("size"===t.type)return u(t)}return null}r.createLabelVVEvaluator=v;var c=function(){function e(e,r,n,i){var o=this;this._vvHandle=null;var a=e.layer,l=a.geometryType,s=a.labelingInfo,u=a.renderer;a.renderer&&(this.vvEval=v("visualVariables"in u&&u.visualVariables)),this._vvHandle=a.watch("renderer",(function(e){a.renderer&&(o.vvEval=v("visualVariables"in e&&e.visualVariables))}));var c=s.map((function(e){return n=i,o=!!(r=e).minScale,a=!!r.maxScale,l=o&&n.scaleToZoom(r.minScale)||0,s=a&&n.scaleToZoom(r.maxScale)||255,{minZoom:t.clamp(Math.floor(10*l),0,255),maxZoom:t.clamp(Math.floor(10*s),0,255)};var r,n,o,a,l,s}));this.layerView=e,this.geometryType=l,this.index=r,this.order=n,this.zoomRanges=c,this.layerView=e}return e.prototype.hasVV=function(){return!!this.vvEval},e.prototype.allOrNothing=function(){return!("polyline"===this.geometryType)},e.prototype.destroy=function(){this._vvHandle.remove()},e.create=function(r,n,t,i){for(var o=t.sort(a),l=!1,s=-1,u=0,v=o;u<v.length;u++){var c=v[u];!l&&c.order>n&&(s=c.index,l=!0),l&&c.index++}return l||(s=o.length),new e(r,s,n,i)},e.delete=function(e,r){for(var n=r.sort(l),t=e+1;t<n.length;t++)r[t].index--;r[e].destroy(),r.splice(e,1)},e.find=function(e,r){for(var n=0,t=r;n<t.length;n++){var i=t[n];if(i.index===e)return i}return s.error("Tried to get a LayerCollisionInfo for an index that doesn't exist!"),null},e}();r.default=c}));