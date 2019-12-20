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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(e,s,l,r){var i=e(null,{declaredClass:"esri.renderer.SymbolAger",getAgedSymbol:function(e,s){},_setSymbolSize:function(e,s){switch(e.type){case"simplemarkersymbol":e.setSize(s);break;case"picturemarkersymbol":e.setWidth(s),e.setHeight(s);break;case"simplelinesymbol":case"cartographiclinesymbol":e.setWidth(s);break;case"simplefillsymbol":case"picturefillsymbol":e.outline&&e.outline.setWidth(s)}}});return l("extend-esri")&&s.setObject("renderer.SymbolAger",i,r),i});