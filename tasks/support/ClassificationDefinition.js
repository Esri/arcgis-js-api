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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators","../../symbols/Symbol","./colorRamps"],(function(e,r,o,t,s,p,i,a){"use strict";var n=new t.default({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.baseSymbol=null,r.colorRamp=null,r.type=null,r}return o.__extends(r,e),o.__decorate([p.property({type:i,json:{write:!0}})],r.prototype,"baseSymbol",void 0),o.__decorate([p.property({types:a.types,json:{read:{reader:a.fromJSON},write:!0}})],r.prototype,"colorRamp",void 0),o.__decorate([p.property({json:{read:n.read,write:n.write}})],r.prototype,"type",void 0),r=o.__decorate([p.subclass("esri.tasks.support.ClassificationDefinition")],r)}(s.JSONSupport)}));