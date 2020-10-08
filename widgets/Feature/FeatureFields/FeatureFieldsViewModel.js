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

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators","../../../popup/ExpressionInfo","../../../popup/FieldInfo","../support/featureUtils"],(function(e,o,r,t,s,n,i,p){"use strict";return function(e){function o(o){var r=e.call(this,o)||this;return r.attributes=null,r.expressionInfos=null,r.fieldInfos=null,r}return r.__extends(o,e),Object.defineProperty(o.prototype,"formattedFieldInfos",{get:function(){var e=this.expressionInfos,o=this.fieldInfos,r=[];return null==o||o.forEach((function(o){if(!o.hasOwnProperty("visible")||o.visible){var t=o.clone();t.label=p.getFieldInfoLabel(t,e),r.push(t)}})),r},enumerable:!1,configurable:!0}),r.__decorate([s.property()],o.prototype,"attributes",void 0),r.__decorate([s.property({type:[n]})],o.prototype,"expressionInfos",void 0),r.__decorate([s.property({type:[i]})],o.prototype,"fieldInfos",void 0),r.__decorate([s.property({readOnly:!0,dependsOn:["expressionInfos","fieldInfos"]})],o.prototype,"formattedFieldInfos",null),o=r.__decorate([s.subclass("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")],o)}(t)}));