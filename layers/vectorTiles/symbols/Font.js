// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/screenUtils","../core/accessorSupport/decorators","../core/accessorSupport/write"],(function(e,t,r,o,i,n,s,p){return function(e){function t(t){var r=e.call(this)||this;return r.decoration="none",r.family="sans-serif",r.size=9,r.style="normal",r.weight="normal",r}var i;return r(t,e),i=t,t.prototype.castSize=function(e){return n.toPt(e)},t.prototype.clone=function(){return new i({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})},o([s.property({type:String,json:{write:{overridePolicy:p.disableWriteDefaultPolicy("none")}}})],t.prototype,"decoration",void 0),o([s.property({type:String,json:{write:!0}})],t.prototype,"family",void 0),o([s.property({type:Number,json:{write:{overridePolicy:function(e,t,r){return{enabled:!r||!r.textSymbol3D}}}}})],t.prototype,"size",void 0),o([s.cast("size")],t.prototype,"castSize",null),o([s.property({type:String,json:{write:{overridePolicy:p.disableWriteDefaultPolicy("normal")}}})],t.prototype,"style",void 0),o([s.property({type:String,json:{write:{overridePolicy:p.disableWriteDefaultPolicy("normal")}}})],t.prototype,"weight",void 0),t=i=o([s.subclass("esri.symbols.Font")],t)}(s.declared(i))}));