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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","./isWebGL2Context"],(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.load=function(e,t){if(t.disjointTimerQuery)return null;var n=e.getExtension("EXT_disjoint_timer_query")||e.getExtension("EXT_disjoint_timer_query_webgl2");return n?r.default(e)?{createQuery:function(){return e.createQuery()},resultAvailable:function(t){return e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE)},getResult:function(t){return e.getQueryParameter(t,e.QUERY_RESULT)},disjoint:function(){return e.getParameter(n.GPU_DISJOINT_EXT)},beginTimeElapsed:function(t){return e.beginQuery(n.TIME_ELAPSED_EXT,t)},endTimeElapsed:function(){return e.endQuery(n.TIME_ELAPSED_EXT)},createTimestamp:function(e){return n.queryCounterEXT(e,n.TIMESTAMP_EXT)},timestampBits:function(){return e.getQuery(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)}}:{createQuery:function(){return n.createQueryEXT()},resultAvailable:function(e){return n.getQueryObjectEXT(e,n.QUERY_RESULT_AVAILABLE_EXT)},getResult:function(e){return n.getQueryObjectEXT(e,n.QUERY_RESULT_EXT)},disjoint:function(){return e.getParameter(n.GPU_DISJOINT_EXT)},beginTimeElapsed:function(e){return n.beginQueryEXT(n.TIME_ELAPSED_EXT,e)},endTimeElapsed:function(){return n.endQueryEXT(n.TIME_ELAPSED_EXT)},createTimestamp:function(e){return n.queryCounterEXT(e,n.TIMESTAMP_EXT)},timestampBits:function(){return n.getQueryEXT(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)}}:null}}));