// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./InspireDocumentType","./DataRoot","dojo/i18n!../../../nls/i18nInspire","../../../../../kernel"],(function(e,a,n,t,i,o,d){var s=e(t,{caption:o.documentTypes.data.caption,description:o.documentTypes.data.description,key:"inspire-iso-19115",isService:!1,metadataStandardName:"INSPIRE Metadata Implementing Rules",metadataStandardVersion:"Technical Guidelines based on EN ISO 19115 and EN ISO 19119 (Version 1.2)",newRootDescriptor:function(){return new i}});return n("extend-esri")&&a.setObject("dijit.metadata.types.inspire.base.DataDocumentType",s,d),s}));