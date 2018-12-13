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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./asyncUtils","./Collection","./Loadable"],function(r,t,e,n,o,l,i){function a(r,t){return n(this,void 0,void 0,function(){var a,s,c,f=this;return e(this,function(d){switch(d.label){case 0:return[4,r.load()];case 1:return d.sent(),a=[],s=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];for(var e=0,n=r;e<n.length;e++){var o=n[e];o&&(Array.isArray(o)?s.apply(void 0,o):l.isCollection(o)?o.forEach(function(r){return s(r)}):o.isInstanceOf&&o.isInstanceOf(i)&&a.push(o))}},t(s),c=null,[4,o.map(a,function(r){return n(f,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return[4,o.result(u(r)?r.loadAll():r.load())];case 1:return t=e.sent(),!1!==t.ok||c||(c=r),[2]}})})})];case 2:if(d.sent(),c)throw c.loadError;return[2,r]}})})}function u(r){return"loadAll"in r&&"function"==typeof r.loadAll}Object.defineProperty(t,"__esModule",{value:!0}),t.loadAll=a,t.default=a});