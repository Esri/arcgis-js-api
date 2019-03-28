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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../base/Descriptor","../../../form/Element","../../../form/InputText","../../../form/InputTextArea","../../../form/tools/ClickableValueTool","dojo/text!./templates/attracc.html","../../../../../kernel"],function(e,t,a,o,r,l,d,n,c,s){var m=e(o,{templateString:c});return a("extend-esri")&&t.setObject("dijit.metadata.types.fgdc.dataqual.attracc",m,s),m});