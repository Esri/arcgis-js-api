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

define(["require","exports","../languageUtils"],function(r,t,n){function e(r,t){function e(){var r=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(r+16*Math.random())%16|0;return r=Math.floor(r/16),("x"===t?n:3&n|8).toString(16)});return t}r.trim=function(r,e){return t(r,e,function(r,t,e){return n.pcCheck(e,1,1),n.toString(e[0]).trim()})},r.len=function(r,e){return t(r,e,function(r,t,e){return n.pcCheck(e,1,1),n.isArray(e[0])?e[0].length:n.toString(e[0]).length})},r.upper=function(r,e){return t(r,e,function(r,t,e){return n.pcCheck(e,1,1),n.toString(e[0]).toUpperCase()})},r.proper=function(r,e){return t(r,e,function(r,t,e){n.pcCheck(e,1,2);var i=1;2===e.length&&"firstword"===n.toString(e[1]).toLowerCase()&&(i=2);for(var o=/\s/,u=n.toString(e[0]),c="",a=!0,f=0;f<u.length;f++){var s=u[f],g=o.test(s);if(g)1===i&&(a=!0);else{var h=s.toUpperCase()!==s.toLowerCase();h&&(a?(s=s.toUpperCase(),a=!1):s=s.toLowerCase())}c+=s}return c})},r.lower=function(r,e){return t(r,e,function(r,t,e){return n.pcCheck(e,1,1),n.toString(e[0]).toLowerCase()})},r.guid=function(r,i){return t(r,i,function(r,t,i){if(n.pcCheck(i,0,1),i.length>0)switch(n.toString(i[0]).toLowerCase()){case"digits":return e().replace("-","").replace("-","").replace("-","").replace("-","");case"digits-hyphen":return e();case"digits-hyphen-braces":return"{"+e()+"}";case"digits-hyphen-parentheses":return"("+e()+")"}return"{"+e()+"}"})},r.mid=function(r,e){return t(r,e,function(r,t,e){n.pcCheck(e,2,3);var i=n.toNumber(e[1]);if(isNaN(i))return"";if(0>i&&(i=0),2===e.length)return n.toString(e[0]).substr(i);var o=n.toNumber(e[2]);return isNaN(o)?"":(0>o&&(o=0),n.toString(e[0]).substr(i,o))})},r.find=function(r,e){return t(r,e,function(r,t,e){n.pcCheck(e,2,3);var i=0;if(e.length>2){if(i=n.toNumber(n.defaultUndefined(e[2],0)),isNaN(i))return-1;0>i&&(i=0)}var o=n.toString(e[1]).indexOf(n.toString(e[0]),i);return o})},r.left=function(r,e){return t(r,e,function(r,t,e){n.pcCheck(e,2,2);var i=n.toNumber(e[1]);return isNaN(i)?"":(0>i&&(i=0),n.toString(e[0]).substr(0,i))})},r.right=function(r,e){return t(r,e,function(r,t,e){n.pcCheck(e,2,2);var i=n.toNumber(e[1]);return isNaN(i)?"":(0>i&&(i=0),n.toString(e[0]).substr(-1*i,i))})},r.split=function(r,e){return t(r,e,function(r,t,e){n.pcCheck(e,2,4);var i,o=n.toNumber(n.defaultUndefined(e[2],-1));-1===o||null===o?i=n.toString(e[0]).split(n.toString(e[1])):(isNaN(o)&&(o=-1),-1>o&&(o=-1),i=n.toString(e[0]).split(n.toString(e[1]),o));var u=n.defaultUndefined(e[3],!1);if(n.isBoolean(u)===!1)throw new Error("Invalid Parameter");if(u===!1)return i;for(var c=[],a=0;a<i.length;a++)""!==i[a]&&void 0!==i[a]&&c.push(i[a]);return c})},r.text=function(r,e){return t(r,e,function(r,t,e){if(n.pcCheck(e,1,2),n.isArray(e[0])){for(var i=n.defaultUndefined(e[2],""),o=[],u=0;u<e[0].length;u++)o[u]=n.toString(e[0][u],i);return o.join(",")}return n.toString(e[0],e[1])})},r.concatenate=function(r,e){return t(r,e,function(r,t,e){var i=[];if(e.length<1)return"";if(n.isArray(e[0])){for(var o=n.defaultUndefined(e[2],""),u=0;u<e[0].length;u++)i[u]=n.toString(e[0][u],o);return i.join(e.length>1?e[1]:"")}for(var u=0;u<e.length;u++)i[u]=n.toString(e[u]);return i.join("")})},r.reverse=function(r,e){return t(r,e,function(r,t,e){if(n.pcCheck(e,1,1),n.isArray(e[0])){var i=e[0].slice(0);return i.reverse(),i}for(var o=n.toString(e[0]),u="",c=o.length-1;c>=0;c--)u+=o[c];return u})}}t.registerFunctions=e});