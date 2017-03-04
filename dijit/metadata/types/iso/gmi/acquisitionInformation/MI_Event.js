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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../base/Descriptor","../../../../form/Attribute","../../../../form/Element","../../../../form/InputDate","../../../../form/iso/AbstractObject","../../../../form/iso/CodeListReference","../../../../form/iso/GcoElement","../../../../form/iso/ObjectReference","../../gmd/identification/SimpleMD_Identifier","./MI_ContextCode","./MI_SequenceCode","./MI_TriggerCode","dojo/text!./templates/MI_Event.html","../../../../../../kernel"],function(e,t,o,i,r,n,a,m,s,d,f,c,l,b,j,I,_){var g=e(i,{templateString:I});return o("extend-esri")&&t.setObject("dijit.metadata.types.iso.gmi.acquisitionInformation.MI_Event",g,_),g});