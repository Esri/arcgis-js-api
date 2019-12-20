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

define(["require","exports","../../../../../core/Logger","../../../../../core/mathUtils","../../../../../core/screenUtils","./visualVariableSimpleUtils"],function(e,r,n,c,t,i){Object.defineProperty(r,"__esModule",{value:!0});var f=function(e,r){return e.order-r.order},o=function(e,r){return e.index-r.index},a=n.getLogger("esri/views/2d/engine/webgl/collisions/CollisionEngine");function l(r){return function(e){return t.pt2px(i.getSizeForValueSimple(e,r))}}function d(e){if(!e)return null;for(var r=0,n=e;r<n.length;r++){var t=n[r];if("size"===t.type)return l(t)}return null}r.createLabelVVEvaluator=d;var s=function(){function v(e,r,n,l){var t=this;this._vvHandle=null;var i=e.layer,o=i.geometryType,a=i.labelingInfo,s=i.renderer;this.vvEval=d("visualVariables"in s&&s.visualVariables),this._vvHandle=i.watch("visualVariables",function(e){t.vvEval=d(e)});var u=a.map(function(e){return n=l,t=!!(r=e).minScale,i=!!r.maxScale,o=t&&n.scaleToZoom(r.minScale)||0,a=i&&n.scaleToZoom(r.maxScale)||255,{minZoom:c.clamp(Math.floor(10*o),0,255),maxZoom:c.clamp(Math.floor(10*a),0,255)};var r,n,t,i,o,a});this.layerView=e,this.geometryType=o,this.index=r,this.order=n,this.zoomRanges=u,this.layerView=e}return v.prototype.hasVV=function(){return!!this.vvEval},v.prototype.allOrNothing=function(){return!("polyline"===this.geometryType)},v.prototype.destroy=function(){this._vvHandle.remove()},v.create=function(e,r,n,t){for(var i=n.sort(f),o=!1,a=-1,l=0,s=i;l<s.length;l++){var u=s[l];!o&&u.order>r&&(a=u.index,o=!0),o&&u.index++}return o||(a=i.length),new v(e,a,r,t)},v.delete=function(e,r){for(var n=r.sort(o),t=e+1;t<n.length;t++)r[t].index--;r[e].destroy(),r.splice(e,1)},v.find=function(e,r){for(var n=0,t=r;n<t.length;n++){var i=t[n];if(i.index===e)return i}return a.error("Tried to get a LayerCollisionInfo for an index that doesn't exist!"),null},v}();r.default=s});