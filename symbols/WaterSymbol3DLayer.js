// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../Color","../core/lang","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","./Symbol3DLayer"],(function(e,t,r,o,n,a,i,c){"use strict";var l=function(e){function t(t){var r=e.call(this,t)||this;return r.color=p.clone(),r.type="water",r.waterbodySize="medium",r.waveDirection=null,r.waveStrength="moderate",r}var c;return r.__extends(t,e),c=t,t.prototype.clone=function(){return new c({color:n.clone(this.color),waterbodySize:this.waterbodySize,waveDirection:this.waveDirection,waveStrength:this.waveStrength})},r.__decorate([a.property({type:o,nonNullable:!0,json:{type:[i.Integer],write:function(e,t,r){return t[r]=e.toArray(1)},default:function(){return p.clone()},defaultEquals:function(e){return e.toCss(!0)===p.toCss(!0)}}})],t.prototype,"color",void 0),r.__decorate([a.enumeration({Water:"water"},{readOnly:!0})],t.prototype,"type",void 0),r.__decorate([a.property({type:["small","medium","large"],json:{write:!0,default:"medium"}})],t.prototype,"waterbodySize",void 0),r.__decorate([a.property({type:Number,json:{write:!0,default:null}})],t.prototype,"waveDirection",void 0),r.__decorate([a.property({type:["calm","rippled","slight","moderate"],json:{write:!0,default:"moderate"}})],t.prototype,"waveStrength",void 0),t=c=r.__decorate([a.subclass("esri.symbols.WaterSymbol3DLayer")],t)}(c),p=new o([0,119,190]);return l}));