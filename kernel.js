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

define(["require","exports","./core/has","./support/revision","@dojo/framework/shim/Promise"],(function(e,r,s,i){Object.defineProperty(r,"__esModule",{value:!0}),r.revision=i.commitHash,r.version="4.16",r.workerMessages={request:function(r,s){return new Promise((function(r,s){e(["./request"],r,s)})).then((function(e){var i=r.options||{};return i.responseType="array-buffer",i.signal=null==s?void 0:s.signal,e(r.url,i)})).then((function(e){return{result:{data:e.data,ssl:e.ssl},transferList:[e.data]}}))}},r.setId=function(e){r.id=e},!s("host-webworker")&&s("esri-console-log-version")&&(s("esri-next")?console.warn("Using ArcGIS API for JavaScript "+r.version+"-next [Date: "+i.buildDate+", Revision: "+i.commitHash.slice(0,8)+"]"):console.debug("Using ArcGIS API for JavaScript "+r.version+" [Date: "+i.buildDate+", Revision: "+i.commitHash.slice(0,8)+"]"))}));