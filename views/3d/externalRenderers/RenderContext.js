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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../webgl-engine/lib/Camera","../webgl-engine/lib/gl-matrix"],function(e,i,n,t){var r=t.vec3d,c=function(){function e(e){this.view=e,this.camera=new n,this.sunLight={direction:r.create(),diffuse:{color:r.create(),intensity:1},ambient:{color:r.create(),intensity:1}}}return e}();return c});