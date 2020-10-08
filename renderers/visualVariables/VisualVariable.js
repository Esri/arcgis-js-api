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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/Logger","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./support/VisualVariableLegendOptions"],(function(e,r,t,o,n,i,p,s,a){"use strict";var l=i.getLogger("esri.renderers.visualVariables.VisualVariable"),u=new o.default({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});return function(e){function r(r){var t=e.call(this,r)||this;return t.index=null,t.type=null,t.field=null,t.valueExpression=null,t.valueExpressionTitle=null,t.legendOptions=null,t}return t.__extends(r,e),r.prototype.castField=function(e){return null==e?e:"function"==typeof e?(l.error(".field: field must be a string value"),null):s.ensureString(e)},Object.defineProperty(r.prototype,"arcadeRequired",{get:function(){return!!this.valueExpression},enumerable:!1,configurable:!0}),r.prototype.clone=function(){},r.prototype.getAttributeHash=function(){return this.type+"-"+this.field+"-"+this.valueExpression},t.__decorate([p.property()],r.prototype,"index",void 0),t.__decorate([p.property({type:u.apiValues,readOnly:!0,json:{read:u.read,write:u.write}})],r.prototype,"type",void 0),t.__decorate([p.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),t.__decorate([p.cast("field")],r.prototype,"castField",null),t.__decorate([p.property({type:String,json:{write:!0}})],r.prototype,"valueExpression",void 0),t.__decorate([p.property({type:String,json:{write:!0}})],r.prototype,"valueExpressionTitle",void 0),t.__decorate([p.property({readOnly:!0,dependsOn:["valueExpression"]})],r.prototype,"arcadeRequired",null),t.__decorate([p.property({type:a,json:{write:!0}})],r.prototype,"legendOptions",void 0),r=t.__decorate([p.subclass("esri.renderers.visualVariables.VisualVariable")],r)}(n.JSONSupport)}));