// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./Rect"],function(h,e,t){var i=function(){function h(h,e){this._width=0,this._height=0,this._free=[],this._width=h,this._height=e,this._free.push(new t(0,0,h,e))}return h.prototype.allocate=function(h,e){for(var i=null,r=-1,s=0;s<this._free.length;++s){var n=this._free[s];h<=n.width&&e<=n.height&&(null===i||n.y<=i.y&&n.x<=i.x)&&(i=n,r=s)}return null===i?new t:(this._free.splice(r,1),i.width<i.height?(i.width>h&&this._free.push(new t(i.x+h,i.y,i.width-h,e)),i.height>e&&this._free.push(new t(i.x,i.y+e,i.width,i.height-e))):(i.width>h&&this._free.push(new t(i.x+h,i.y,i.width-h,i.height)),i.height>e&&this._free.push(new t(i.x,i.y+e,h,i.height-e))),new t(i.x,i.y,h,e))},h.prototype.release=function(h){for(var e=0;e<this._free.length;++e){var t=this._free[e];if(t.y===h.y&&t.height===h.height&&t.x+t.width===h.x)t.width+=h.width;else if(t.x===h.x&&t.width===h.width&&t.y+t.height===h.y)t.height+=h.height;else if(h.y===t.y&&h.height===t.height&&h.x+h.width===t.x)t.x=h.x,t.width+=h.width;else{if(h.x!==t.x||h.width!==t.width||h.y+h.height!==t.y)continue;t.y=h.y,t.height+=h.height}this._free.splice(e,1),this.release(h)}this._free.push(h)},h}();return i});