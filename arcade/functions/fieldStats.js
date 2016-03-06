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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["require","exports"],function(e,t){function r(e){for(var t=0,r=0;r<e.length;r++)t+=e[r];return t/e.length}function n(e){for(var t=r(e),n=0,a=0;a<e.length;a++)n+=Math.pow(t-e[a],2);return n/e.length}function a(e){for(var t=0,r=0;r<e.length;r++)t+=e[r];return t}function c(e,t){for(var r=[],n={},a=0;a<e.length;a++)if(void 0!==e[a]&&null!==e[a]&&void 0===n[e[a]]&&(r.push(e[a]),n[e[a]]=1),r.length>=t&&-1!==t)return r;return r}function s(e){switch(e.toLowerCase()){case"distinct":return"distinct";case"avg":case"mean":return"avg";case"min":return"min";case"sum":return"sum";case"max":return"max";case"stdev":case"stddev":return"stddev";case"var":case"variance":return"var";case"count":return"count"}return""}function u(e,t,s){switch(void 0===s&&(s=1e3),e.toLowerCase()){case"distinct":return c(t,s);case"avg":case"mean":return r(t);case"min":return Math.min.apply(Math,t);case"sum":return a(t);case"max":return Math.max.apply(Math,t);case"stdev":case"stddev":return Math.sqrt(n(t));case"var":case"variance":return n(t);case"count":return t.length}return 0}t.decodeStatType=s,t.calculateStat=u});