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

define(["require","exports","tslib","../../request","./urlUtils"],(function(e,t,r,i,n){"use strict";function o(e,t){var r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),r.outFields&&!(null==t?void 0:t.returnCountOnly)?-1!==r.outFields.indexOf("*")?r.outFields="*":r.outFields=r.outFields.join(","):delete r.outFields,r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}function s(e,t,s,a){return void 0===s&&(s={}),r.__awaiter(this,void 0,void 0,(function(){var u;return r.__generator(this,(function(d){return u=n.mapParameters(r.__assign(r.__assign(r.__assign(r.__assign({},e.query),{f:"json"}),a),o(t,a))),[2,i(e.path+"/queryRelatedRecords",r.__assign(r.__assign({},s),{query:r.__assign(r.__assign({},s.query),u)}))]}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.executeRelationshipQueryForCount=t.executeRelationshipQuery=t.toQueryStringParameters=void 0,t.toQueryStringParameters=o,t.executeRelationshipQuery=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var n,o,a,u,d,c,l,_,f,y;return r.__generator(this,(function(g){switch(g.label){case 0:return[4,s(e,t,i)];case 1:for(n=g.sent(),o=n.data,a=o.geometryType,u=o.spatialReference,d={},c=0,l=o.relatedRecordGroups;c<l.length;c++)if(_=l[c],f={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:u,hasZ:!!o.hasZ,hasM:!!o.hasM,features:_.relatedRecords},null!=_.objectId)d[_.objectId]=f;else for(y in _)_.hasOwnProperty(y)&&"relatedRecords"!==y&&(d[_[y]]=f);return[2,r.__assign(r.__assign({},n),{data:d})]}}))}))},t.executeRelationshipQueryForCount=function(e,t,i){return r.__awaiter(this,void 0,void 0,(function(){var n,o,a,u,d,c;return r.__generator(this,(function(l){switch(l.label){case 0:return[4,s(e,t,i,{returnCountOnly:!0})];case 1:for(n=l.sent(),o=n.data,a={},u=0,d=o.relatedRecordGroups;u<d.length;u++)null!=(c=d[u]).objectId&&(a[c.objectId]=c.count);return[2,r.__assign(r.__assign({},n),{data:a})]}}))}))}}));