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

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/asyncUtils","../../core/Warning"],function(e,r,t,n,i,o){function s(e,r){return n(this,void 0,void 0,function(){var n,s,a;return t(this,function(t){switch(t.label){case 0:return n=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin),n&&"unique-value"===n.type&&n.styleOrigin?[4,i.result(n.populateFromStyle())]:[3,2];case 1:s=t.sent(),!1===s.ok&&(a=s.error,r&&r.messages&&r.messages.push(new o("renderer:style-reference","Failed to create unique value renderer from style reference: "+a.message,{error:a,context:r})),e.clear("renderer",r.origin)),t.label=2;case 2:return[2]}})})}Object.defineProperty(r,"__esModule",{value:!0}),r.loadStyleRenderer=s});