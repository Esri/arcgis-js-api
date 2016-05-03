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

define([],function(){function n(n,r){return-1===n.indexOf(r)}function r(n,r,e){return!n.some(r.bind(null,e))}var e={findIndex:function(n,r,e){for(var t,i=n.length,u=0;i>u;u++)if(t=n[u],r.call(e,t,u,n))return u;return-1},equals:function(n,r){if(!n&&!r)return!0;if(!n||!r)return!1;if(n.length!=r.length)return!1;for(var e=0;e<n.length;e++)if(n[e]!==r[e])return!1;return!0},difference:function(e,t,i){var u,f;return i?(u=t.filter(r.bind(null,e,i)),f=e.filter(r.bind(null,t,i))):(u=t.filter(n.bind(null,e)),f=e.filter(n.bind(null,t))),{added:u,removed:f}}};return e});