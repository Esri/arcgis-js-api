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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../base/Descriptor","../../../../form/Tabs","../../../../form/iso/AbstractObject","../../../../form/iso/CodeListReference","../../../../form/iso/ObjectReference","../../../iso/gmd/citation/ResourceCitation","../../../iso/gmd/citation/ResourceContact","../../../iso/gmd/identification/ResourceDescription","../../../iso/gmd/identification/ResourceThumbnail","../../../iso/gmd/maintenance/MD_MaintenanceFrequencyCode","../../../inspire/gmd/identification/DataResourceKeywords","../../../inspire/gmd/constraints/ResourceConstraints","./DataResourceTab","dojo/text!./templates/DataIdentification.html","../../../../../../kernel"],function(e,i,t,o,n,a,s,c,r,d,m,f,g,u,b,R,j,l){var p=e(o,{templateString:j});return t("extend-esri")&&i.setObject("dijit.metadata.types.gemini.gmd.identification.DataIdentification",p,l),p});