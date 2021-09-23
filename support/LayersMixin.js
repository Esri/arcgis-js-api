/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Collection","../core/collectionUtils","../core/Logger","../core/promiseUtils","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../layers/Layer"],(function(e,r,t,o,s,n,i,a,l,d,c,y){"use strict";function u(e){return e&&"group"===e.type}function p(e,r,t){let o,s;if(e)for(let n=0,i=e.length;n<i;n++){if(o=e.getItemAt(n),o[r]===t)return o;if(u(o)&&(s=p(o.layers,r,t),s))return s}}const f=n.getLogger("esri.support.LayersMixin"),h=e=>{let n=function(e){function t(...t){var s;(s=e.call(this,...t)||this).layers=new o;const n=e=>{e.parent&&"remove"in e.parent&&e.parent.remove(e)},i=e=>{e.parent=r._assertThisInitialized(s),s.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||f.error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`)},a=e=>{e.parent=null,s.layerRemoved(e)};return s.layers.on("before-add",(e=>n(e.item))),s.layers.on("after-add",(e=>i(e.item))),s.layers.on("after-remove",(e=>a(e.item))),s}r._inheritsLoose(t,e);var n=t.prototype;return n.destroy=function(){const e=this.layers.removeAll();for(const r of e)this.layerRemoved(r),r.destroy();this.layers.destroy()},n.add=function(e,r){const t=this.layers;if(r=t.getNextIndex(r),e instanceof y){const o=e;o.parent===this?this.reorder(o,r):t.add(o,r)}else i.isPromiseLike(e)?e.then((e=>{this.destroyed||this.add(e,r)})):f.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")},n.addMany=function(e,r){const t=this.layers;r=t.getNextIndex(r),e.slice().forEach((e=>{e.parent!==this?(t.add(e,r),r+=1):this.reorder(e,r)}))},n.findLayerById=function(e){return p(this.layers,"id",e)},n.findLayerByUid=function(e){return p(this.layers,"uid",e)},n.remove=function(e){return this.layers.remove(e)},n.removeMany=function(e){return this.layers.removeMany(e)},n.removeAll=function(){return this.layers.removeAll()},n.reorder=function(e,r){return this.layers.reorder(e,r)},n.layerAdded=function(e){},n.layerRemoved=function(e){},r._createClass(t,[{key:"layers",set:function(e){this._set("layers",s.referenceSetter(e,this._get("layers")))}}]),t}(e);return t.__decorate([a.property()],n.prototype,"layers",null),n=t.__decorate([c.subclass("esri.support.LayersMixin")],n),n};e.LayersMixin=h,Object.defineProperty(e,"__esModule",{value:!0})}));
