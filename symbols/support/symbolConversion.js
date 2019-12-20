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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../symbols","../../core/Error"],function(e,o,l,i){function r(e,o,r,m){if(void 0===o&&(o=!1),void 0===r&&(r=!1),void 0===m&&(m=!0),!e)return{symbol:null};var n;if(l.isSymbol3D(e)||e instanceof l.WebStyleSymbol)n=e.clone();else if("cim"===e.type)n=l.PointSymbol3D.fromCIMSymbol(e);else if(e instanceof l.SimpleLineSymbol)n=l.LineSymbol3D.fromSimpleLineSymbol(e);else if(e instanceof l.SimpleMarkerSymbol)n=l.PointSymbol3D.fromSimpleMarkerSymbol(e);else if(e instanceof l.PictureMarkerSymbol)n=l.PointSymbol3D.fromPictureMarkerSymbol(e);else if(e instanceof l.SimpleFillSymbol)n=l.PolygonSymbol3D.fromSimpleFillSymbol(e);else{if(!(e instanceof l.TextSymbol))return{error:new i("symbol-conversion:unsupported-2d-symbol","2D symbol of type '"+(e.type||e.declaredClass)+"' is unsupported in 3D",{symbol:e})};n=m?l.LabelSymbol3D.fromTextSymbol(e):l.PointSymbol3D.fromTextSymbol(e)}if(o&&(n.id=e.id),r&&l.isSymbol3D(n))for(var y=0;y<n.symbolLayers.length;++y)n.symbolLayers.getItemAt(y)._ignoreDrivers=!0;return{symbol:n}}Object.defineProperty(o,"__esModule",{value:!0}),o.to3D=r});