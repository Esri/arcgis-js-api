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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../core/Collection"],function(t){var e=t.createSubclass({constructor:function(){this._itemById={},this._itemToKeys={},this._keyToItem={}},add:function(t,e){var i=this.hash(t),s=this.hash(e),h=(this._keyToItem[i],this._itemToKeys[s]);e=this._itemById[s]?this._itemById[s]:e,this._keyToItem[i]=e,h||(this._itemById[s]=e,this._itemToKeys[s]=h=[],this.getInherited(arguments).call(this,e)),h.push(i)},remove:function(t){return this.removeMany([t])},removeMany:function(t){if(!t||!t.length)return null;var e,i,s,h,n,r=[];for(e=t.length-1;e>=0;e--)i=this.hash(t[e]),s=this.getItem(i),s&&(delete this._keyToItem[i],h=this.hash(s),n=this._itemToKeys[h],n.splice(n.indexOf(i),1),n.length||(delete this._itemToKeys[h],delete this._itemById[h],r.push(s)));return this.getInherited(arguments).call(this,r),r},getItem:function(t){return this._keyToItem[this.hash(t)]},contains:function(t){return null!=this.getItem(t)},hash:function(t){return t&&t.id?t.id:t}});return e});