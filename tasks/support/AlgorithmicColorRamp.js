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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/declare","../../Color","./ColorRamp"],function(o,r,t){var l=o(t,{declaredClass:"esri.tasks.support.AlgorithmicColorRamp",algorithm:null,fromColor:null,_fromColorSetter:function(o){return new r(o)},toColor:null,_toColorSetter:function(o){return new r(o)},type:"algorithmic",toJSON:function(){var o;switch(this.algorithm.toLowerCase()){case"cie-lab":o="esriCIELabAlgorithm";break;case"hsv":o="esriHSVAlgorithm";break;case"lab-lch":o="esriLabLChAlgorithm"}var t={type:"algorithmic",algorithm:o};return t.fromColor=r.toJSON(this.fromColor),t.toColor=r.toJSON(this.toColor),t}});return l});