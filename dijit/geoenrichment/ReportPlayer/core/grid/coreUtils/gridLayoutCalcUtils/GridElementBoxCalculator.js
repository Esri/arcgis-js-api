// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define([],(function(){var l={};function t(t,a,c,e,r){if(!a||!c)return null;for(var n=l.calculator[r?"getFieldWidth":"calcFieldWidth"](t,a,c),i=l.calculator[r?"getDataHeight":"calcDataHeight"](t,a,c),o=0,u=0,d=l.calculator.fieldToColumn(t,c),f=0;f<d.index;f++)o+=l.calculator.getFieldWidth(t,a,t.columns[f].field);for(f=0;f<a.index;f++)u+=l.calculator.getDataHeight(t,t.rows[f],c);function g(l){return e&&void 0!==e.places?Number(l.toFixed(e.places)):l}return{x:g(o),y:g(u),w:g(n),h:g(i)}}return l.calculator=null,l.calcCellBox=function(l,a){return t(l.parentGrid,l.row,l.column.field,a,!1)},l.calcDataBox=function(l,a,c,e){return t(l,a,c,e,!0)},l}));