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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./asyncUtils","./Collection","./Loadable"],function(r,t,n,e,o,i,l){function a(r,t){return e(this,void 0,void 0,function(){return n(this,function(n){switch(n.label){case 0:return[4,r.load()];case 1:return n.sent(),[2,u(r,t)]}})})}function u(r,t){return e(this,void 0,void 0,function(){var a,u,c,d=this;return n(this,function(f){switch(f.label){case 0:return a=[],u=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];for(var n=0,e=r;n<e.length;n++){var o=e[n];o&&(Array.isArray(o)?u.apply(void 0,o):i.isCollection(o)?o.forEach(function(r){return u(r)}):l.isLoadable(o)&&a.push(o))}},t(u),c=null,[4,o.map(a,function(r){return e(d,void 0,void 0,function(){var t;return n(this,function(n){switch(n.label){case 0:return[4,o.result(s(r)?r.loadAll():r.load())];case 1:return t=n.sent(),!1!==t.ok||c||(c=r),[2]}})})})];case 1:if(f.sent(),c)throw c.loadError;return[2,r]}})})}function s(r){return"loadAll"in r&&"function"==typeof r.loadAll}Object.defineProperty(t,"__esModule",{value:!0}),t.loadAll=a,t.loadAllChildren=u,t.default=a});