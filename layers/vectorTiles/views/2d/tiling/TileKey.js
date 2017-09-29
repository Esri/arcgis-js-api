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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["require","exports","../../../core/ObjectPool"],function(t,o,e){var l=function(){function t(t,o,e,l){if("string"==typeof t){var r=t.split("/"),i=r[0],s=r[1],h=r[2],n=r[3];this.level=+i,this.row=+s,this.col=+h,this.world=+n||0}else t&&"object"==typeof t?(this.level=t.level||0,this.row=t.row||0,this.col=t.col||0,this.world=t.world||0):(this.level=+t||0,this.row=+o||0,this.col=+e||0,this.world=+l||0)}return t.from=function(o,e,l,r){return t.pool.acquire(o,e,l,r)},t.getId=function(t,o,e,l){return"object"==typeof t?t.level+"/"+t.row+"/"+t.col+"/"+t.world:t+"/"+o+"/"+e+"/"+l},Object.defineProperty(t.prototype,"id",{get:function(){return t.getId(this)},enumerable:!0,configurable:!0}),t.prototype.equals=function(t){return this.level===t.level&&this.row===t.row&&this.col===t.col&&this.world===t.world},t.prototype.release=function(){this.level=0,this.row=0,this.col=0,this.world=0},t.prototype.set=function(t,o,e,l){var r=typeof t;if("object"===r)this.level=t.level||0,this.row=t.row||0,this.col=t.col||0,this.world=t.world||0;else if("string"===r){var i=t.split("/"),s=i[0],h=i[1],n=i[2],c=i[3];this.level=parseFloat(s),this.row=parseFloat(h),this.col=parseFloat(n),this.world=parseFloat(c)}else this.level=t,this.row=o,this.col=e,this.world=l;return this},t.prototype.toString=function(){return this.level+"/"+this.row+"/"+this.col+"/"+this.world},t.pool=new e(t,!0,null,25,50),t}();return l});