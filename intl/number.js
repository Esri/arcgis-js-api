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

define(["require","exports","../core/tsSupport/assignHelper","@dojo/framework/shim/WeakMap","./locale"],function(e,r,t,a,n){function o(e){var r=e||m;if(!c.has(r)){var t=n.getLocale(),a=l[n.getLocale()]||t;c.set(r,new Intl.NumberFormat(a,e))}return c.get(r)}function i(e){void 0===e&&(e={});var r={};return null!=e.digitSeparator&&(r.useGrouping=e.digitSeparator),null!=e.places&&(r.minimumFractionDigits=r.maximumFractionDigits=e.places),r}function u(e,r){return o(r).format(e)}Object.defineProperty(r,"__esModule",{value:!0});var l={ar:"ar-u-nu-arab"},c=new a.default,m={};n.onLocaleChange(function(){c=new a.default,m={}}),r.getFormatter=o,r.convertNumberFormatToIntlOptions=i,r.formatNumber=u});