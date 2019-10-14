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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../jsonMap","./property"],function(e,n,r,t){function o(e){return t.property({type:e})}Object.defineProperty(n,"__esModule",{value:!0}),n.enumeration=o,function(e){function n(){return function(e,n){void 0===n&&(n={ignoreUnknown:!0});var o=e instanceof r.JSONMap?e:new r.JSONMap(e,n);return t.property({type:n&&n.ignoreUnknown?o.apiValues:String,json:{type:o.jsonValues,read:{reader:o.read},write:{writer:o.write}}})}}e.serializable=n}(o=n.enumeration||(n.enumeration={}))});