// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./Rect"],(function(e,t,h){return function(){function e(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new h(0,0,e,t))}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),e.prototype.allocate=function(e,t){if(e>this._width||t>this._height)return new h;for(var i=null,r=-1,n=0;n<this._free.length;++n){var s=this._free[n];e<=s.width&&t<=s.height&&(null===i||s.y<=i.y&&s.x<=i.x)&&(i=s,r=n)}return null===i?new h:(this._free.splice(r,1),i.width<i.height?(i.width>e&&this._free.push(new h(i.x+e,i.y,i.width-e,t)),i.height>t&&this._free.push(new h(i.x,i.y+t,i.width,i.height-t))):(i.width>e&&this._free.push(new h(i.x+e,i.y,i.width-e,i.height)),i.height>t&&this._free.push(new h(i.x,i.y+t,e,i.height-t))),new h(i.x,i.y,e,t))},e.prototype.release=function(e){for(var t=0;t<this._free.length;++t){var h=this._free[t];if(h.y===e.y&&h.height===e.height&&h.x+h.width===e.x)h.width+=e.width;else if(h.x===e.x&&h.width===e.width&&h.y+h.height===e.y)h.height+=e.height;else if(e.y===h.y&&e.height===h.height&&e.x+e.width===h.x)h.x=e.x,h.width+=e.width;else{if(e.x!==h.x||e.width!==h.width||e.y+e.height!==h.y)continue;h.y=e.y,h.height+=e.height}this._free.splice(t,1),this.release(e)}this._free.push(e)},e}()}));