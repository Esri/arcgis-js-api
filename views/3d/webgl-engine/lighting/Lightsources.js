// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/vec3f64"],(function(i,e,t){Object.defineProperty(e,"__esModule",{value:!0});var c=function(i,e,c){void 0===i&&(i=t.vec3f64.create()),void 0===e&&(e=t.vec3f64.fromValues(.57735,.57735,.57735)),void 0===c&&(c=!0),this.intensity=i,this.direction=e,this.castShadows=c};e.MainLight=c;var n=function(i,e){void 0===i&&(i=t.vec3f64.create()),void 0===e&&(e=t.vec3f64.fromValues(.57735,.57735,.57735)),this.intensity=t.vec3f64.create(),this.direction=t.vec3f64.create(),this.intensity=i,this.direction=e};e.FillLight=n;var r=function(i){void 0===i&&(i=t.vec3f64.create()),this.intensity=i};e.AmbientLight=r;var o=function(){this.sh={r:[0],g:[0],b:[0]}};e.SphericalHarmonicsLight=o}));