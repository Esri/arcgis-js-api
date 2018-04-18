// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/Collection","../core/collectionUtils","../core/Logger","../core/accessorSupport/decorators","../layers/Layer"],function(e,r,t,o,n,i,a,s,p,y){function l(e){return e&&null!=e.layers}function u(e,r,t){for(var o,n,i=0,a=e.length;i<a;i++){if(o=e.getItemAt(i),o[r]===t)return o;if(l(o)&&(n=u(o.layers,r,t)))return n}}var c=i.ofType(y),d=s.getLogger("esri.support.LayersMixin");return function(e){function r(r){var t=e.call(this,r)||this;t.layers=new c;var o=function(e){e.parent&&e.parent!==t&&"remove"in e.parent&&e.parent.remove(e),e.parent=t,t.layerAdded(e),"elevation"===e.type&&d.error("Layer '"+e.title+", id:"+e.id+"' of type '"+e.type+"' is not supported as an operational layer and will therefore be ignored.")},n=function(e){e.parent=null,t.layerRemoved(e)};return t.layers.on("after-add",function(e){return o(e.item)}),t.layers.on("after-remove",function(e){return n(e.item)}),t}return t(r,e),r.prototype.destroy=function(){this.layers.drain(this.layerRemoved,this)},Object.defineProperty(r.prototype,"layers",{set:function(e){this._set("layers",a.referenceSetter(e,this._get("layers"),c))},enumerable:!0,configurable:!0}),r.prototype.findLayerById=function(e){return u(this.layers,"id",e)},r.prototype.add=function(e,r){var t=this.layers;if(r=t.getNextIndex(r),e.parent===this)return void this.reorder(e,r);t.add(e,r)},r.prototype.addMany=function(e,r){var t=this,o=this.layers;r=o.getNextIndex(r),e.slice().forEach(function(e){if(e.parent===t)return void t.reorder(e,r);o.add(e,r),r+=1})},r.prototype.findLayerByUid=function(e){return u(this.layers,"uid",e)},r.prototype.remove=function(e){return this.layers.remove(e)},r.prototype.removeMany=function(e){return this.layers.removeMany(e)},r.prototype.removeAll=function(){return this.layers.removeAll()},r.prototype.reorder=function(e,r){return this.layers.reorder(e,r)},r.prototype.layerAdded=function(e){},r.prototype.layerRemoved=function(e){},o([p.property({type:c,cast:a.castForReferenceSetter})],r.prototype,"layers",null),r=o([p.subclass("esri.support.LayersMixin")],r)}(p.declared(n))});