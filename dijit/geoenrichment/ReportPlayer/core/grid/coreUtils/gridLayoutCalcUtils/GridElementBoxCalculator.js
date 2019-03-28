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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define([],function(){function t(t,l,e,c,r){function i(t){return c&&void 0!==c.places?Number(t.toFixed(c.places)):t}if(!l||!e)return null;for(var n=a.calculator[r?"getFieldWidth":"calcFieldWidth"](t,l,e),u=a.calculator[r?"getDataHeight":"calcDataHeight"](t,l,e),o=0,d=0,f=a.calculator.fieldToColumn(t,e),g=0;g<f.index;g++)o+=a.calculator.getFieldWidth(t,l,t.columns[g].field);for(g=0;g<l.index;g++)d+=a.calculator.getDataHeight(t,t.store.data[g],e);return{x:i(o),y:i(d),w:i(n),h:i(u)}}var a={};return a.calculator=null,a.calcCellBox=function(a,l){return t(a.parentGrid,a.gridData,a.column.field,l,!1)},a.calcDataBox=function(a,l,e,c){return t(a,l,e,c,!0)},a});