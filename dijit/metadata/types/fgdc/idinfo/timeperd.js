// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../base/Descriptor","../../../form/Element","../../../form/InputSelectOne","../../../form/Options","../../../form/Option","../timeinfo/timeinfo","dojo/text!./templates/timeperd.html","../../../../../kernel"],function(e,t,o,i,n,r,d,m,a,f,s){var p=e(i,{templateString:f});return o("extend-esri")&&t.setObject("dijit.metadata.types.fgdc.idinfo.timeperd",p,s),p});