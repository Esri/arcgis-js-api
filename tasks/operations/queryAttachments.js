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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/urlUtils","../../layers/support/AttachmentInfo","./urlUtils"],function(e,t,r,a,n,s,o){function u(e){var t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function c(e,t){for(var r={},a=0,o=e;a<o.length;a++)for(var u=o[a],c=u.parentObjectId,i=u.attachmentInfos,l=0,d=i;l<d.length;l++){var p=d[l],h=p.id,m=n.addProxy(n.addTokenParameter(t+"/"+c+"/attachments/"+h)),f=s.fromJSON(p);f.set({url:m,parentObjectId:c}),r[c]?r[c].push(f):r[c]=[f]}return r}function i(e,t,n){var s=o.mapParameters(r({},e.query,{f:"json"},u(t))),c={query:s};return n&&(c=r({},n,c)),a(e.path+"/queryAttachments",c)}Object.defineProperty(t,"__esModule",{value:!0}),t.processAttachmentQueryResult=c,t.executeAttachmentQuery=i});