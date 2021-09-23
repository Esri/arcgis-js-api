/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./isWebGL2Context"],(function(e,t){"use strict";let E=function(e,t,E,T,r,i,_,u){this.createQuery=e,this.resultAvailable=t,this.getResult=E,this.disjoint=T,this.beginTimeElapsed=r,this.endTimeElapsed=i,this.createTimestamp=_,this.timestampBits=u};function T(e,T){if(T.disjointTimerQuery)return null;let r=e.getExtension("EXT_disjoint_timer_query_webgl2");return r&&t(e)?new E((()=>e.createQuery()),(t=>e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE)),(t=>e.getQueryParameter(t,e.QUERY_RESULT)),(()=>e.getParameter(r.GPU_DISJOINT_EXT)),(t=>e.beginQuery(r.TIME_ELAPSED_EXT,t)),(()=>e.endQuery(r.TIME_ELAPSED_EXT)),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>e.getQuery(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):(r=e.getExtension("EXT_disjoint_timer_query"),r?new E((()=>r.createQueryEXT()),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_AVAILABLE_EXT)),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)),(()=>e.getParameter(r.GPU_DISJOINT_EXT)),(e=>r.beginQueryEXT(r.TIME_ELAPSED_EXT,e)),(()=>r.endQueryEXT(r.TIME_ELAPSED_EXT)),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>r.getQueryEXT(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):null)}e.DisjointTimerQuery=E,e.createDisjointTimerQuery=T,Object.defineProperty(e,"__esModule",{value:!0})}));
