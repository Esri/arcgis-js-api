// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["../../request","../../core/lang","./WMBaseTask","./support/Util"],function(e,r,s,t){var n=new t;return s.createSubclass({declaredClass:"esri.tasks.workflow.TokenTask",properties:{url:{}},parseTokens:function(s,t){var a=this.parsedUrl.path+"/tokens/parseTokens",o={job:s.jobId,stringtoparse:s.stringToParse,user:n._formatDomainUsername(s.user),f:"json"},i=this._encode(r.mixin({},this.parsedUrl.query,o)),u=this._generateOptions(i,t);return e(a,u).then(function(e){return e.data.output})}})});