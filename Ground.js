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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/accessorSupport/decorators","./core/Accessor","./core/Collection","./core/collectionUtils","./core/Logger","./core/requireUtils","./layers/Layer","./layers/support/types"],function(e,r,t,o,n,s,a,l,i,c,p,u){var y=a.ofType(p),f=i.getLogger("esri.Ground"),d=v=function(r){function o(e){var t=r.call(this)||this;return t.layers=new y,t.layers.on("after-add",function(e){var r=e.item;u.isOfType(r,["elevation","base-elevation"])||f.error("Layer '"+r.title+", id:"+r.id+"' of type '"+r.type+"' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.")}),t}return t(o,r),Object.defineProperty(o.prototype,"layers",{set:function(e){this._set("layers",l.referenceSetter(e,this._get("layers"),y))},enumerable:!0,configurable:!0}),o.prototype.queryElevation=function(r,t){var o=this;return c.when(e,"./layers/support/ElevationQuery").then(function(e){var n=new e.ElevationQuery,s=o.layers.filter(function(e){return"elevation"===e.type}).toArray();return n.queryAll(s,r,t)})},o.prototype.clone=function(){return new v({layers:this.layers.slice()})},o}(n.declared(s));o([n.property({type:y}),n.cast(l.castForReferenceSetter)],d.prototype,"layers",null),d=v=o([n.subclass("esri.Ground")],d);var v;return d});