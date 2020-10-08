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

define(["require","exports","tslib","./asyncUtils","./Collection","./Loadable","./maybe"],(function(e,r,t,n,o,i,l){"use strict";function a(e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){switch(t.label){case 0:return[4,e.load()];case 1:return t.sent(),[2,u(e,r)]}}))}))}function u(e,r){return t.__awaiter(this,void 0,void 0,(function(){var a,u,s,c=this;return t.__generator(this,(function(d){switch(d.label){case 0:return a=[],r(u=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var t=0,n=e;t<n.length;t++){var s=n[t];l.isNone(s)||(Array.isArray(s)?u.apply(void 0,s):o.isCollection(s)?s.forEach((function(e){return u(e)})):i.isLoadable(s)&&a.push(s))}}),s=null,[4,n.map(a,(function(e){return t.__awaiter(c,void 0,void 0,(function(){return t.__generator(this,(function(r){switch(r.label){case 0:return[4,n.result((t=e,"loadAll"in t&&"function"==typeof t.loadAll?e.loadAll():e.load()))];case 1:return!1!==r.sent().ok||s||(s=e),[2]}var t}))}))}))];case 1:if(d.sent(),s)throw s.loadError;return[2,e]}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.loadAllChildren=r.loadAll=void 0,r.loadAll=a,r.loadAllChildren=u,r.default=a}));