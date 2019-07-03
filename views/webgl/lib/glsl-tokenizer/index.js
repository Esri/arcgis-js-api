// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["./lib/literals","./lib/operators","./lib/builtins"],function(e,n,t){"use strict;";function r(){function r(e){e.length&&L.push({type:j[J],data:e,position:P,line:M,column:N})}function w(e){H=0,S+=e,G=S.length;for(var n;C=S[H],H<G;){switch(n=H,J){case s:H=_();break;case o:H=O();break;case c:H=E();break;case f:H=y();break;case a:H=q();break;case k:H=F();break;case l:H=z();break;case u:H=B();break;case b:H=x();break;case i:H=m()}if(n!==H)switch(S[n]){case"\n":N=0,++M;break;default:++N}}return I+=H,S=S.slice(H),L}function v(e){return K.length&&r(K.join("")),J=d,r("(eof)"),L}function m(){return K=K.length?[]:K,"/"===D&&"*"===C?(P=I+H-1,J=s,D=C,H+1):"/"===D&&"/"===C?(P=I+H-1,J=o,D=C,H+1):"#"===C?(J=c,P=I+H,H):/\s/.test(C)?(J=b,P=I+H,H):(Q=/\d/.test(C),R=/[^\w_]/.test(C),P=I+H,J=Q?a:R?f:u,H)}function x(){return/[^\s]/g.test(C)?(r(K.join("")),J=i,H):(K.push(C),D=C,H+1)}function E(){return"\r"!==C&&"\n"!==C||"\\"===D?(K.push(C),D=C,H+1):(r(K.join("")),J=i,H)}function O(){return E()}function _(){return"/"===C&&"*"===D?(K.push(C),r(K.join("")),J=i,H+1):(K.push(C),D=C,H+1)}function y(){if("."===D&&/\d/.test(C))return J=l,H;if("/"===D&&"*"===C)return J=s,H;if("/"===D&&"/"===C)return J=o,H;if("."===C&&K.length){for(;A(K););return J=l,H}if(";"===C||")"===C||"("===C){if(K.length)for(;A(K););return r(C),J=i,H+1}var e=2===K.length&&"="!==C;if(/[\w_\d\s]/.test(C)||e){for(;A(K););return J=i,H}return K.push(C),D=C,H+1}function A(e){for(var t,i,u=0;;){if(t=n.indexOf(e.slice(0,e.length+u).join("")),i=n[t],-1===t){if(u--+e.length>0)continue;i=e.slice(0,1).join("")}return r(i),P+=i.length,K=K.slice(i.length),K.length}}function F(){return/[^a-fA-F0-9]/.test(C)?(r(K.join("")),J=i,H):(K.push(C),D=C,H+1)}function q(){return"."===C?(K.push(C),J=l,D=C,H+1):/[eE]/.test(C)?(K.push(C),J=l,D=C,H+1):"x"===C&&1===K.length&&"0"===K[0]?(J=k,K.push(C),D=C,H+1):/[^\d]/.test(C)?(r(K.join("")),J=i,H):(K.push(C),D=C,H+1)}function z(){return"f"===C&&(K.push(C),D=C,H+=1),/[eE]/.test(C)?(K.push(C),D=C,H+1):"-"===C&&/[eE]/.test(D)?(K.push(C),D=C,H+1):/[^\d]/.test(C)?(r(K.join("")),J=i,H):(K.push(C),D=C,H+1)}function B(){if(/[^\d\w_]/.test(C)){var n=K.join("");return J=e.indexOf(n)>-1?g:t.indexOf(n)>-1?p:h,r(K.join("")),J=i,H}return K.push(C),D=C,H+1}var C,D,G,H=0,I=0,J=i,K=[],L=[],M=1,N=0,P=0,Q=!1,R=!1,S="";return function(e){return L=[],null!==e?w(e.replace?e.replace(/\r\n/g,"\n"):e):v()}}var i=999,u=9999,s=0,o=1,c=2,f=3,a=4,l=5,h=6,p=7,g=8,b=9,d=10,k=11,j=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];return r});