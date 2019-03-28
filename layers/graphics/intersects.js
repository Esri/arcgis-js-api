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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./contains","./utils"],function(n,o,t,e){function r(n,o,e,r){return t.polygonContainsPoint(n,o,e,r)}function i(n,o,r,i,s,u){for(var l=e.getStride(s,u),c=i.coords,f=i.lengths,g=0,p=0;g<f.length;g++,p+=l)if(t.polygonContainsCoords(n,o,r,c[p],c[p+1]))return!0;return!1}Object.defineProperty(o,"__esModule",{value:!0}),o.polygonIntersectsPoint=r,o.polygonIntersectsMultipoint=i});