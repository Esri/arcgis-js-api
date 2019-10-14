// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./asyncUtils","./Collection","./Loadable"],function(t,n,r,e,o,i,l){function a(t,n){return e(this,void 0,void 0,function(){return r(this,function(r){switch(r.label){case 0:return[4,t.load()];case 1:return r.sent(),[2,u(t,n)]}})})}function u(t,n){return e(this,void 0,void 0,function(){var a,u,c,f=this;return r(this,function(d){switch(d.label){case 0:return a=[],u=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var r=0,e=t;r<e.length;r++){var o=e[r];o&&(Array.isArray(o)?u.apply(void 0,o):i.isCollection(o)?o.forEach(function(t){return u(t)}):o.isInstanceOf&&l.isLoadable(o)&&a.push(o))}},n(u),c=null,[4,o.map(a,function(t){return e(f,void 0,void 0,function(){var n;return r(this,function(r){switch(r.label){case 0:return[4,o.result(s(t)?t.loadAll():t.load())];case 1:return n=r.sent(),!1!==n.ok||c||(c=t),[2]}})})})];case 1:if(d.sent(),c)throw c.loadError;return[2,t]}})})}function s(t){return"loadAll"in t&&"function"==typeof t.loadAll}Object.defineProperty(n,"__esModule",{value:!0}),n.loadAll=a,n.loadAllChildren=u,n.default=a});