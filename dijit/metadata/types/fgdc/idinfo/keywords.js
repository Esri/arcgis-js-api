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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../base/Descriptor","../../../form/Element","../../../form/InputDelimitedTextArea","../../../form/InputText","../../../form/Tabs","../../../form/tools/ClickableValueTool","../../../form/fgdc/IsoTopicTool","dojo/text!./templates/keywords.html","../../../../../kernel"],(function(e,o,t,r,a,d,l,s,i,m,n,f){var c=e(r,{templateString:n});return t("extend-esri")&&o.setObject("dijit.metadata.types.fgdc.idinfo.keywords",c,f),c}));