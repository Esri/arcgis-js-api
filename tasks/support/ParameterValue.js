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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,r,t,a,o,l,u){var n=new o.default({GPString:"string",GPDouble:"double",GPLong:"long",GPBoolean:"boolean",GPDate:"date",GPLinearUnit:"linear-unit",GPDataFile:"data-file",GPRasterData:"raster-data",GPRecordSet:"record-set",GPRasterDataLayer:"raster-data-layer",GPFeatureRecordSetLayer:"feature-record-set-layer",GPMultiValue:"multi-value"});return function(e){function r(r){var t=e.call(this)||this;return t.dataType=null,t.value=null,t}return t(r,e),a([u.property({json:{read:n.read,write:n.write}})],r.prototype,"dataType",void 0),a([u.property()],r.prototype,"value",void 0),r=a([u.subclass("esri.tasks.support.ParameterValue")],r)}(u.declared(l))});