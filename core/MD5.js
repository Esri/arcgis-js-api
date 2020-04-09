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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.outputTypes={Base64:0,Hex:1,String:2,Raw:3};function e(r,t){var e=(65535&r)+(65535&t);return(r>>16)+(t>>16)+(e>>16)<<16|65535&e}function n(r,t,n,u,o,a){return e((c=e(e(t,r),e(u,a)))<<(i=o)|c>>>32-i,n);var c,i}function u(r,t,e,u,o,a,c){return n(t&e|~t&u,r,t,o,a,c)}function o(r,t,e,u,o,a,c){return n(t&u|e&~u,r,t,o,a,c)}function a(r,t,e,u,o,a,c){return n(t^e^u,r,t,o,a,c)}function c(r,t,e,u,o,a,c){return n(e^(t|~u),r,t,o,a,c)}t.createMD5Hash=function(r,n){void 0===n&&(n=t.outputTypes.Hex);var i=n||t.outputTypes.Base64,f=function(r,t){r[t>>5]|=128<<t%32,r[14+(t+64>>>9<<4)]=t;for(var n=1732584193,i=-271733879,f=-1732584194,s=271733878,p=0;p<r.length;p+=16){var h=n,v=i,g=f,l=s;n=u(n,i,f,s,r[p+0],7,-680876936),s=u(s,n,i,f,r[p+1],12,-389564586),f=u(f,s,n,i,r[p+2],17,606105819),i=u(i,f,s,n,r[p+3],22,-1044525330),n=u(n,i,f,s,r[p+4],7,-176418897),s=u(s,n,i,f,r[p+5],12,1200080426),f=u(f,s,n,i,r[p+6],17,-1473231341),i=u(i,f,s,n,r[p+7],22,-45705983),n=u(n,i,f,s,r[p+8],7,1770035416),s=u(s,n,i,f,r[p+9],12,-1958414417),f=u(f,s,n,i,r[p+10],17,-42063),i=u(i,f,s,n,r[p+11],22,-1990404162),n=u(n,i,f,s,r[p+12],7,1804603682),s=u(s,n,i,f,r[p+13],12,-40341101),f=u(f,s,n,i,r[p+14],17,-1502002290),n=o(n,i=u(i,f,s,n,r[p+15],22,1236535329),f,s,r[p+1],5,-165796510),s=o(s,n,i,f,r[p+6],9,-1069501632),f=o(f,s,n,i,r[p+11],14,643717713),i=o(i,f,s,n,r[p+0],20,-373897302),n=o(n,i,f,s,r[p+5],5,-701558691),s=o(s,n,i,f,r[p+10],9,38016083),f=o(f,s,n,i,r[p+15],14,-660478335),i=o(i,f,s,n,r[p+4],20,-405537848),n=o(n,i,f,s,r[p+9],5,568446438),s=o(s,n,i,f,r[p+14],9,-1019803690),f=o(f,s,n,i,r[p+3],14,-187363961),i=o(i,f,s,n,r[p+8],20,1163531501),n=o(n,i,f,s,r[p+13],5,-1444681467),s=o(s,n,i,f,r[p+2],9,-51403784),f=o(f,s,n,i,r[p+7],14,1735328473),n=a(n,i=o(i,f,s,n,r[p+12],20,-1926607734),f,s,r[p+5],4,-378558),s=a(s,n,i,f,r[p+8],11,-2022574463),f=a(f,s,n,i,r[p+11],16,1839030562),i=a(i,f,s,n,r[p+14],23,-35309556),n=a(n,i,f,s,r[p+1],4,-1530992060),s=a(s,n,i,f,r[p+4],11,1272893353),f=a(f,s,n,i,r[p+7],16,-155497632),i=a(i,f,s,n,r[p+10],23,-1094730640),n=a(n,i,f,s,r[p+13],4,681279174),s=a(s,n,i,f,r[p+0],11,-358537222),f=a(f,s,n,i,r[p+3],16,-722521979),i=a(i,f,s,n,r[p+6],23,76029189),n=a(n,i,f,s,r[p+9],4,-640364487),s=a(s,n,i,f,r[p+12],11,-421815835),f=a(f,s,n,i,r[p+15],16,530742520),n=c(n,i=a(i,f,s,n,r[p+2],23,-995338651),f,s,r[p+0],6,-198630844),s=c(s,n,i,f,r[p+7],10,1126891415),f=c(f,s,n,i,r[p+14],15,-1416354905),i=c(i,f,s,n,r[p+5],21,-57434055),n=c(n,i,f,s,r[p+12],6,1700485571),s=c(s,n,i,f,r[p+3],10,-1894986606),f=c(f,s,n,i,r[p+10],15,-1051523),i=c(i,f,s,n,r[p+1],21,-2054922799),n=c(n,i,f,s,r[p+8],6,1873313359),s=c(s,n,i,f,r[p+15],10,-30611744),f=c(f,s,n,i,r[p+6],15,-1560198380),i=c(i,f,s,n,r[p+13],21,1309151649),n=c(n,i,f,s,r[p+4],6,-145523070),s=c(s,n,i,f,r[p+11],10,-1120210379),f=c(f,s,n,i,r[p+2],15,718787259),i=c(i,f,s,n,r[p+9],21,-343485551),n=e(n,h),i=e(i,v),f=e(f,g),s=e(s,l)}return[n,i,f,s]}(function(r){for(var t=[],e=0,n=8*r.length;e<n;e+=8)t[e>>5]|=(255&r.charCodeAt(e/8))<<e%32;return t}(r),8*r.length);switch(i){case t.outputTypes.Raw:return f;case t.outputTypes.Hex:return function(r){for(var t="0123456789abcdef",e=[],n=0,u=4*r.length;n<u;n++)e.push(t.charAt(r[n>>2]>>n%4*8+4&15)+t.charAt(r[n>>2]>>n%4*8&15));return e.join("")}(f);case t.outputTypes.String:return function(r){for(var t=[],e=0,n=32*r.length;e<n;e+=8)t.push(String.fromCharCode(r[e>>5]>>>e%32&255));return t.join("")}(f);case t.outputTypes.Base64:return function(r){for(var t=[],e=0,n=4*r.length;e<n;e+=3)for(var u=(r[e>>2]>>e%4*8&255)<<16|(r[e+1>>2]>>(e+1)%4*8&255)<<8|r[e+2>>2]>>(e+2)%4*8&255,o=0;o<4;o++)8*e+6*o>32*r.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(u>>6*(3-o)&63));return t.join("")}(f)}}}));