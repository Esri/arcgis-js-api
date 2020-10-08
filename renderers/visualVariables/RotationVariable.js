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

define(["require","exports","tslib","../../core/Error","../../core/accessorSupport/decorators","./VisualVariable"],(function(e,t,r,o,i,s){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.axis=null,r.type="rotation",r.rotationType="geographic",r.valueExpressionTitle=null,r}var s;return r.__extends(t,e),s=t,Object.defineProperty(t.prototype,"cache",{get:function(){return{hasExpression:!!this.valueExpression,compiledFunc:null}},enumerable:!1,configurable:!0}),t.prototype.writeValueExpressionTitleWebScene=function(e,t,r,i){if(i&&i.messages){var s="visualVariables["+this.index+"]";i.messages.push(new o("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:s+".valueExpressionTitle",context:i}))}},t.prototype.clone=function(){return new s({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})},r.__decorate([i.property({readOnly:!0,dependsOn:["valueExpression"]})],t.prototype,"cache",null),r.__decorate([i.property({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],t.prototype,"axis",void 0),r.__decorate([i.property({type:["rotation"],json:{type:["rotationInfo"]}})],t.prototype,"type",void 0),r.__decorate([i.property({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],t.prototype,"rotationType",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"valueExpressionTitle",void 0),r.__decorate([i.writer("web-scene","valueExpressionTitle")],t.prototype,"writeValueExpressionTitleWebScene",null),t=s=r.__decorate([i.subclass("esri.renderers.visualVariables.RotationVariable")],t)}(s)}));