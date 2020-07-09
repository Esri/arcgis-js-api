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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define([],(function(){var t={};function a(a,l,e,c,r){if(!l||!e)return null;for(var i=t.calculator[r?"getFieldWidth":"calcFieldWidth"](a,l,e),n=t.calculator[r?"getDataHeight":"calcDataHeight"](a,l,e),u=0,o=0,d=t.calculator.fieldToColumn(a,e),f=0;f<d.index;f++)u+=t.calculator.getFieldWidth(a,l,a.columns[f].field);for(f=0;f<l.index;f++)o+=t.calculator.getDataHeight(a,a.store.data[f],e);function g(t){return c&&void 0!==c.places?Number(t.toFixed(c.places)):t}return{x:g(u),y:g(o),w:g(i),h:g(n)}}return t.calculator=null,t.calcCellBox=function(t,l){return a(t.parentGrid,t.gridData,t.column.field,l,!1)},t.calcDataBox=function(t,l,e,c){return a(t,l,e,c,!0)},t}));