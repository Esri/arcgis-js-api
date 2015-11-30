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
define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(s,e,i,n){var o=s(null,{declaredClass:"esri.tasks.datareviewer.ReviewerSession",sessionId:0/0,sessionName:"",userName:"",versionName:"",constructor:function(s,e,i,n){this.sessionId=s,this.sessionName=e,this.userName=i,void 0!==n&&(this.versionName=n)},toString:function(){return isNaN(this.sessionId)?null:"Session "+this.sessionId+" : "+this.sessionName}});return e("extend-esri")&&i.setObject("tasks.datareviewer.ReviewerSession",o,n),o});