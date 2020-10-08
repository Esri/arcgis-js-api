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

define(["require","exports","../../core/jsonMap"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lengthsToRESTParameters=void 0;var i=new r.default({preserveShape:"preserve-shape"});t.lengthsToRESTParameters=function(e){var t=e.toJSON(),r=t.polylines,n=t.lengthUnit,s=t.geodesic,o=t.calculationType,a={};a.polylines=JSON.stringify(r);var l=e.polylines[0].spatialReference;return a.sr=l.wkid?l.wkid:JSON.stringify(l.toJSON()),n&&(a.lengthUnit=n),s&&(a.geodesic=s),o&&(a.calculationType=i.toJSON(o)),a}}));