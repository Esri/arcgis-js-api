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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojox/gfx","dojox/charting/plot2d/common"],function(e,o){var t={};return t.getLabelInfo=function(t,n,r){var l=t.opt.labelFunc?t.opt.labelFunc.apply(t,[n,t.opt.fixed,t.opt.precision]):n.text||o.getLabel(n[n.valueProp],t.opt.fixed,t.opt.precision)||"",a=-1!==l.indexOf("two-row-label='true'")?2:1;return l=l.replace(" two-row-label='true'",""),l=l.replace(" two-row-label='false'",""),{text:l,numRows:a,box:function(o){return e._base._getTextBox(o,{font:r.series.font})}(l)}},t});