// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","../../../core/ObjectPool"],function(t,o,e){return function(){function t(t,o,e,r){this.set(t,o,e,r)}return t.from=function(o,e,r,i){return t.pool.acquire(o,e,r,i)},t.getId=function(t,o,e,r){return"object"==typeof t?t.level+"/"+t.row+"/"+t.col+"/"+t.world:t+"/"+o+"/"+e+"/"+r},Object.defineProperty(t.prototype,"key",{get:function(){return this},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"id",{get:function(){return this.toString()},enumerable:!0,configurable:!0}),t.prototype.equals=function(t){return this.level===t.level&&this.row===t.row&&this.col===t.col&&this.world===t.world},t.prototype.release=function(){this.level=0,this.row=0,this.col=0,this.world=0},t.prototype.set=function(t,o,e,r){if(null==t)this.level=0,this.row=0,this.col=0,this.world=0;else if("object"==typeof t)this.level=t.level||0,this.row=t.row||0,this.col=t.col||0,this.world=t.world||0;else if("string"==typeof t){var i=t.split("/"),l=i[0],n=i[1],s=i[2],c=i[3];this.level=parseFloat(l),this.row=parseFloat(n),this.col=parseFloat(s),this.world=parseFloat(c)}else this.level=+t,this.row=+o,this.col=+e,this.world=+r||0;return this},t.prototype.toString=function(){return this.level+"/"+this.row+"/"+this.col+"/"+this.world},t.prototype.getChildKeys=function(){var o=this.level+1,e=this.row<<1,r=this.col<<1,i=this.world;return[t.pool.acquire(o,e,r,i),t.pool.acquire(o,e,r+1,i),t.pool.acquire(o,e+1,r,i),t.pool.acquire(o,e+1,r+1,i)]},t.prototype._compare=function(t){return this.row<t.row?-1:this.row>t.row?1:this.col<t.col?-1:this.col>t.col?1:0},t.sort=function(o){return o.map(function(o){return t.from(o)}).sort(function(t,o){return t._compare(o)}).map(function(t){return t.id})},t.pool=new e(t,!0,null,25,50),t}()});