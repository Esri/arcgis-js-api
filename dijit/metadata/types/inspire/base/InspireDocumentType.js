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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../types/iso/base/IsoDocumentType","./PortalItemTransformer","dojo/i18n!../../../nls/i18nInspire","../../../../../kernel"],(function(e,t,a,i,d,n,m){var r=e(i,{caption:null,key:null,isService:!1,metadataStandardName:null,metadataStandardVersion:null,beforeInitializeAttribute:function(e,t){var a=t.gxePath;(this.isService||"/gmd:MD_Metadata/gmd:hierarchyLevel/gmd:MD_ScopeCode/@codeListValue"!==a)&&(this.isService||"/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:scope/gmd:DQ_Scope/gmd:level/gmd:MD_ScopeCode/@codeListValue"!==a)?this.inherited(arguments):t.optionsFilter="dataset,series"},beforeInitializeElement:function(e,t){var a=t.gxePath;"/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress"===a?t.minOccurs=1:this.isService||"/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:identifier"!==a?"/gmd:MD_Metadata/gmd:dataQualityInfo"===a?t.minOccurs=1:"/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:report"===a?t.minOccurs=1:this.isService&&"/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:lineage/gmd:LI_Lineage/gmd:statement"===a?t.minOccurs=0:this.inherited(arguments):t.minOccurs=1},newPortalItemTransformer:function(e){return new d}});return a("extend-esri")&&t.setObject("dijit.metadata.types.inspire.base.InspireDocumentType",r,m),r}));