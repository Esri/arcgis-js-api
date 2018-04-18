// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../lib/glMatrix"],function(i,t,e){Object.defineProperty(t,"__esModule",{value:!0});var n=e.vec3d,r=function(){function i(i,t,e){void 0===i&&(i=n.create()),void 0===t&&(t=n.createFrom(.57735,.57735,.57735)),void 0===e&&(e=!0),this.intensity=i,this.direction=t,this.castShadows=e}return i}();t.MainLight=r;var o=function(){function i(i,t){void 0===i&&(i=n.create()),void 0===t&&(t=n.createFrom(.57735,.57735,.57735)),this.intensity=n.create(),this.direction=n.create(),this.intensity=i,this.direction=t}return i}();t.FillLight=o;var c=function(){function i(i){void 0===i&&(i=n.create()),this.intensity=i}return i}();t.AmbientLight=c;var s=function(){function i(){this.sh={r:[0],g:[0],b:[0]}}return i}();t.SphericalHarmonicsLight=s});