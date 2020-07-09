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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../PortalItem","./portalItemUtils"],(function(e,t,r,o,n){function a(e,t,a,i){return r.__awaiter(this,void 0,void 0,(function(){var u;return r.__generator(this,(function(r){switch(r.label){case 0:return e.layerType&&"ArcGISFeatureLayer"===e.layerType?e.url?[2,!1]:e.featureCollectionType&&e.featureCollectionType===a?[2,!0]:e.itemId?[4,(u=new o({id:e.itemId,portal:t})).load()]:[3,2]:[2,!1];case 1:return r.sent(),[2,"Feature Collection"===u.type&&n.hasTypeKeyword(u,i)];case 2:return[2,!1]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.isMapNotesLayer=function(e,t){return a(e,t,"notes","Map Notes")},t.isRouteLayer=function(e,t){return a(e,t,"route","Route Layer")}}));