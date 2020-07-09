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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../request","../../core/urlUtils","../../layers/support/AttachmentInfo","./urlUtils"],(function(e,t,r,a,s,n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.processAttachmentQueryResult=function(e,t){for(var r={},a=0,o=e;a<o.length;a++)for(var i=o[a],u=i.parentObjectId,c=i.parentGlobalId,l=0,d=i.attachmentInfos;l<d.length;l++){var p=d[l],y=p.id,h=s.addProxy(s.addTokenParameter(t+"/"+u+"/attachments/"+y)),m=n.fromJSON(p);m.set({url:h,parentObjectId:u,parentGlobalId:c}),r[u]?r[u].push(m):r[u]=[m]}return r},t.executeAttachmentQuery=function(e,t,s){var n={query:o.mapParameters(r.__assign(r.__assign(r.__assign({},e.query),{f:"json"}),function(e){var t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}(t)))};return s&&(n=r.__assign(r.__assign({},s),n)),a(e.path+"/queryAttachments",n)}}));