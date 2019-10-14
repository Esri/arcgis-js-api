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

define(["require","exports","./tsSupport/awaiterHelper","./tsSupport/generatorHelper","@dojo/framework/shim/Promise"],function(e,r,t,n){function o(r,o){return t(this,void 0,void 0,function(){var t;return n(this,function(n){switch(n.label){case 0:return[4,new Promise(function(r,t){e(["./sql/WhereClause"],r,t)})];case 1:return t=n.sent().WhereClause,[2,t.create(r,o)]}})})}Object.defineProperty(r,"__esModule",{value:!0}),r.parseWhereClause=o});