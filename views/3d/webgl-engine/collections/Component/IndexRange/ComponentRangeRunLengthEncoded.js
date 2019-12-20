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

define(["require","exports"],function(n,t){function e(n){var t=new Array;if(0===n.length)return t;for(var e=n[0],r=1,o=1;o<n.length;o++){var i=n[o];e+r===i?r+=1:(t.push(e),t.push(r),e=i,r=1)}return t.push(e),t.push(r),t}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function n(n){this._totalCount=n,this._indexRanges=[0,n]}return n.prototype.componentCount=function(){for(var n=this._indexRanges,t=0,e=0;e<n.length;e+=2)t+=n[e+1];return t},n.prototype.reset=function(n){"all"===n||n.length===this._totalCount?this._indexRanges=[0,this._totalCount]:this._indexRanges=e(n)},n.prototype.forEachComponent=function(n){for(var t=this._indexRanges,e=0;e<t.length;e+=2)for(var r=t[e],o=r+t[e+1],i=r;i<o;i++)if(!n(i))return!1;return!0},n.prototype.forEachComponentRange=function(n){for(var t=this._indexRanges,e=0;e<t.length;e+=2){var r=t[e];if(!n(r,r+t[e+1]))return!1}return!0},n.prototype.computeOffsetRanges=function(n){for(var t=new Array(this._indexRanges.length),e=this._indexRanges,r=0;r<e.length;r+=2){var o=e[r],i=o+e[r+1],a=n[o],u=n[i];t[r]=a,t[r+1]=u-a}return t},n}();t.ComponentRangeRunLengthEncoded=r});