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

define(["require","exports"],function(e,r){function i(e){switch(e){case"esriSMS":return"simple-marker";case"esriPMS":return"picture-marker";case"esriSLS":return"simple-line";case"esriPLS":return"picture-line";case"esriSFS":return"simple-fill";case"esriPFS":return"picture-fill";case"esriTS":return"text"}return e}function t(e){var r=i(e.type);if(r){switch(r){case"picture-marker":case"picture-line":case"picture-fill":case"CIMPictureMarker":return!0}return!1}return!1}Object.defineProperty(r,"__esModule",{value:!0}),r.keyFromSymbol=function(e){if(e.type){switch(i(e.type)){case"simple-marker":return e.path?"simple-marker"+e.style+e.path:"simple-marker"+e.style;case"simple-line":return"simple-line"+e.style+e.cap;case"simple-fill":return"simple-fill"+e.style}if(e.mosaicHash)return e.mosaicHash;if(t(e))return e.imageData?e.imageData:e.url+""+e.width+e.height}return JSON.stringify(e)},r.normalizeSymbolType=i,r.isMarkerSymbol=function(e){var r=i(e.type);if(r){switch(r){case"simple-marker":case"picture-marker":case"CIMPointSymbol":return!0;case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!0}return!1}},r.isFillSymbol=function(e){var r=i(e.type);if(r){switch(r){case"simple-fill":case"picture-fill":case"CIMPolygonSymbol":return!0}return!1}},r.isLineSymbol=function(e){var r=i(e.type);if(r){switch(r){case"simple-line":case"picture-line":case"CIMLineSymbol":return!0}return!1}},r.isPictureSymbol=t,r.isTextSymbol=function(e){var r=i(e.type);if(r){switch(r){case"text":case"CIMTextSymbol":return!0}return!1}}});