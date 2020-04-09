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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],(function(e,t,s,l){var n=e(null,{declaredClass:"esri.tasks.datareviewer.DashboardResult",fieldName:null,fieldValues:null,counts:null,filters:null,constructor:function(){this.fieldName="",this.fieldValues=[],this.counts=[]},getCount:function(e){if(this.fieldValues.length>0&&this.counts.length>0&&this.fieldValues.length===this.counts.length){for(var t=0;t<this.fieldValues.length;t++){if(this.fieldValues[t]===e)return this.counts[t]}return 0}return 0}});return t("extend-esri")&&s.setObject("tasks.datareviewer.DashboardResult",n,l),n}));