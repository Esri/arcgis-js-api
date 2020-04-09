// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["./lib/literals","./lib/operators","./lib/builtins"],(function(e,n,t){var r=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];return function(){var i,u,s,o=0,c=0,f=999,a=[],l=[],h=1,p=0,g=0,b=!1,d=!1,j="";return function(e){return l=[],null!==e?function(e){var n;o=0,s=(j+=e).length;for(;i=j[o],o<s;){switch(n=o,f){case 0:o=x();break;case 1:case 2:o=m();break;case 3:o=E();break;case 4:o=y();break;case 11:o=_();break;case 5:o=A();break;case 9999:o=F();break;case 9:o=v();break;case 999:o=w()}if(n!==o)switch(j[n]){case"\n":p=0,++h;break;default:++p}}return c+=o,j=j.slice(o),l}(e.replace?e.replace(/\r\n/g,"\n"):e):function(e){a.length&&k(a.join(""));return f=10,k("(eof)"),l}()};function k(e){e.length&&l.push({type:r[f],data:e,position:g,line:h,column:p})}function w(){return a=a.length?[]:a,"/"===u&&"*"===i?(g=c+o-1,f=0,u=i,o+1):"/"===u&&"/"===i?(g=c+o-1,f=1,u=i,o+1):"#"===i?(f=2,g=c+o,o):/\s/.test(i)?(f=9,g=c+o,o):(b=/\d/.test(i),d=/[^\w_]/.test(i),g=c+o,f=b?4:d?3:9999,o)}function v(){return/[^\s]/g.test(i)?(k(a.join("")),f=999,o):(a.push(i),u=i,o+1)}function m(){return"\r"!==i&&"\n"!==i||"\\"===u?(a.push(i),u=i,o+1):(k(a.join("")),f=999,o)}function x(){return"/"===i&&"*"===u?(a.push(i),k(a.join("")),f=999,o+1):(a.push(i),u=i,o+1)}function E(){if("."===u&&/\d/.test(i))return f=5,o;if("/"===u&&"*"===i)return f=0,o;if("/"===u&&"/"===i)return f=1,o;if("."===i&&a.length){for(;O(a););return f=5,o}if(";"===i||")"===i||"("===i){if(a.length)for(;O(a););return k(i),f=999,o+1}var e=2===a.length&&"="!==i;if(/[\w_\d\s]/.test(i)||e){for(;O(a););return f=999,o}return a.push(i),u=i,o+1}function O(e){for(var t,r,i=0;;){if(t=n.indexOf(e.slice(0,e.length+i).join("")),r=n[t],-1===t){if(i--+e.length>0)continue;r=e.slice(0,1).join("")}return k(r),g+=r.length,(a=a.slice(r.length)).length}}function _(){return/[^a-fA-F0-9]/.test(i)?(k(a.join("")),f=999,o):(a.push(i),u=i,o+1)}function y(){return"."===i?(a.push(i),f=5,u=i,o+1):/[eE]/.test(i)?(a.push(i),f=5,u=i,o+1):"x"===i&&1===a.length&&"0"===a[0]?(f=11,a.push(i),u=i,o+1):/[^\d]/.test(i)?(k(a.join("")),f=999,o):(a.push(i),u=i,o+1)}function A(){return"f"===i&&(a.push(i),u=i,o+=1),/[eE]/.test(i)?(a.push(i),u=i,o+1):"-"===i&&/[eE]/.test(u)?(a.push(i),u=i,o+1):/[^\d]/.test(i)?(k(a.join("")),f=999,o):(a.push(i),u=i,o+1)}function F(){if(/[^\d\w_]/.test(i)){var n=a.join("");return f=e.indexOf(n)>-1?8:t.indexOf(n)>-1?7:6,k(a.join("")),f=999,o}return a.push(i),u=i,o+1}}}));