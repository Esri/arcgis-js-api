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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../base/DocumentType","./PortalItemTransformer","dojo/i18n!../../../nls/i18nIso"],(function(e,t,a,i,n,r,d){var s=e(i,{caption:null,key:null,isIso:!0,isService:!1,isGmi:!1,metadataStandardName:null,metadataStandardVersion:null,afterInitializeAttribute:function(e,t){this.inherited(arguments)},afterInitializeElement:function(e,t){this.inherited(arguments)},beforeInitializeAttribute:function(e,t){var a=t.gxePath,i=e.rootElement.gxePath;this.isService&&a===i+"/gmd:hierarchyLevel/gmd:MD_ScopeCode/@codeListValue"?t.optionsFilter="service":this.isService&&a===i+"/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:scope/gmd:DQ_Scope/gmd:level/gmd:MD_ScopeCode/@codeListValue"?t.optionsFilter="service":this.inherited(arguments)},beforeInitializeElement:function(e,t){var a=t.gxePath,i=e.rootElement.gxePath;this.isService&&a===i+"/gmd:hierarchyLevel"?t.maxOccurs=1:this.isService&&a===i+"/gmd:hierarchyLevelName"?t.maxOccurs=1:a===i+"/gmd:metadataStandardName/gco:CharacterString"?this.metadataStandardName&&(t.value=this.metadataStandardName):a===i+"/gmd:metadataStandardVersion/gco:CharacterString"?this.metadataStandardVersion&&(t.value=this.metadataStandardVersion):a===i+"/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:geographicElement"?t.minOccurs=0:this.inherited(arguments)},initializeNamespaces:function(){this.addNamespace("gmd","http://www.isotc211.org/2005/gmd"),this.addNamespace("gco","http://www.isotc211.org/2005/gco"),this.addNamespace("srv","http://www.isotc211.org/2005/srv"),this.addNamespace("gml","http://www.opengis.net/gml"),this.addNamespace("xlink","http://www.w3.org/1999/xlink")},newPortalItemTransformer:function(e){return new n}});return a("extend-esri")&&t.setObject("dijit.metadata.types.iso.base.IsoDocumentType",s,d),s}));