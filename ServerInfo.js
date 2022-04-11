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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./kernel","./lang"],(function(e,r,n,i,t){var s=e(null,{declaredClass:"esri.ServerInfo",constructor:function(e){r.mixin(this,e)},toJson:function(){return t.fixJson({server:this.server,tokenServiceUrl:this.tokenServiceUrl,adminTokenServiceUrl:this.adminTokenServiceUrl,shortLivedTokenValidity:this.shortLivedTokenValidity,owningSystemUrl:this.owningSystemUrl,owningTenant:this.owningTenant,currentVersion:this.currentVersion,hasPortal:this.hasPortal,hasServer:this.hasServer,webTierAuth:this.webTierAuth})}});return n("extend-esri")&&(i.ServerInfo=s),s}));