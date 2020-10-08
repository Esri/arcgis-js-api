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

define(["require","exports","./pbfFeatureServiceParser"],(function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.parsePBFFeatureQuery=void 0,r.parsePBFFeatureQuery=function(e,r){var u=t.parseFeatureQuery(e,r),a=u.queryResult.featureResult,s=u.queryResult.queryGeometry,y=u.queryResult.queryGeometryType;if(a&&a.features&&a.features.length&&a.objectIdFieldName)for(var o=a.objectIdFieldName,i=0,f=a.features;i<f.length;i++){var l=f[i];l.attributes&&(l.objectId=l.attributes[o])}return a&&(a.queryGeometry=s,a.queryGeometryType=y),a}}));