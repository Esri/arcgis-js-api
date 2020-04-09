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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../request","../../core/urlUtils","../../layers/support/AttachmentInfo","./urlUtils"],(function(e,t,r,a,n,o,s){Object.defineProperty(t,"__esModule",{value:!0}),t.processAttachmentQueryResult=function(e,t){for(var r={},a=0,s=e;a<s.length;a++)for(var u=s[a],c=u.parentObjectId,l=u.parentGlobalId,d=0,i=u.attachmentInfos;d<i.length;d++){var p=i[d],y=p.id,h=n.addProxy(n.addTokenParameter(t+"/"+c+"/attachments/"+y)),m=o.fromJSON(p);m.set({url:h,parentObjectId:c,parentGlobalId:l}),r[c]?r[c].push(m):r[c]=[m]}return r},t.executeAttachmentQuery=function(e,t,n){var o={query:s.mapParameters(r({},e.query,{f:"json"},function(e){var t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}(t)))};return n&&(o=r({},n,o)),a(e.path+"/queryAttachments",o)}}));