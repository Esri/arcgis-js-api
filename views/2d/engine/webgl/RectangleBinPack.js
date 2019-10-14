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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./Rect"],function(e,t,f){return function(){function e(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new f.default(0,0,e,t))}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),e.prototype.allocate=function(e,t){if(e>this._width||t>this._height)return new f.default;for(var h=null,i=-1,r=0;r<this._free.length;++r){var n=this._free[r];e<=n.width&&t<=n.height&&(null===h||n.y<=h.y&&n.x<=h.x)&&(h=n,i=r)}return null===h?new f.default:(this._free.splice(i,1),h.width<h.height?(h.width>e&&this._free.push(new f.default(h.x+e,h.y,h.width-e,t)),h.height>t&&this._free.push(new f.default(h.x,h.y+t,h.width,h.height-t))):(h.width>e&&this._free.push(new f.default(h.x+e,h.y,h.width-e,h.height)),h.height>t&&this._free.push(new f.default(h.x,h.y+t,e,h.height-t))),new f.default(h.x,h.y,e,t))},e.prototype.release=function(e){for(var t=0;t<this._free.length;++t){var h=this._free[t];if(h.y===e.y&&h.height===e.height&&h.x+h.width===e.x)h.width+=e.width;else if(h.x===e.x&&h.width===e.width&&h.y+h.height===e.y)h.height+=e.height;else if(e.y===h.y&&e.height===h.height&&e.x+e.width===h.x)h.x=e.x,h.width+=e.width;else{if(e.x!==h.x||e.width!==h.width||e.y+e.height!==h.y)continue;h.y=e.y,h.height+=e.height}this._free.splice(t,1),this.release(e)}this._free.push(e)},e}()});