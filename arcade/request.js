/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../request.js";async function o(o,n,t,r,s=null){if(null!==s){if(o=o+="?token="+await s.getToken(),"get"===r.toLowerCase())return e(o,{responseType:"json",query:n});if(n)for(const e in n)o.includes("?")?o+="&":o+="?",o+=encodeURIComponent(e)+"="+encodeURIComponent(n[e]);return e(o,{method:"post",query:t,responseType:"json"})}if("get"===r.toLowerCase())return e(o,{responseType:"json",query:n});if(n)for(const e in n)o.includes("?")?o+="&":o+="?",o+=encodeURIComponent(e)+"="+encodeURIComponent(n[e]);return await e(o,{method:"post",responseType:"json",query:t})}export{o as serviceRequest};
