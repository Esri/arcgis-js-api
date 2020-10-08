// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/WeakMap","../core/maybe","./locale"],(function(e,t,r,o,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNumber=t.convertNumberFormatToIntlOptions=t.getFormatter=void 0;var n={ar:"ar-u-nu-latn"},i=new r.default,u={};function m(e){var t=e||u;if(!i.has(t)){var r=a.getLocale(),m=n[a.getLocale()]||r;i.set(t,new Intl.NumberFormat(m,e))}return o.assumeNonNull(i.get(t))}a.beforeLocaleChange((function(){i=new r.default,u={}})),t.getFormatter=m,t.convertNumberFormatToIntlOptions=function(e){void 0===e&&(e={});var t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t},t.formatNumber=function(e,t){return m(t).format(e)}}));