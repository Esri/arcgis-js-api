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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./global","@dojo/framework/shim/Promise"],(function(e,n,r){var o=r.queueMicrotask?r.queueMicrotask:function(e){r.Promise.resolve().then(e)},t=[],u=[];function i(e){t.push(e),1===t.length&&o((function(){for(var e=0,n=u;e<n.length;e++){(0,n[e])()}var r=t.slice();t.length=0;for(var o=0,i=r;o<i.length;o++){(0,i[o])()}}))}return function(e){e.before=function(e){return u.push(e),{remove:function(){u=u.filter((function(n){return n!==e}))}}}}(i||(i={})),i}));