/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../request"],(function(e,n,o){"use strict";function t(e,n,o,t){return r.apply(this,arguments)}function r(){return(r=n._asyncToGenerator((function*(e,n,t,r,s=null){if(null!==s){if(e=e+="?token="+(yield s.getToken()),"get"===r.toLowerCase())return o(e,{responseType:"json",query:n});if(n)for(const o in n)e.includes("?")?e+="&":e+="?",e+=encodeURIComponent(o)+"="+encodeURIComponent(n[o]);return o(e,{method:"post",query:t,responseType:"json"})}if("get"===r.toLowerCase())return o(e,{responseType:"json",query:n});if(n)for(const o in n)e.includes("?")?e+="&":e+="?",e+=encodeURIComponent(o)+"="+encodeURIComponent(n[o]);return yield o(e,{method:"post",responseType:"json",query:t})}))).apply(this,arguments)}e.serviceRequest=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
