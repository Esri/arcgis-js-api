// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["../../../declare","dojox/mvc/Templated","dijit/_WidgetBase","dojo/text!./templates/VariableInfo.html","dojo/i18n!../../../nls/jsapi"],function(i,e,n,t,r){r=r.geoenrichment.dijit.VariableInfo;var a=i("esri.dijit.geoenrichment.VariableInfo",[n,e],{nls:r,templateString:t,constructor:function(){this.inherited(arguments)},buildRendering:function(){this.inherited(arguments)},_setVariableAttr:function(i){this.divDescription.innerHTML=i.description?i.description:i.alias,this.divID2.innerHTML=i.id2,this.divSource.innerHTML="";for(var e in i.filteringTags)if("Source"===i.filteringTags[e].id){this.divSource.innerHTML=i.filteringTags[e].value;break}this.divVintage.innerHTML=i.vintage}});return a});