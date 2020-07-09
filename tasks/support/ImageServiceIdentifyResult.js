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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Point","./FeatureSet"],(function(e,t,o,r,p,i,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.catalogItemVisibilities=null,t.catalogItems=null,t.location=null,t.name=null,t.objectId=null,t.processedValues=null,t.properties=null,t.value=null,t}return o.__extends(t,e),o.__decorate([p.property({json:{write:!0}})],t.prototype,"catalogItemVisibilities",void 0),o.__decorate([p.property({type:s,json:{write:!0}})],t.prototype,"catalogItems",void 0),o.__decorate([p.property({type:i,json:{write:!0}})],t.prototype,"location",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"name",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"objectId",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"processedValues",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"properties",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"value",void 0),t=o.__decorate([p.subclass("esri.tasks.support.ImageServiceIdentifyResult")],t)}(r.JSONSupport)}));