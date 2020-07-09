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

define(["require","exports","tslib","../../request","./urlUtils"],(function(e,t,r,s,o){function a(e){var t=e.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.outFields&&(t.outFields=t.outFields.join(",")),t.outSpatialReference&&(t.outSR=t.outSR.wkid||JSON.stringify(t.outSR.toJSON()),delete t.outSpatialReference),t.source&&(t.layer=JSON.stringify({source:t.source}),delete t.source),t}Object.defineProperty(t,"__esModule",{value:!0}),t.toQueryStringParameters=a,t.executeRelationshipQuery=function(e,t,i){var n={query:o.mapParameters(r.__assign(r.__assign(r.__assign({},e.query),{f:"json"}),a(t)))};return i&&(n=r.__assign(r.__assign({},i),n)),s(e.path+"/queryRelatedRecords",n).then((function(e){for(var t=e.data,r=t.geometryType,s=t.spatialReference,o={},a=0,i=t.relatedRecordGroups;a<i.length;a++){var n=i[a],u={fields:void 0,objectIdFieldName:void 0,geometryType:r,spatialReference:s,hasZ:!!t.hasZ,hasM:!!t.hasM,features:n.relatedRecords};if(null!=n.objectId)o[n.objectId]=u;else for(var d in n)n.hasOwnProperty(d)&&"relatedRecords"!==d&&(o[n[d]]=u)}return e.data=o,e}))}}));