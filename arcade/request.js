/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../request"],(function(e,n){"use strict";function o(e,o,t,r,s=null){if(null!==s)return s.getToken().then((s=>{if(e=e+="?token="+s,"get"===r.toLowerCase())return n(e,{responseType:"json",query:o});if(o)for(const n in o)e.indexOf("?")>-1?e+="&":e+="?",e+=encodeURIComponent(n)+"="+encodeURIComponent(o[n]);return n(e,{method:"post",query:t,responseType:"json"})}));if("get"===r.toLowerCase())return n(e,{responseType:"json",query:o});if(o)for(const n in o)e.indexOf("?")>-1?e+="&":e+="?",e+=encodeURIComponent(n)+"="+encodeURIComponent(o[n]);return n(e,{method:"post",responseType:"json",query:t})}e.serviceRequest=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
