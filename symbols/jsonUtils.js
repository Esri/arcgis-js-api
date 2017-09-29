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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../kernel","./SimpleMarkerSymbol","./PictureMarkerSymbol","./SimpleLineSymbol","./CartographicLineSymbol","./SimpleFillSymbol","./PictureFillSymbol","./TextSymbol"],function(e,r,i,n,a,l,s,S,o,t){var c={fromJson:function(e){var r=null;switch(e.type){case"esriSMS":r=new n(e);break;case"esriPMS":r=new a(e);break;case"esriTS":r=new t(e);break;case"esriSLS":r=void 0!==e.cap?new s(e):new l(e);break;case"esriCLS":r=new s(e);break;case"esriSFS":r=new S(e);break;case"esriPFS":r=new o(e)}return r},getShapeDescriptors:function(e){return e&&e.getShapeDescriptors?e.getShapeDescriptors():{defaultShape:null,fill:null,stroke:null}}};return r("extend-esri")&&e.mixin(e.getObject("symbol",!0,i),c),c});