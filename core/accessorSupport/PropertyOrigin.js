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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){function t(e){switch(e){case"defaults":return 0;case"service":return 2;case"portal-item":return 3;case"web-scene":return 4;case"web-map":return 5;case"user":return 6}}function n(e){switch(e){case 0:return"defaults";case 2:return"service";case 3:return"portal-item";case 4:return"web-scene";case 5:return"web-map";case 6:return"user"}}Object.defineProperty(r,"__esModule",{value:!0}),r.nameToId=t,r.idToName=n,r.readableNameToId=function(e){return t(e)},r.idToReadableName=function(e){return n(e)},r.writableNameToId=function(e){return t(e)},r.idToWritableName=function(e){return n(e)}}));