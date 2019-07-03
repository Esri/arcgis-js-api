// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../../declare","dojo/json","../../geometry/jsonUtils","./LocationProviderClientBase"],function(e,t,r,i){return e("esri.tasks.locationproviders.GeometryLocationProvider",i,{geometryField:null,getGeometry:function(e){var i=e.attributes[this.geometryField];if(i)try{"string"==typeof i&&(i=t.parse(i));var o;i.spatialReference||(o=this.inSpatialReference);var n=r.fromJson(i);if(n&&r.getJsonType(n)===this.geometryType)return o&&n.setSpatialReference(o),n}catch(e){}}})});