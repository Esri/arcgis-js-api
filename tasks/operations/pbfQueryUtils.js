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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/Logger","../../layers/graphics/OptimizedFeatureSet","./pbfFeatureServiceParser"],function(e,r,t,a,u,s){function i(e){try{var r=s.parseFeatureQuery(e),a=r.queryResult.featureResult;if(a&&a.features&&a.features.length&&a.objectIdFieldName)for(var i=a.objectIdFieldName,n=0,f=a.features;n<f.length;n++){var l=f[n];l.attributes&&(l.objectId=l.attributes[i])}return a}catch(e){var p=new t("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e});return o.error(p),new u.default}}Object.defineProperty(r,"__esModule",{value:!0});var o=a.getLogger("esri.tasks.operations.pbfQueryUtils");r.parsePBFFeatureQuery=i});