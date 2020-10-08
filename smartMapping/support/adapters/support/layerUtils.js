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

define(["require","exports","../CSVLayerAdapter","../FeatureLayerAdapter","../LayerAdapter","../PointCloudLayerAdapter","../SceneLayerAdapter"],(function(e,a,r,t,n,p,y){"use strict";var l;Object.defineProperty(a,"__esModule",{value:!0}),a.createLayerAdapter=a.getLayerTypeLabels=void 0;var d=((l={})[0]={adapter:r,type:"csv",label:"CSVLayer"},l[2]={adapter:t,type:"feature",label:"FeatureLayer"},l[1]={adapter:t,type:"geojson",label:"GeoJSONLayer"},l[3]={adapter:y,type:"scene",label:"SceneLayer"},l[4]={adapter:p,type:"point-cloud",label:"PointCloudLayer"},l),o=[0,2,1,3,4];a.getLayerTypeLabels=function(e){return e.map((function(e){return d[e].label}))},a.createLayerAdapter=function(e,a){if(void 0===a&&(a=o),e instanceof n)return e;var r=null;return a.some((function(a){var t=e.type===d[a].type;if(t){var n=d[a].adapter;r=new n({layer:e})}return t})),r}}));