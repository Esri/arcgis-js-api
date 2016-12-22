// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/declare","../../core/JSONSupporter","../../geometry/support/jsonUtils","./FeatureSet"],function(e,t,l,r){var n=e(t,{declaredClass:"esri.tasks.support.ImageServiceIdentifyResult",catalogItemVisibilities:null,catalogItems:null,_catalogItemsReader:function(e){return e&&r.fromJSON(e)},location:null,_locationReader:function(e){return e&&l.fromJSON(e)},name:null,objectId:null,properties:null,value:null});return n});