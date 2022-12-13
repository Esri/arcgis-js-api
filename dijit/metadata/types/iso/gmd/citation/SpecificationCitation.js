// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../base/Descriptor","../../../../form/Element","../../../../form/iso/AbstractObject","../../../../form/iso/GcoElement","./CI_Date","dojo/text!./templates/SpecificationCitation.html","../../../../../../kernel"],(function(t,e,i,o,a,n,r,s,c,d){var m=t(o,{templateString:c});return i("extend-esri")&&e.setObject("dijit.metadata.types.iso.gmd.citation.SpecificationCitation",m,d),m}));