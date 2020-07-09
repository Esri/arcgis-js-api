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

define(["require","exports","../../../../core/promiseUtils"],(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.executeForEachAsync=function(e,t,o){var n,i=null!==(n=null==o?void 0:o.batchSize)&&void 0!==n?n:100,c=r.createResolver(),l=0,u=function(){for(var n=Date.now(),a=!1,s=0;!a&&s<500;){try{for(o&&r.throwIfAborted(o);l<Math.min(l+i,e.length);l++)t(e[l])}catch(e){c.reject(e)}s=Date.now()-n,a=l>=e.length}a?c.resolve():setTimeout(u,0)};return u(),c.promise}}));