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

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/accessorSupport/decorators","./core/Accessor","./core/Collection","./core/collectionUtils","./core/Logger","./layers/Layer"],function(e,r,t,o,s,a,l,c,n,i){var y=l.ofType(i),p=n.getLogger("esri.Ground"),d=function(e){function r(r){e.call(this),this.layers=new y,this.layers.on("after-add",function(e){var r=e.item;"esri.layers.ElevationLayer"!==r.declaredClass&&p.error("Layer '"+r.title+", id:"+r.id+"' of type '"+r.declaredClass+"' cannot be added as a ground layer. Only layers of type esri.layers.ElevationLayer are supported.")})}return t(r,e),Object.defineProperty(r.prototype,"layers",{set:function(e){this._set("layers",c.referenceSetter(e,this._get("layers"),y))},enumerable:!0,configurable:!0}),r.prototype.clone=function(){return new r({layers:this.layers.slice()})},o([s.property({type:y}),s.cast(c.castForReferenceSetter)],r.prototype,"layers",null),r=o([s.subclass("esri.Ground")],r)}(s.declared(a));return d});