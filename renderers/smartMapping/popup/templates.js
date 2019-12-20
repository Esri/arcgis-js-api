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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","./predominance"],function(e,r,n,t,o){function u(e){return t(this,void 0,void 0,function(){var r,t,u;return n(this,function(n){return r=e.renderer,t=e.layer,u=r.authoringInfo&&r.authoringInfo.type,"unique-value"===r.type&&"predominance"===u?[2,o.getTemplates({renderer:r,layer:t})]:[2,null]})})}Object.defineProperty(r,"__esModule",{value:!0}),r.getTemplates=u});