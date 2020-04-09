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

define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./asyncUtils","./Collection","./Loadable"],(function(r,t,e,n,o,l,i){function a(r,t){return n(this,void 0,void 0,(function(){return e(this,(function(e){switch(e.label){case 0:return[4,r.load()];case 1:return e.sent(),[2,u(r,t)]}}))}))}function u(r,t){return n(this,void 0,void 0,(function(){var a,u,s,c=this;return e(this,(function(d){switch(d.label){case 0:return a=[],t(u=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];for(var e=0,n=r;e<n.length;e++){var o=n[e];o&&(Array.isArray(o)?u.apply(void 0,o):l.isCollection(o)?o.forEach((function(r){return u(r)})):i.isLoadable(o)&&a.push(o))}}),s=null,[4,o.map(a,(function(r){return n(c,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return[4,o.result((e=r,"loadAll"in e&&"function"==typeof e.loadAll?r.loadAll():r.load()))];case 1:return!1!==t.sent().ok||s||(s=r),[2]}var e}))}))}))];case 1:if(d.sent(),s)throw s.loadError;return[2,r]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.loadAll=a,t.loadAllChildren=u,t.default=a}));