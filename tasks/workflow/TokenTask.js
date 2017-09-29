// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["dojo/_base/lang","../../request","./WMBaseTask","./support/Util"],function(e,s,r,t){var n=new t,a=r.createSubclass({declaredClass:"esri.tasks.workflow.TokenTask",properties:{url:{}},parseTokens:function(r,t){var a=this.parsedUrl.path+"/tokens/parseTokens",o={job:r.jobId,stringtoparse:r.stringToParse,user:n._formatDomainUsername(r.user),f:"json"},i=this._encode(e.mixin({},this.parsedUrl.query,o)),u=this._generateOptions(i,t);return s(a,u).then(function(e){return e.data.output})}});return a});