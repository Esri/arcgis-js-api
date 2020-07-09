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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../geometry","../../core/jsonMap","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],(function(e,t,o,r,i,n,p,s){Object.defineProperty(t,"__esModule",{value:!0});var a=new i.default({upperLeft:"upper-left",lowerLeft:"lower-left"}),c=function(e){function t(t){var o=e.call(this,t)||this;return o.extent=null,o.mode="view",o.originPosition="upper-left",o.tolerance=1,o}var i;return o.__extends(t,e),i=t,t.prototype.clone=function(){return new i(p.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))},o.__decorate([s.property({type:r.Extent,json:{write:!0}})],t.prototype,"extent",void 0),o.__decorate([s.property({type:["view","edit"],json:{write:!0}})],t.prototype,"mode",void 0),o.__decorate([s.property({type:String,json:{read:a.read,write:a.write}})],t.prototype,"originPosition",void 0),o.__decorate([s.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),t=i=o.__decorate([s.subclass("esri.tasks.support.QuantizationParameters")],t)}(n.JSONSupport);t.default=c}));