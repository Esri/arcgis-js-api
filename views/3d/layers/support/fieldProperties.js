// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../layers/support/fieldUtils"],function(e,i,r){function l(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,dependsOn:["layer.fields","layer.outFields","requiredFields"],get:function(){var e=this,i=e.layer,l=e.layer.fields,d=e.requiredFields;return i.outFields?r.fixFields(l,r.unpackFieldNames(l,i.outFields).concat(d)):r.fixFields(l,d)}}}}Object.defineProperty(i,"__esModule",{value:!0}),i.defineFieldProperties=l});