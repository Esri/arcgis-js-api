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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],(function(e,t,l,a){var s=e(null,{declaredClass:"esri.tasks.PrintTemplate",label:null,exportOptions:{width:800,height:1100,dpi:96},layoutOptions:null,format:"PNG32",layout:"MAP_ONLY",outScale:0,preserveScale:!0,forceFeatureAttributes:!1,showAttribution:null,showLabels:!0});return l("extend-esri")&&t.setObject("tasks.PrintTemplate",s,a),s}));