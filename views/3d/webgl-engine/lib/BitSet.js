// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(t,r){var o=function(){function t(){this.bitsPerWord=32,this.addressBitsPerWord=5,this._store=[]}return t.prototype.clone=function(){var r=new t;return r._store=this._store.slice(),r},t.prototype.wordIndex=function(t){return t>>this.addressBitsPerWord},t.prototype.set=function(t){return this._store[this.wordIndex(t-1)]|=1<<t-1},t.prototype.clear=function(t){return this._store[this.wordIndex(t-1)]&=255^1<<t-1},t.prototype.clearAll=function(){for(var t=0;t<this._store.length;++t)this._store[t]=0},t.prototype.get=function(t){return 0!==(this._store[this.wordIndex(t-1)]&1<<t-1)},t.prototype.length=function(){return 0===this.wordLength()?0:this.bitsPerWord*(this.wordLength()-1)+(this._store[this.wordLength()-1].toString(2).length+1)},t.prototype.wordLength=function(){for(var t,r=this._store.length,o=t=this._store.length-1;(0>=t?0>=o:o>=0)&&0===this._store[o];0>=t?o++:o--)r--;return r},t.prototype.store=function(){return this._store},t.prototype.cardinality=function(){for(var t=0,r=0,o=this.length();o>=0?o>=r:r>=o;o>=0?r++:r--)this.get(r)&&t++;return t},t.prototype.toString=function(){for(var t=[],r=0,o=this.length();o>=0?o>=r:r>=o;o>=0?r++:r--)this.get(r)&&t.push(""+r);return"{"+t.join(",")+"}"},t.prototype.toBinaryString=function(){var t=this,r=function(t,r,o){for(;t.length<o;)t=r+t;return t};return this.wordLength()>0?this._store.map(function(o){return r(o.toString(2),"0",t.bitsPerWord)}).join(""):r("","0",this.bitsPerWord)},t.prototype.or=function(t){if(this!==t){for(var r=Math.min(this.wordLength(),t.wordLength()),o=0,e=r-1;e>=0?e>=o:o>=e;e>=0?o++:o--)this._store[o]|=t.store[o];return r<t.wordLength()&&(this._store=this._store.concat(t._store.slice(r,t.wordLength()))),null}},t.prototype.and=function(t){var r;if(this!==t){for(var o=r=this.wordLength(),e=t.wordLength();e>=r?e>=o:o>=e;e>=r?o++:o--)this._store[o]=0;for(var o=0,n=this.wordLength();n>=0?n>=o:o>=n;n>=0?o++:o--)this._store[o]&=t.store[o];return null}},t.prototype.andNot=function(t){for(var r=0,o=Math.min(this.wordLength(),t.wordLength())-1;o>=0?o>=r:r>=o;o>=0?r++:r--)this._store[r]&=~t.store[r];return null},t.prototype.xor=function(t){if(this!==t){for(var r=0,o=this.wordLength();o>=0?o>=r:r>=o;o>=0?r++:r--)this._store[r]^=t.store[r];return null}},t}();return o});