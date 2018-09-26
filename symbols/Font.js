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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/screenUtils","../core/accessorSupport/decorators","../core/accessorSupport/write"],function(e,t,o,r,i,n,l,s){return function(e){function t(t){var o=e.call(this)||this;return o.decoration="none",o.family="sans-serif",o.size=9,o.style="normal",o.weight="normal",o}o(t,e),i=t,t.prototype.castSize=function(e){return n.toPt(e)},t.prototype.clone=function(){return new i({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})};var i;return r([l.property({type:["underline","line-through","none"],json:{write:{overridePolicy:s.disableWriteDefaultPolicy("none")}}})],t.prototype,"decoration",void 0),r([l.property({type:String,json:{write:!0}})],t.prototype,"family",void 0),r([l.property({type:Number,json:{write:{overridePolicy:function(e,t,o){return{enabled:!o||!o.textSymbol3D}}}}})],t.prototype,"size",void 0),r([l.cast("size")],t.prototype,"castSize",null),r([l.property({type:["normal","italic","oblique"],json:{write:{overridePolicy:s.disableWriteDefaultPolicy("normal")}}})],t.prototype,"style",void 0),r([l.property({type:["normal","bold","bolder","lighter"],json:{write:{overridePolicy:s.disableWriteDefaultPolicy("normal")}}})],t.prototype,"weight",void 0),t=i=r([l.subclass("esri.symbols.Font")],t)}(l.declared(i))});