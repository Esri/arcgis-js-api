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

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/accessorSupport/decorators","./core/Accessor","./core/Collection","./core/collectionUtils","./core/Logger","./core/requireUtils","./layers/Layer"],function(e,r,t,o,n,l,s,a,i,c,u){var y=s.ofType(u),p=i.getLogger("esri.Ground"),f=function(r){function l(e){r.call(this),this.layers=new y,this.layers.on("after-add",function(e){var r=e.item;"elevation"!==r.type&&p.error("Layer '"+r.title+", id:"+r.id+"' of type '"+r.type+"' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.")})}return t(l,r),Object.defineProperty(l.prototype,"layers",{set:function(e){this._set("layers",a.referenceSetter(e,this._get("layers"),y))},enumerable:!0,configurable:!0}),l.prototype.queryElevation=function(r,t){var o=this;return c.when(e,"./layers/support/ElevationQuery").then(function(e){var n=new e.ElevationQuery,l=o.layers.filter(function(e){return"elevation"===e.type}).toArray();return n.queryAll(l,r,t)})},l.prototype.clone=function(){return new l({layers:this.layers.slice()})},o([n.property({type:y}),n.cast(a.castForReferenceSetter)],l.prototype,"layers",null),l=o([n.subclass("esri.Ground")],l)}(n.declared(l));return f});