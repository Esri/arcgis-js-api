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

define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./asyncUtils","./Collection","./Loadable"],function(e,n,t,r,o,a,i){function l(e,n){return r(this,void 0,void 0,function(){var l,u,c=this;return t(this,function(f){switch(f.label){case 0:return[4,e.load()];case 1:return f.sent(),l=[],u=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var t=0,r=e;t<r.length;t++){var o=r[t];o&&(Array.isArray(o)?u.apply(void 0,o):a.isCollection(o)?o.forEach(function(e){return u(e)}):o.isInstanceOf&&o.isInstanceOf(i)&&l.push(o))}},n(u),[4,o.map(l,function(e){return r(c,void 0,void 0,function(){return t(this,function(n){switch(n.label){case 0:return s(e)?[4,e.loadAll()]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,e.load()];case 3:n.sent(),n.label=4;case 4:return[2]}})})})];case 2:return f.sent(),[2,e]}})})}function s(e){return"loadAll"in e&&"function"==typeof e.loadAll}Object.defineProperty(n,"__esModule",{value:!0}),n.loadAll=l,n.default=l});