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

define(["require","exports","../../../lib/ComponentUtils"],(function(t,n,e){Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t){this._totalCount=t,this.isVisibleBit=!1,this.data=new Uint32Array(0)}return t.prototype.componentCount=function(){var t=0;return this.forEachComponent((function(){return t++,!0})),t},t.prototype.reset=function(t){var n=this;"all"===t?e.unhideAllComponents(this):(e.hideAllComponents(this),t.forEach((function(t){e.updateVisibilityWithCount(n,n._totalCount,t,!0)})))},t.prototype.forEachComponent=function(t){for(var n=0;n<this._totalCount;n++)if(e.getVisibility(this,n)&&!t(n))return!1;return!0},t.prototype.forEachComponentRange=function(t){for(var n=0,o=!1,i=0;i<this._totalCount;i++)if(e.getVisibility(this,i))o||(n=i,o=!0);else if(o){if(!t(n,i))return!1;n=i,o=!1}return!(o&&!t(n,this._totalCount))},t.prototype.computeOffsetRanges=function(t){var n=e.generateVisibleIndexRanges(this,t);if(void 0===n)return[t[0],t[t.length-1]];for(var o=new Array(2*n.length),i=0;i<n.length;i++)o[2*i]=n[i][0],o[2*i+1]=n[i][1]-n[i][0];return o},t}();n.ComponentRangeBitSet=o}));