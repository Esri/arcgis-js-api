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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./IsoDocumentType","./DataRoot","dojo/i18n!../../../nls/i18nIso","../../../../../kernel"],function(e,a,t,o,n,d,s){var i=e(o,{caption:d.documentTypes.data.caption,description:d.documentTypes.data.description,key:"iso-19115",isService:!1,metadataStandardName:"ISO 19139/19115 Metadata for Datasets",metadataStandardVersion:"2003",newRootDescriptor:function(){return new n}});return t("extend-esri")&&a.setObject("dijit.metadata.types.iso.base.DataDocumentType",i,s),i});