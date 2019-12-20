// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./contains"],function(n,o,t){function e(n,o,e,r){return t.polygonContainsPoint(n,o,e,r)}function r(n,o,e,r,s,u){for(var c=i(s,u),l=r.coords,f=r.lengths,p=0,g=0;p<f.length;p++,g+=c)if(t.polygonContainsCoords(n,o,e,l[g],l[g+1]))return!0;return!1}function i(n,o){return n?o?4:3:o?3:2}Object.defineProperty(o,"__esModule",{value:!0}),o.polygonIntersectsPoint=e,o.polygonIntersectsMultipoint=r});