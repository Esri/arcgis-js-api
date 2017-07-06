// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./Error"],function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,r,t){void 0===t&&(t=""),this.major=e,this.minor=r,this._context=t}return e.prototype.validate=function(e){if(this.major!==e.major){var r=this._context&&this._context+":",o=this._context&&this._context+" ";throw new t(r+"unsupported-version","Required major "+o+"version is '"+this.major+"', but got '${version.major}.${version.minor}'",{version:e})}},e.parse=function(r,o){void 0===o&&(o="");var i=r.split("."),n=i[0],s=i[1],a=/^\s*\d+\s*$/;if(!n||!n.match||!n.match(a)){var v=o&&o+":";throw new t(v+"invalid-version","Expected major version to be a number, but got '${version}'",{version:r})}if(!s||!s.match||!s.match(a)){var v=o&&o+":";throw new t(v+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:r})}var u=parseInt(n,10),c=parseInt(s,10);return new e(u,c,o)},e}();r.Version=o});