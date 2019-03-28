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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports"],function(e,r){"use strict";return function(){function e(e){void 0===e&&(e=null),this.url="//route.arcgis.com/arcgis/rest/services/World/ServiceAreas/NAServer/ServiceArea_World/solveServiceArea",this.credentials=null,this.impedanceAttributeNames=[{serviceValue:"TravelTime",entryName:"traveltime"},{serviceValue:"TruckTravelTime",entryName:"trucktraveltime"},{serviceValue:"WalkTime",entryName:"walktime"},{serviceValue:"Miles",entryName:"miles"},{serviceValue:"Kilometers",entryName:"kilometers"}],this.defaultImpledanceAttributeName="TravelTime",this.credentials=e}return e}()});