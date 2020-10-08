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

define(["require","exports","../../../core/ObjectPool"],(function(t,e,o){"use strict";return function(){function t(t,e,o,r){this.set(t,e,o,r)}return t.getId=function(t,e,o,r){return"object"==typeof t?t.level+"/"+t.row+"/"+t.col+"/"+t.world:t+"/"+e+"/"+o+"/"+r},Object.defineProperty(t.prototype,"key",{get:function(){return this},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"id",{get:function(){return this.toString()},set:function(t){this.set(t)},enumerable:!1,configurable:!0}),t.prototype.acquire=function(t,e,o,r){this.set(t,e,o,r)},t.prototype.contains=function(t){var e=t.level-this.level;return this.row===t.row>>e&&this.col===t.col>>e&&this.world===t.world},t.prototype.equals=function(t){return this.level===t.level&&this.row===t.row&&this.col===t.col&&this.world===t.world},t.prototype.clone=function(){return new t(this)},t.prototype.release=function(){this.level=0,this.row=0,this.col=0,this.world=0},t.prototype.set=function(t,e,o,r){if(null==t)this.level=0,this.row=0,this.col=0,this.world=0;else if("object"==typeof t)this.level=t.level||0,this.row=t.row||0,this.col=t.col||0,this.world=t.world||0;else if("string"==typeof t){var l=t.split("/"),i=l[0],s=l[1],n=l[2],h=l[3];this.level=parseFloat(i),this.row=parseFloat(s),this.col=parseFloat(n),this.world=parseFloat(h)}else this.level=+t,this.row=+e,this.col=+o,this.world=+r||0;return this},t.prototype.toString=function(){return this.level+"/"+this.row+"/"+this.col+"/"+this.world},t.prototype.getParentKey=function(){return this.level<=0?null:new t(this.level-1,this.row>>1,this.col>>1,this.world)},t.prototype.getChildKeys=function(){var e=this.level+1,o=this.row<<1,r=this.col<<1,l=this.world;return[new t(e,o,r,l),new t(e,o,r+1,l),new t(e,o+1,r,l),new t(e,o+1,r+1,l)]},t.prototype.compareRowMajor=function(t){return this.row<t.row?-1:this.row>t.row?1:this.col<t.col?-1:this.col>t.col?1:0},t.pool=new o(t,null,null,25,50),t}()}));