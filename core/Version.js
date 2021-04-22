/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","./Error"],(function(t,n){"use strict";let e=function(){function t(t,n,e=""){this.major=t,this.minor=n,this._context=e}var e=t.prototype;return e.lessThan=function(t,n){return this.major<t||t===this.major&&this.minor<n},e.since=function(t,n){return!this.lessThan(t,n)},e.validate=function(t){if(this.major!==t.major){const e=this._context&&this._context+":",o=this._context&&this._context+" ";throw new n(e+"unsupported-version",`Required major ${o}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:t})}},e.clone=function(){return new t(this.major,this.minor,this._context)},t.parse=function(e,o=""){const[i,r]=e.split("."),s=/^\s*\d+\s*$/;if(!i||!i.match||!i.match(s)){throw new n((o&&o+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e})}if(!r||!r.match||!r.match(s)){throw new n((o&&o+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e})}return new t(parseInt(i,10),parseInt(r,10),o)},t}();t.Version=e,Object.defineProperty(t,"__esModule",{value:!0})}));
