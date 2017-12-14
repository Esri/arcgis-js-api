// COPYRIGHT © 2017 Esri
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

define(["require","exports","./LabelClass"],function(e,r,n){function i(e,r,i){var l=this;return e?e.map(function(e){var o=new n;if(o.read(e,i),o.labelExpression){var f=r.fields||r.layerDefinition&&r.layerDefinition.fields||l.fields;o.labelExpression=o.labelExpression.replace(t,function(e,r){return"["+a(r,f)+"]"})}return o}):null}function a(e,r){if(!r)return e;for(var n=e.toLowerCase(),i=0;i<r.length;i++){var a=r[i].name;if(a.toLowerCase()===n)return a}return e}Object.defineProperty(r,"__esModule",{value:!0});var t=/\[([^\[\]]+)\]/gi;r.reader=i});