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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../base/Descriptor","../../../form/Element","../../../form/InputTextArea","../../../form/Section","../../../form/Tabs","../../../form/tools/ClickableValueTool","../citeinfo/citeinfo","../cntinfo/cntinfo","../idinfo/bounding","../idinfo/browse","../idinfo/descript","../idinfo/keywords","../idinfo/secinfo","../idinfo/status","../idinfo/timeperd","dojo/text!./templates/idinfo.html","../../../../../kernel"],(function(i,e,o,t,n,d,f,r,a,s,c,l,m,b,p,j,u,g,k,x){var T=i(t,{templateString:k});return o("extend-esri")&&e.setObject("dijit.metadata.types.fgdc.idinfo.idinfo",T,x),T}));