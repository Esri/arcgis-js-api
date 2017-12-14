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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../base/Descriptor","../../../../form/Tabs","../metadataEntity/MetadataIdentifier","../../../iso/gmd/metadataEntity/MetadataContact","../../../iso/gmd/metadataEntity/MetadataDate","../../../iso/gmd/metadataEntity/MetadataReference","../../../iso/gmd/metadataEntity/MetadataStandard","dojo/text!./templates/MetadataSection.html","../../../../../../kernel"],function(t,a,e,d,i,n,o,m,s,r,c,g){var y=t(d,{templateString:c});return e("extend-esri")&&a.setObject("dijit.metadata.types.gemini.gmd.metadataEntity.MetadataSection",y,g),y});