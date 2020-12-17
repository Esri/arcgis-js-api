// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/json","dojo/has","dojo/_base/lang","../../kernel"],(function(e,s,t,i,r){var n=e(null,{declaredClass:"esri.tasks.datareviewer.ReviewerAttributes",sessionId:NaN,severity:NaN,resourceName:null,reviewStatus:null,reviewTechnician:null,notes:null,subtype:"",lifecycleStatus:NaN,constructor:function(){},toJSON:function(){var e={};return isNaN(this.sessionId)||(e.sessionId=this.sessionId),isNaN(this.severity)||(e.severity=this.severity),null!==this.resourceName&&(e.resourceName=this.resourceName),null!==this.reviewStatus&&(e.reviewStatus=this.reviewStatus),null!==this.reviewTechnician&&(e.reviewTechnician=this.reviewTechnician),null!==this.notes&&(e.notes=this.notes),null!==this.subtype&&(e.subtype=this.subtype),isNaN(this.lifecycleStatus)||(e.lifecycleStatus=this.lifecycleStatus),s.stringify(e)}});return t("extend-esri")&&i.setObject("tasks.datareviewer.ReviewerAttributes",n,r),n}));