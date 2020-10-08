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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../request","../../core/addTokenParameter","../../core/urlUtils","../../layers/support/AttachmentInfo","./urlUtils"],(function(e,t,r,a,s,n,o,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.executeAttachmentQuery=t.processAttachmentQueryResult=void 0,t.processAttachmentQueryResult=function(e,t){for(var r={},a=0,c=e;a<c.length;a++)for(var u=c[a],i=u.parentObjectId,d=u.parentGlobalId,l=0,m=u.attachmentInfos;l<m.length;l++){var p=m[l],y=p.id,h=n.addProxy(s.addTokenParameter(t+"/"+i+"/attachments/"+y)),b=o.fromJSON(p);b.set({url:h,parentObjectId:i,parentGlobalId:d}),r[i]?r[i].push(b):r[i]=[b]}return r},t.executeAttachmentQuery=function(e,t,s){var n={query:c.mapParameters(r.__assign(r.__assign(r.__assign({},e.query),{f:"json"}),function(e){var t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}(t)))};return s&&(n=r.__assign(r.__assign({},s),n)),a(e.path+"/queryAttachments",n)}}));