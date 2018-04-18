// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/JSONSupport","../../core/kebabDictionary","../../core/lang","../../core/accessorSupport/decorators"],function(e,t,r,o,i,n,p,s,a){Object.defineProperty(t,"__esModule",{value:!0});var c=p({upperLeft:"upper-left",lowerLeft:"lower-left"}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.extent=null,t.mode="view",t.originPosition="upper-left",t}return r(t,e),n=t,t.prototype.clone=function(){return new n(s.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))},o([a.property({type:i.Extent,json:{write:!0}})],t.prototype,"extent",void 0),o([a.property({type:String,json:{write:!0}})],t.prototype,"mode",void 0),o([a.property({type:String,json:{read:c.read,write:c.write}})],t.prototype,"originPosition",void 0),o([a.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),t=n=o([a.subclass("esri.tasks.support.QuantizationParameters")],t);var n}(a.declared(n));t.default=l});