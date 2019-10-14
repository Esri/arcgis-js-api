// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./IsoDocumentType","./GmiRoot","dojo/i18n!../../../nls/i18nIso","../../../../../kernel"],function(t,e,a,i,s,o,d){var n=t(i,{caption:o.documentTypes.gmi.caption,description:o.documentTypes.gmi.description,key:"iso-19115-2",isService:!1,isGmi:!0,metadataStandardName:"ISO 19115-2 Geographic Information - Metadata Part 2 Extensions for imagery and gridded data",metadataStandardVersion:"ISO 19115-2:2009(E)",initializeNamespaces:function(){this.addNamespace("gmi","http://www.isotc211.org/2005/gmi"),this.addNamespace("gmd","http://www.isotc211.org/2005/gmd"),this.addNamespace("gco","http://www.isotc211.org/2005/gco"),this.addNamespace("srv","http://www.isotc211.org/2005/srv"),this.addNamespace("gss","http://www.isotc211.org/2005/gss"),this.addNamespace("gml","http://www.opengis.net/gml/3.2"),this.addNamespace("xlink","http://www.w3.org/1999/xlink")},newRootDescriptor:function(){return new s}});return a("extend-esri")&&e.setObject("dijit.metadata.types.iso.base.GmiDocumentType",n,d),n});