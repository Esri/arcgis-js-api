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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/json","dojo/has","dojo/_base/lang","../../kernel"],(function(e,s,t,r,i){var o=e(null,{declaredClass:"esri.tasks.datareviewer.SessionOptions",userName:null,versionName:null,duplicateFilter:null,storeGeometry:!1,constructor:function(e,s,t,r){this.userName=e,void 0!==s&&(this.versionName=s),this.duplicateFilter=t,this.storeGeometry=r},toJsonSessionOptions:function(){var e={userName:this.userName,versionName:this.versionName,duplicateFilter:this.duplicateFilter,storeGeometry:this.storeGeometry};return s.stringify(e)}});return t("extend-esri")&&r.setObject("tasks.datareviewer.SessionOptions",o,i),o}));