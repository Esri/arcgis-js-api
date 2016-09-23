// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../core/declare"],function(e){var l=e(null,{declaredClass:"esri.renderer.SymbolAger",getAgedSymbol:function(e,l){},_setSymbolSize:function(e,l){switch(e.type){case"simple-marker-symbol":e.setSize(l);break;case"picture-marker-symbol":e.setWidth(l),e.setHeight(l);break;case"simple-line-symbol":case"cartographic-line-symbol":e.setWidth(l);break;case"simple-fill-symbol":case"picture-fill-symbol":e.outline&&e.outline.setWidth(l)}}});return l});