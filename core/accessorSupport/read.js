// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","./PropertyOrigin","./utils","./get"],function(e,r,t,n,o){function i(e,r,t){var n=e&&e.json&&e.json.readFrom;if(!n)return!1;for(var i=0,a=n;i<a.length;i++){var u=a[i];if(u===r)return!0;if(u.indexOf(".")>-1&&0===u.indexOf(r)&&o.exists(u,t))return!0}return!1}function a(e){return e&&e.json&&null!=e.json.readFrom}function u(e){return e.json&&e.json.ignore===!0}function s(e){return e&&!u(e)&&!a(e)}function f(e,r,t,n){s(r[t])&&(e[t]=!0);for(var o=0,a=Object.getOwnPropertyNames(r);o<a.length;o++){var u=a[o],f=r[u];i(f,t,n)&&(e[u]=!0)}}function l(e,r){void 0===r&&(r=t["default"].SERVICE);for(var o=n.getProperties(this),i=o.metadatas,a={},u=0,s=Object.getOwnPropertyNames(e);u<s.length;u++){var l=s[u];f(a,i,l,e)}o.setDefaultOrigin(r);for(var d=0,g=Object.getOwnPropertyNames(a);d<g.length;d++){var c=g[d],j=i[c],O=j&&j.json&&j.json.read,v=O?O.call(this,e[c],e):e[c];o.set(c,v)}return o.setDefaultOrigin(t["default"].USER),this}r.read=l,Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=l});