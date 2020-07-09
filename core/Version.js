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

define(["require","exports","./Error"],(function(t,o,e){Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(t,o,e){void 0===e&&(e=""),this.major=t,this.minor=o,this._context=e}return t.prototype.lessThan=function(t,o){return this.major<t||t===this.major&&this.minor<o},t.prototype.since=function(t,o){return!this.lessThan(t,o)},t.prototype.validate=function(t){if(this.major!==t.major){var o=this._context&&this._context+":",n=this._context&&this._context+" ";throw new e(o+"unsupported-version","Required major "+n+"version is '"+this.major+"', but got '${version.major}.${version.minor}'",{version:t})}},t.prototype.clone=function(){return new t(this.major,this.minor,this._context)},t.parse=function(o,n){void 0===n&&(n="");var r=o.split("."),i=r[0],s=r[1],a=/^\s*\d+\s*$/;if(!i||!i.match||!i.match(a))throw new e((n&&n+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:o});if(!s||!s.match||!s.match(a))throw new e((n&&n+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:o});return new t(parseInt(i,10),parseInt(s,10),n)},t}();o.Version=n}));