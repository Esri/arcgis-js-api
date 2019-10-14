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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../base/Descriptor","../../../../form/Attribute","../../../../form/Element","../../../../form/ElementChoice","../../../../form/InputNumber","../../../../form/InputSelectOne","../../../../form/Options","../../../../form/Option","../../../../form/iso/AbstractObject","../../../../form/iso/CodeListReference","../../../../form/iso/GcoElement","../../../../form/iso/ObjectReference","../../../iso/gmd/identification/MD_SpatialRepresentationTypeCode","dojo/text!./templates/DataRepresentation.html","../../../../../../kernel"],function(e,t,o,i,n,r,a,m,s,f,d,c,p,l,b,j,u,O){var g=e(i,{templateString:u});return o("extend-esri")&&t.setObject("dijit.metadata.types.gemini.gmd.identification.DataRepresentation",g,O),g});