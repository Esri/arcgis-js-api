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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/accessorSupport/decorators"],function(e,r,o){function t(e){var r=this;return console.warn("@vmProperty is deprecated, use @aliasOf instead"),function(t,a){var c=e||a,i={aliasOf:"viewModel."+c};o.property.call(r,i).call(r,t,a)}}Object.defineProperty(r,"__esModule",{value:!0}),r.vmProperty=t});