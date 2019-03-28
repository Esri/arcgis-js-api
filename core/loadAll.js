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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./asyncUtils","./Collection","./Loadable"],function(n,t,r,e,o,i,l){function a(n,t){return e(this,void 0,void 0,function(){return r(this,function(r){switch(r.label){case 0:return[4,n.load()];case 1:return r.sent(),[2,u(n,t)]}})})}function u(n,t){return e(this,void 0,void 0,function(){var a,u,c,f=this;return r(this,function(d){switch(d.label){case 0:return a=[],u=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];for(var r=0,e=n;r<e.length;r++){var o=e[r];o&&(Array.isArray(o)?u.apply(void 0,o):i.isCollection(o)?o.forEach(function(n){return u(n)}):o.isInstanceOf&&o.isInstanceOf(l)&&a.push(o))}},t(u),c=null,[4,o.map(a,function(n){return e(f,void 0,void 0,function(){var t;return r(this,function(r){switch(r.label){case 0:return[4,o.result(s(n)?n.loadAll():n.load())];case 1:return t=r.sent(),!1!==t.ok||c||(c=n),[2]}})})})];case 1:if(d.sent(),c)throw c.loadError;return[2,n]}})})}function s(n){return"loadAll"in n&&"function"==typeof n.loadAll}Object.defineProperty(t,"__esModule",{value:!0}),t.loadAll=a,t.loadAllChildren=u,t.default=a});