// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../kernel","./codelistData","dojo/i18n!../../../nls/i18nArcGIS"],function(e,a,o,t,n,l){var r=e(null,{constructor:function(e){a.mixin(this,e)},makeCodelist:function(e,a){var o=l.makeCodelist(a);return("CountryCode"===a||"LanguageCode"===a||"MonetaryUnits"===a)&&o.codes.sort(function(e,a){return""===e.value?0:"zxx"===e.value?0:e.label===a.label?0:e.label>a.label?1:-1}),o}});return t("extend-esri")&&a.setObject("dijit.metadata.types.arcgis.base.Codelists",r,n),r});