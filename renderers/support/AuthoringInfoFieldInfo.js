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

define(["require","exports","tslib","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./AuthoringInfoClassBreakInfo"],(function(e,o,r,t,i,n,a){Object.defineProperty(o,"__esModule",{value:!0});var l=function(e){function o(o){var r=e.call(this,o)||this;return r.field="",r.normalizationField="",r.label="",r.classBreakInfos=[],r}var t;return r.__extends(o,e),t=o,o.prototype.clone=function(){return new t({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:i.clone(this.classBreakInfos)})},r.__decorate([n.property({type:String,json:{write:!0}})],o.prototype,"field",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],o.prototype,"normalizationField",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],o.prototype,"label",void 0),r.__decorate([n.property({type:[a.default],json:{write:!0}})],o.prototype,"classBreakInfos",void 0),o=t=r.__decorate([n.subclass("esri.renderers.support.AuthoringInfoFieldInfo")],o)}(t.JSONSupport);o.AuthoringInfoFieldInfo=l,o.default=l}));