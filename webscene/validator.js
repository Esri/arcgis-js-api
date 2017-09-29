// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./libs/ajv/ajv.bundle","./schema"],function(e,a,n,r){var t=new n({allErrors:!0,extendRefs:!0});return t.addSchema(r.json,"#webScene_schema.json"),{validate:function(e){return t.validate("#webScene_schema.json",e)?[]:t.errors.map(function(e){return""+(e.dataPath?e.dataPath+": ":"")+e.message})}}});