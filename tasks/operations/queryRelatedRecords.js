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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","./urlUtils"],function(e,r,t,o,a){function u(e){var r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.outFields&&(r.outFields=r.outFields.join(",")),r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.source&&(r.layer=JSON.stringify({source:r.source}),delete r.source),r}function s(e,r,s){var i=a.mapParameters(t({},e.query,{f:"json"},u(r))),l={query:i,callbackParamName:"callback"};return s&&(l=t({},s,l)),o(e.path+"/queryRelatedRecords",l).then(function(e){for(var r=e.data,t=r.geometryType,o=r.spatialReference,a={},u=0,s=r.relatedRecordGroups;u<s.length;u++){var i=s[u],l={fields:void 0,objectIdFieldName:void 0,geometryType:t,spatialReference:o,features:i.relatedRecords};if(null!=i.objectId)a[i.objectId]=l;else for(var n in i)i.hasOwnProperty(n)&&"relatedRecords"!==n&&(a[i[n]]=l)}return e.data=a,e})}Object.defineProperty(r,"__esModule",{value:!0}),r.toQueryStringParameters=u,r.executeRelationshipQuery=s});