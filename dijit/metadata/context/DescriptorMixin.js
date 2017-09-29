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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../kernel","dojo/i18n!../nls/i18nArcGIS"],function(e,i,t,s,o){var r=e(null,{i18nArcGIS:o,codeListPrefix:"http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#",inspireCodeListPrefix:"http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#",constructor:function(e){i.mixin(this,e)}});return t("extend-esri")&&i.setObject("dijit.metadata.context.DescriptorMixin",r,s),r});