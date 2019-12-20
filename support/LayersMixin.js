// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/collectionUtils","../core/Logger","../core/promiseUtils","../core/accessorSupport/decorators","../layers/Layer"],function(e,r,t,o,n,i,a,s,p,y){function d(e){return e&&"group"===e.type}function l(e,r,t){var o,n;if(e)for(var i=0,a=e.length;i<a;i++){if(o=e.getItemAt(i),o[r]===t)return o;if(d(o)&&(n=l(o.layers,r,t)))return n}}Object.defineProperty(r,"__esModule",{value:!0});var u=a.getLogger("esri.support.LayersMixin");r.LayersMixin=function(e){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var o=e.call(this,r)||this;o.layers=new n;var i=function(e){e.parent&&e.parent!==o&&"remove"in e.parent&&e.parent.remove(e),e.parent=o,o.layerAdded(e),"elevation"===e.type&&u.error("Layer '"+e.title+", id:"+e.id+"' of type '"+e.type+"' is not supported as an operational layer and will therefore be ignored.")},a=function(e){e.parent=null,o.layerRemoved(e)};return o.layers.on("after-add",function(e){return i(e.item)}),o.layers.on("after-remove",function(e){return a(e.item)}),o}return t(r,e),r.prototype.destroy=function(){this.layers.drain(this.layerRemoved,this)},Object.defineProperty(r.prototype,"layers",{set:function(e){this._set("layers",i.referenceSetter(e,this._get("layers")))},enumerable:!0,configurable:!0}),r.prototype.add=function(e,r){var t=this,o=this.layers;r=o.getNextIndex(r),e instanceof y?(e.parent===this&&this.reorder(e,r),o.add(e,r)):s.isPromiseLike(e)?e.then(function(e){t.destroyed||t.add(e,r)}):u.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")},r.prototype.addMany=function(e,r){var t=this,o=this.layers;r=o.getNextIndex(r),e.slice().forEach(function(e){if(e.parent===t)return void t.reorder(e,r);o.add(e,r),r+=1})},r.prototype.findLayerById=function(e){return l(this.layers,"id",e)},r.prototype.findLayerByUid=function(e){return l(this.layers,"uid",e)},r.prototype.remove=function(e){return this.layers.remove(e)},r.prototype.removeMany=function(e){return this.layers.removeMany(e)},r.prototype.removeAll=function(){return this.layers.removeAll()},r.prototype.reorder=function(e,r){return this.layers.reorder(e,r)},r.prototype.layerAdded=function(e){},r.prototype.layerRemoved=function(e){},o([p.property()],r.prototype,"layers",null),r=o([p.subclass("esri.support.LayersMixin")],r)}(p.declared(e))}});