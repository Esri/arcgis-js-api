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

define(["./GridDataUtil"],(function(e){var t={fitContentInsideCell:function(t,i){var n=e.getFieldInfo(t);if(n&&t.content){var r=t.content,a=t.parentGrid,s=t[a.hasRealBorders||a.isMultiDataTable()?"getContentWidth":"getWidth"](),o=t[a.hasRealBorders||a.isMultiDataTable()?"getContentHeight":"getHeight"]();n.isReportSection?(r.setHeight(o,{resizeContentProportionally:!0}),r.setWidth(s,{resizeContentProportionally:!0})):n.isChart?r.resize(s,o):n.isInfographic?r.resize(s,o,{sync:i&&i.sync}):n.isMap?r.resize({w:s,h:o}):(n.isImage||n.isShape)&&r.resize({w:s,h:o},t.getFullStyle())}}};return t}));