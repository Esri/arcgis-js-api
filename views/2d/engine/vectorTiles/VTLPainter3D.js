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

define(["require","exports","../brushes","./shaders/ProgramCache"],(function(e,r,t,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,r){this.spriteMosaic=e,this.glyphMosaic=r,this._brushCache=new Map}return e.prototype.dispose=function(){this._brushCache&&(this._brushCache.forEach((function(e){return e.dispose()})),this._brushCache=null),this._programCache&&(this._programCache.dispose(),this._programCache=null)},e.prototype.setContext=function(e){this._programCache||(this._programCache=new a.default(e))},e.prototype.drawTile=function(e,r,t){var a=this,s=e.context,n=t.layers;t.backgroundBucketIds.length>0&&(e.renderPass="background",t.backgroundBucketIds.forEach((function(s){return a._renderStyleLayer(s,e,r,t,!0)}))),s.setBlendingEnabled(!1),s.setDepthTestEnabled(!0),s.setDepthWriteEnabled(!0),s.setDepthFunction(515),e.renderPass="opaque";for(var o=n.length-1;o>=0;o--)this._renderStyleLayer(o,e,r,t,!1);s.setDepthWriteEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunctionSeparate(1,771,1,771),e.renderPass="translucent";for(o=0;o<n.length;o++)this._renderStyleLayer(o,e,r,t,!1);s.setDepthTestEnabled(!1),e.renderPass="symbol";for(o=0;o<n.length;o++)this._renderStyleLayer(o,e,r,t,!1);s.bindVAO()},e.prototype._renderStyleLayer=function(e,r,t,a,s){if(void 0===s&&(s=!1),s||t.layerData[e]){var n=r.renderPass,o=a.layers[e];if(void 0!==o){var i;switch(o.type){case 0:if("background"!==n)return;i="vtlBackground";break;case 1:if("opaque"!==n&&"translucent"!==r.renderPass)return;i="vtlFill";break;case 2:if("translucent"!==n)return;i="vtlLine";break;case 4:if("symbol"!==n)return;i="vtlCircle";break;case 3:if("symbol"!==n)return;i="vtlSymbol"}var h=r.displayLevel;void 0!==o.minzoom&&o.minzoom>h+1e-6||void 0!==o.maxzoom&&o.maxzoom<=h-1e-6||(r.styleLayerId=e,r.styleLayer=o,this.drawWithBrush(r,t,i))}}},e.prototype.drawWithBrush=function(e,r,a){if(!this._brushCache.has(a)){var s=t.vtlBrushes[a];this._brushCache.set(a,new s)}this._brushCache.get(a).drawMany(e,[r])},e.prototype.getVectorTileProgramCach=function(){return this._programCache},e}();r.default=s}));