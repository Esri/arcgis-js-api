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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Color","../core/lang","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","./Symbol3DLayer"],function(e,r,t,o,a,i,p,n,l){return function(e){function r(r){var t=e.call(this,r)||this;return t.color=new a("#0077BE"),t.type="water",t.waterbodySize="medium",t.waveDirection=null,t.waveStrength="moderate",t}t(r,e),l=r,r.prototype.clone=function(){return new l({color:i.clone(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})};var l;return o([p.property({type:a,json:{type:[n.Integer],write:!0,default:null}})],r.prototype,"color",void 0),o([p.enumeration.serializable()({Water:"water"})],r.prototype,"type",void 0),o([p.property({type:["small","medium","large"],json:{write:!0,default:"medium"}})],r.prototype,"waterbodySize",void 0),o([p.property({type:Number,json:{write:!0,default:null}})],r.prototype,"waveDirection",void 0),o([p.property({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],r.prototype,"waveStrength",void 0),r=l=o([p.subclass("esri.symbols.WaterSymbol3DLayer")],r)}(p.declared(l))});