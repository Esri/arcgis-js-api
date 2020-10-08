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

define(["require","exports","./colorUtils","./core/mathUtils","./core/maybe","./core/accessorSupport/ensureType"],(function(t,r,n,o,i,e){"use strict";function s(t){return o.clamp(e.ensureInteger(t),0,255)}function a(t,r,n){return t=Number(t),isNaN(t)?n:t<r?r:t>n?n:t}var u=function(){function t(t){this.r=255,this.g=255,this.b=255,this.a=1,t&&this.setColor(t)}return t.blendColors=function(r,n,o,i){return void 0===i&&(i=new t),i.r=Math.round(r.r+(n.r-r.r)*o),i.g=Math.round(r.g+(n.g-r.g)*o),i.b=Math.round(r.b+(n.b-r.b)*o),i.a=r.a+(n.a-r.a)*o,i._sanitize()},t.fromRgb=function(r,o){var i=r.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(i){var e=i[2].split(/\s*,\s*/),s=i[1];if("rgb"===s&&3===e.length||"rgba"===s&&4===e.length){var a=e[0];if("%"===a.charAt(a.length-1)){var u=e.map((function(t){return 2.56*parseFloat(t)}));return 4===e.length&&(u[3]=parseFloat(e[3])),t.fromArray(u,o)}return t.fromArray(e.map((function(t){return parseFloat(t)})),o)}if("hsl"===s&&3===e.length||"hsla"===s&&4===e.length)return t.fromArray(n.hsla2rgba(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),o)}return null},t.fromHex=function(r,n){void 0===n&&(n=new t);var o=4===r.length?4:8,i=(1<<o)-1,e=Number("0x"+r.substr(1));return isNaN(e)?null:(["b","g","r"].forEach((function(t){var r=e&i;e>>=o,n[t]=4===o?17*r:r})),n.a=1,n)},t.fromArray=function(r,n){return void 0===n&&(n=new t),n._set(Number(r[0]),Number(r[1]),Number(r[2]),Number(r[3])),isNaN(n.a)&&(n.a=1),n._sanitize()},t.fromString=function(r,o){var i=n.getNamedColor(r);return i&&t.fromArray(i,o)||t.fromRgb(r,o)||t.fromHex(r,o)},t.fromJSON=function(r){return r&&new t([r[0],r[1],r[2],r[3]/255])},t.toUnitRGB=function(t){return i.isSome(t)?[t.r/255,t.g/255,t.b/255]:null},t.toUnitRGBA=function(t){return i.isSome(t)?[t.r/255,t.g/255,t.b/255,null!=t.a?t.a:1]:null},Object.defineProperty(t.prototype,"isBright",{get:function(){return.299*this.r+.587*this.g+.114*this.b>=127},enumerable:!1,configurable:!0}),t.prototype.setColor=function(r){var n,o,i,e;return"string"==typeof r?t.fromString(r,this):Array.isArray(r)?t.fromArray(r,this):(this._set(null!==(n=r.r)&&void 0!==n?n:0,null!==(o=r.g)&&void 0!==o?o:0,null!==(i=r.b)&&void 0!==i?i:0,null!==(e=r.a)&&void 0!==e?e:1),r instanceof t||this._sanitize()),this},t.prototype.toRgb=function(){return[this.r,this.g,this.b]},t.prototype.toRgba=function(){return[this.r,this.g,this.b,this.a]},t.prototype.toHex=function(){var t=this.r.toString(16),r=this.g.toString(16),n=this.b.toString(16);return"#"+(t.length<2?"0"+t:t)+(r.length<2?"0"+r:r)+(n.length<2?"0"+n:n)},t.prototype.toCss=function(t){void 0===t&&(t=!1);var r=this.r+", "+this.g+", "+this.b;return t?"rgba("+r+", "+this.a+")":"rgb("+r+")"},t.prototype.toString=function(){return this.toCss(!0)},t.prototype.toJSON=function(){return this.toArray()},t.prototype.toArray=function(t){void 0===t&&(t=0);var r=s(this.r),n=s(this.g),o=s(this.b);return 0===t||1!==this.a?[r,n,o,s(255*this.a)]:[r,n,o]},t.prototype.clone=function(){return new t(this.toRgba())},t.prototype.hash=function(){return this.r<<24|this.g<<16|this.b<<8|255*this.a},t.prototype._sanitize=function(){return this.r=Math.round(a(this.r,0,255)),this.g=Math.round(a(this.g,0,255)),this.b=Math.round(a(this.b,0,255)),this.a=a(this.a,0,1),this},t.prototype._set=function(t,r,n,o){this.r=t,this.g=r,this.b=n,this.a=o},t}();return u.prototype.declaredClass="esri.Color",u}));