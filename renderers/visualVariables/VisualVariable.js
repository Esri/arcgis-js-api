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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/kebabDictionary","../../core/Logger","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./support/VisualVariableLegendOptions"],function(e,r,o,t,i,n,p,l,s,a){var u=p.getLogger("esri.renderers.visualVariables.VisualVariable"),c=new n.default({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});return function(e){function r(r){var o=e.call(this,r)||this;return o.index=null,o.type=null,o.field=null,o.valueExpression=null,o.valueExpressionTitle=null,o.legendOptions=null,o}return o(r,e),r.prototype.castField=function(e){return null==e?e:"function"==typeof e?(u.error(".field: field must be a string value"),null):s.ensureString(e)},r.prototype.clone=function(){},t([l.property()],r.prototype,"index",void 0),t([l.property({type:c.apiValues,readOnly:!0,json:{read:c.read,write:c.write}})],r.prototype,"type",void 0),t([l.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),t([l.cast("field")],r.prototype,"castField",null),t([l.property({type:String,json:{write:!0}})],r.prototype,"valueExpression",void 0),t([l.property({type:String,json:{write:!0}})],r.prototype,"valueExpressionTitle",void 0),t([l.property({type:a,json:{write:!0}})],r.prototype,"legendOptions",void 0),r=t([l.subclass("esri.renderers.visualVariables.VisualVariable")],r)}(l.declared(i))});