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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/urlUtils","../../layers/support/AttachmentInfo","./urlUtils"],function(e,t,r,n,a,s,o){function u(e){var t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function c(e,t,r){for(var n={},o=0,u=e;o<u.length;o++)for(var c=u[o],i=c.parentObjectId,l=c.attachmentInfos,p=0,d=l;p<d.length;p++){var h=d[p],f=h.id,m=a.addProxy(t+"/"+i+"/attachments/"+f+(r?"?token="+r:"")),j=s.fromJSON(h);j.set({url:m,parentObjectId:i}),n[i]?n[i].push(j):n[i]=[j]}return n}function i(e,t,a){var s=o.mapParameters(r({},e.query,{f:"json"},u(t))),c={query:s};return a&&(c=r({},a,c)),n(e.path+"/queryAttachments",c)}Object.defineProperty(t,"__esModule",{value:!0}),t.processAttachmentQueryResult=c,t.executeAttachmentQuery=i});