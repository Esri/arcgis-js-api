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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/declare","dojo/has","../../kernel","../../OperationBase"],function(e,a,o,d,r){var n=a(r,{declaredClass:"esri.EditOperationBase",updateIds:function(a,o,d,r){e.forEach(o,function(o,n){var i=o[a.objectIdField];e.forEach(d,function(e,d){i===e&&(o[a.objectIdField]=r[d])})})}});return o("extend-esri")&&(d.EditOperationBase=n),n});