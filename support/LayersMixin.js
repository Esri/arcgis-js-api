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

define(["../core/Accessor","../core/Collection","../core/Logger"],function(e,r,t){var n=function(e,r){for(var t,i,a=0,o=e.length;o>a;a++){if(t=e.getItemAt(a),t.id===r)return t;if(t.layers&&(i=n(t.layers,r)))return i}},i=t.getLogger("esri.Map"),a=e.createSubclass({declaredClass:"esri.support.LayersMixin",destroy:function(){this._layersHandle.remove(),this._layersHandle=null,this.layers.drain(this._lyrRemove,this)},properties:{layers:{type:r,get:function(){var e=this._get("layers");return e?e:(e=new r,e.on("after-add",function(e){var r=e.item;r.parent&&r.parent!==this&&r.parent.remove(r),r.parent=this,this.layerAdded(r),"elevation"===r.type&&i.error("Layer '"+r.title+", id:"+r.id+"' of type '"+r.type+"' is not supported as an operational layer and will therefore be ignored.")}.bind(this)),e.on("after-remove",function(e){var r=e.item;r.parent=null,this.layerRemoved(r)}.bind(this)),e)},set:function(e){var r=this._get("layers");r&&this.remove(r.toArray()),this.addMany(e.toArray())}}},findLayerById:function(e){return n(this.layers,e)},add:function(e,r){var t=this.layers;return r=t.getNextIndex(r),e.parent===this?void this.reorder(e,r):void t.add(e,r)},addMany:function(e,r){var t=this.layers;r=t.getNextIndex(r),e.slice().forEach(function(e){return e.parent===this?void this.reorder(e,r):(t.add(e,r),void(r+=1))},this)},remove:function(e){return this.layers.remove(e)},removeMany:function(e){return this.layers.removeMany(e)},removeAll:function(){return this.layers.removeAll()},reorder:function(e,r){return this.layers.reorder(e,r)},layerAdded:function(e){},layerRemoved:function(e){}});return a});