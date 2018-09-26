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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/urlUtils","./urlUtils"],function(e,t,r,n,a,s){function o(e){var t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function u(e,t,n){for(var s={},o=0,u=e;o<u.length;o++)for(var c=u[o],i=c.parentObjectId,l=c.attachmentInfos,d=0,p=l;d<p.length;d++){var h=p[d],j=h.id,f=a.addProxy(t+"/"+i+"/attachments/"+j+(n?"?token="+n:"")),m=r({},h,{parentObjectId:i,url:f});s[i]?s[i].push(m):s[i]=[m]}return s}function c(e,t,a){var u=s.mapParameters(r({},e.query,{f:"json"},o(t))),c={query:u};return a&&(c=r({},a,c)),n(e.path+"/queryAttachments",c)}Object.defineProperty(t,"__esModule",{value:!0}),t.processAttachmentQueryResult=u,t.executeAttachmentQuery=c});