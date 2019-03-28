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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Error","../../core/accessorSupport/decorators","./VisualVariable","../../support/arcadeUtils"],function(e,t,r,i,o,n,s,p){return function(e){function t(t){var r=e.call(this,t)||this;return r.axis=null,r.type="rotation",r.rotationType="geographic",r.valueExpressionTitle=null,r}r(t,e),s=t,Object.defineProperty(t.prototype,"_cache",{get:function(){var e=p.createSyntaxTree(this.valueExpression);return{hasExpression:!!this.valueExpression,compiledFunc:p.createFunction(e)}},enumerable:!0,configurable:!0}),t.prototype.writeValueExpressionTitleWebScene=function(e,t,r,i){if(i&&i.messages){var n="visualVariables["+this.index+"]";i.messages.push(new o("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:n+".valueExpressionTitle",context:i}))}},t.prototype.getRotationAngle=function(e,t){var r=this.axis||"heading",i="heading"===r&&"arithmetic"===this.rotationType?90:0,o="heading"===r&&"arithmetic"===this.rotationType?-1:1,n="number"==typeof e?null:e,s=n&&n.attributes,a=this.field,l=this._cache,u=l.hasExpression,c=l.compiledFunc,h=0;if(!a&&!u)return h;if(u){var y=p.getViewInfo(t),d=p.createExecContext(n,y);h=p.executeFunction(c,d)}else s&&(h=s[a]||0);return h="number"!=typeof h||isNaN(h)?null:i+o*h},t.prototype.clone=function(){return new s({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})};var s;return i([n.property({readOnly:!0,dependsOn:["valueExpression"]})],t.prototype,"_cache",null),i([n.property({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],t.prototype,"axis",void 0),i([n.property({type:["rotation"],json:{type:["rotationInfo"]}})],t.prototype,"type",void 0),i([n.property({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],t.prototype,"rotationType",void 0),i([n.property({type:String,json:{write:!0}})],t.prototype,"valueExpressionTitle",void 0),i([n.writer("web-scene","valueExpressionTitle")],t.prototype,"writeValueExpressionTitleWebScene",null),t=s=i([n.subclass("esri.renderers.visualVariables.RotationVariable")],t)}(n.declared(s))});