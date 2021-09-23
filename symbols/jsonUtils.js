// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","./SimpleMarkerSymbol","./PictureMarkerSymbol","./SimpleLineSymbol","./CartographicLineSymbol","./SimpleFillSymbol","./PictureFillSymbol","./TextSymbol"],(function(e,r,t,i,o,n,a,l,s,S,u){var c={createDefaultSymbol:function(e){var r;switch(e){case"esriGeometryPoint":case"esriGeometryMultipoint":r=c.createDefaultMarkerSymbol();break;case"esriGeometryPolyline":r=c.createDefaultLineSymbol();break;case"esriGeometryPolygon":case"esriGeometryEnvelope":case"esriGeometryMultiPatch":r=c.createDefaultFillSymbol()}return r},createDefaultMarkerSymbol:function(){return new o},createDefaultLineSymbol:function(){return new a},createDefaultFillSymbol:function(){return new s},getFirstSupportedSymbol:function(e){var t;return r.some(e,(function(e){return e&&c.supportedSymbolTypes.indexOf(e.type)>-1&&(t=e),!!t})),t},isPointSymbol:function(e){return!!e&&c.supportedPointSymbolTypes.indexOf(e.type)>-1},supportedPointSymbolTypes:["esriSMS","esriPMS","esriTS"],supportedSymbolTypes:["esriSMS","esriPMS","esriTS","esriSLS","esriCLS","esriSFS","esriPFS"],fromJson:function(e,r){var t=null;switch(e.type){case"esriSMS":t=new o(e);break;case"esriPMS":t=new n(e);break;case"esriTS":t=new u(e);break;case"esriSLS":t=void 0!==e.cap?new l(e):new a(e);break;case"esriCLS":t=new l(e);break;case"esriSFS":t=new s(e);break;case"esriPFS":t=new S(e);break;default:var i=r&&r.geometryType;t=i?c.createDefaultSymbol(i):null}return t},getShapeDescriptors:function(e){return e&&e.getShapeDescriptors?e.getShapeDescriptors():{defaultShape:null,fill:null,stroke:null}}};return t("extend-esri")&&e.mixin(e.getObject("symbol",!0,i),c),c}));