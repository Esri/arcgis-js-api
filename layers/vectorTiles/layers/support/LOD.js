// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType"],(function(e,r,t,o,l,p,s){return function(e){function r(r){var t=e.call(this,r)||this;return t.level=0,t.levelValue=null,t.resolution=0,t.scale=0,t}return t(r,e),l=r,r.prototype.clone=function(){return new l({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})},o([p.property({type:s.Integer,json:{write:!0}})],r.prototype,"level",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"levelValue",void 0),o([p.property({type:Number,json:{write:!0}})],r.prototype,"resolution",void 0),o([p.property({type:Number,json:{write:!0}})],r.prototype,"scale",void 0),r=l=o([p.subclass("esri.layers.support.LOD")],r);var l}(p.declared(l))}));