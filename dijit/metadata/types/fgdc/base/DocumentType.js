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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../base/DocumentType","./Root","./PortalItemTransformer","dojo/i18n!../../../nls/i18nFgdc","../../../../../kernel"],(function(t,e,a,n,i,o,c,d){var r=t(n,{caption:c.documentTypes.fgdc.caption,description:c.documentTypes.fgdc.description,key:"fgdc",metadataStandardName:"FGDC Content Standard for Digital Geospatial Metadata",metadataStandardVersion:"FGDC-STD-001-1998",beforeInitializeElement:function(t,e){var a=e.gxePath;"/metadata/idinfo/ptcontac/cntinfo"===a?e.label=c.idinfo.ptcontac:"/metadata/dataqual/lineage/srcinfo/srccite/citeinfo"===a?e.label=c.dataqual.srcinfo.srccite:"/metadata/dataqual/lineage/procstep/proccont/cntinfo"===a?e.minOccurs=1:"/metadata/distinfo/distrib/cntinfo"===a?e.minOccurs=1:"/metadata/metainfo/metc/cntinfo"===a?e.minOccurs=1:this.inherited(arguments)},newPortalItemTransformer:function(t){return new o},newRootDescriptor:function(){return new i}});return a("extend-esri")&&e.setObject("dijit.metadata.types.fgdc.base.DocumentType",r,d),r}));