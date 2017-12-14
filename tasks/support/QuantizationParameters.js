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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/JSONSupport","../../core/kebabDictionary","../../core/lang","../../geometry/Extent"],function(e,t,r,o,n,i,p,s,a){var c=p({upperLeft:"upper-left",lowerLeft:"lower-left"}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.extent=null,t.mode="view",t.originPosition="upper-left",t}return r(t,e),i=t,t.prototype.clone=function(){return new i(s.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))},o([n.property({type:a,json:{write:!0}})],t.prototype,"extent",void 0),o([n.property({type:String,json:{write:!0}})],t.prototype,"mode",void 0),o([n.property({type:String,json:{read:c.read,write:c.write}})],t.prototype,"originPosition",void 0),o([n.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),t=i=o([n.subclass("esri.tasks.support.QuantizationParameters")],t);var i}(n.declared(i));return u});