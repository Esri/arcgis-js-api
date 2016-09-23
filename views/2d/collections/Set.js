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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../../core/Collection"],function(t){var n=t.createSubclass({constructor:function(){this._index={}},add:function(t){if(!this.contains(t)){var n=this.hash(t);this._index[n]=t,this.inherited(arguments)}},addMany:function(t){var n,e,i;for(n=t.length-1;n>=0;n--)e=t[n],i=this.hash(e),this.contains(i)?t.splice(n,1):this._index[i]=e;return this.getInherited(arguments).call(this,t)},remove:function(t){var n=this.hash(t);return this.contains(n)?(t=this.getItem(n),delete this._index[n],this.getInherited(arguments).call(this,t)):t=null,t},removeMany:function(t){if(!t||!t.length)return null;var n,e;for(t=t.slice(0),n=t.length-1;n>=0;n--)e=this.hash(t[n]),this.contains(e)?(t[n]=this.getItem(e),delete this._index[e]):t.splice(n,1);return this.getInherited(arguments).call(this,t)},getItem:function(t){return this._index[this.hash(t)]},contains:function(t){return!!this.getItem(t)},removeAll:function(){this._index={},this.inherited(arguments)},keys:function(){var t=this._index,n=[];for(var e in t)t.hasOwnProperty(e)&&n.push(e);return n},hash:function(t){return t&&t.id?t.id:t}});return n});