// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../Color","./ColorRamp"],(function(o,r,l,t,a,e){var i=o(e,{declaredClass:"esri.tasks.AlgorithmicColorRamp",type:"algorithmic",fromColor:null,toColor:null,algorithm:null,toJson:function(){var o;switch(this.algorithm&&this.algorithm.toLowerCase()){case"cie-lab":o="esriCIELabAlgorithm";break;case"hsv":o="esriHSVAlgorithm";break;case"lab-lch":o="esriLabLChAlgorithm"}var r={type:"algorithmic",algorithm:o};return r.fromColor=a.toJsonColor(this.fromColor),r.toColor=a.toJsonColor(this.toColor),r}});return l("extend-esri")&&r.setObject("tasks.AlgorithmicColorRamp",i,t),i}));