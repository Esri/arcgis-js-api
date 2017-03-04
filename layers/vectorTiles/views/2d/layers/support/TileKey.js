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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectPool"],function(t,e,o){var r=function(){function t(t,e,o,r){if("string"==typeof t){var l=t.split("/"),i=l[0],s=l[1],n=l[2],h=l[3];this.level=+i,this.row=+s,this.col=+n,this.world=+h||0}else t&&"object"==typeof t?(this.level=t.level||0,this.row=t.row||0,this.col=t.col||0,this.world=t.world||0):(this.level=+t||0,this.row=+e||0,this.col=+o||0,this.world=+r||0)}return t.from=function(e,o,r,l){return t.pool.acquire(e,o,r,l)},t.getId=function(t,e,o,r){return"object"==typeof t?t.level+"/"+t.row+"/"+t.col+"/"+t.world:t+"/"+e+"/"+o+"/"+r},Object.defineProperty(t.prototype,"id",{get:function(){return t.getId(this)},enumerable:!0,configurable:!0}),t.prototype.equals=function(t){return this.level===t.level&&this.row===t.row&&this.col===t.col&&this.world===t.world},t.prototype.release=function(){this.level=0,this.row=0,this.col=0,this.world=0},t.prototype.set=function(t,e,o,r){var l=typeof t;if("object"===l)return t;if("string"===l){var i=t.split("/"),s=i[0],n=i[1],h=i[2],c=i[3];this.level=parseFloat(s),this.row=parseFloat(n),this.col=parseFloat(h),this.world=parseFloat(c)}else this.level=t,this.row=e,this.col=o,this.world=r;return this},t.prototype.toString=function(){return this.level+"/"+this.row+"/"+this.col+"/"+this.world},t}();return r.pool=new o(r,!0,null,25,50),r});