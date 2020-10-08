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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createMD5Hash=r.outputTypes=void 0,r.outputTypes={Base64:0,Hex:1,String:2,Raw:3};function e(t,r){var e=(65535&t)+(65535&r);return(t>>16)+(r>>16)+(e>>16)<<16|65535&e}function n(t,r,n,u,o,a){return e((c=e(e(r,t),e(u,a)))<<(i=o)|c>>>32-i,n);var c,i}function u(t,r,e,u,o,a,c){return n(r&e|~r&u,t,r,o,a,c)}function o(t,r,e,u,o,a,c){return n(r&u|e&~u,t,r,o,a,c)}function a(t,r,e,u,o,a,c){return n(r^e^u,t,r,o,a,c)}function c(t,r,e,u,o,a,c){return n(e^(r|~u),t,r,o,a,c)}r.createMD5Hash=function(t,n){void 0===n&&(n=r.outputTypes.Hex);var i=n||r.outputTypes.Base64,s=function(t,r){t[r>>5]|=128<<r%32,t[14+(r+64>>>9<<4)]=r;for(var n=1732584193,i=-271733879,s=-1732584194,f=271733878,p=0;p<t.length;p+=16){var h=n,v=i,g=s,l=f;n=u(n,i,s,f,t[p+0],7,-680876936),f=u(f,n,i,s,t[p+1],12,-389564586),s=u(s,f,n,i,t[p+2],17,606105819),i=u(i,s,f,n,t[p+3],22,-1044525330),n=u(n,i,s,f,t[p+4],7,-176418897),f=u(f,n,i,s,t[p+5],12,1200080426),s=u(s,f,n,i,t[p+6],17,-1473231341),i=u(i,s,f,n,t[p+7],22,-45705983),n=u(n,i,s,f,t[p+8],7,1770035416),f=u(f,n,i,s,t[p+9],12,-1958414417),s=u(s,f,n,i,t[p+10],17,-42063),i=u(i,s,f,n,t[p+11],22,-1990404162),n=u(n,i,s,f,t[p+12],7,1804603682),f=u(f,n,i,s,t[p+13],12,-40341101),s=u(s,f,n,i,t[p+14],17,-1502002290),n=o(n,i=u(i,s,f,n,t[p+15],22,1236535329),s,f,t[p+1],5,-165796510),f=o(f,n,i,s,t[p+6],9,-1069501632),s=o(s,f,n,i,t[p+11],14,643717713),i=o(i,s,f,n,t[p+0],20,-373897302),n=o(n,i,s,f,t[p+5],5,-701558691),f=o(f,n,i,s,t[p+10],9,38016083),s=o(s,f,n,i,t[p+15],14,-660478335),i=o(i,s,f,n,t[p+4],20,-405537848),n=o(n,i,s,f,t[p+9],5,568446438),f=o(f,n,i,s,t[p+14],9,-1019803690),s=o(s,f,n,i,t[p+3],14,-187363961),i=o(i,s,f,n,t[p+8],20,1163531501),n=o(n,i,s,f,t[p+13],5,-1444681467),f=o(f,n,i,s,t[p+2],9,-51403784),s=o(s,f,n,i,t[p+7],14,1735328473),n=a(n,i=o(i,s,f,n,t[p+12],20,-1926607734),s,f,t[p+5],4,-378558),f=a(f,n,i,s,t[p+8],11,-2022574463),s=a(s,f,n,i,t[p+11],16,1839030562),i=a(i,s,f,n,t[p+14],23,-35309556),n=a(n,i,s,f,t[p+1],4,-1530992060),f=a(f,n,i,s,t[p+4],11,1272893353),s=a(s,f,n,i,t[p+7],16,-155497632),i=a(i,s,f,n,t[p+10],23,-1094730640),n=a(n,i,s,f,t[p+13],4,681279174),f=a(f,n,i,s,t[p+0],11,-358537222),s=a(s,f,n,i,t[p+3],16,-722521979),i=a(i,s,f,n,t[p+6],23,76029189),n=a(n,i,s,f,t[p+9],4,-640364487),f=a(f,n,i,s,t[p+12],11,-421815835),s=a(s,f,n,i,t[p+15],16,530742520),n=c(n,i=a(i,s,f,n,t[p+2],23,-995338651),s,f,t[p+0],6,-198630844),f=c(f,n,i,s,t[p+7],10,1126891415),s=c(s,f,n,i,t[p+14],15,-1416354905),i=c(i,s,f,n,t[p+5],21,-57434055),n=c(n,i,s,f,t[p+12],6,1700485571),f=c(f,n,i,s,t[p+3],10,-1894986606),s=c(s,f,n,i,t[p+10],15,-1051523),i=c(i,s,f,n,t[p+1],21,-2054922799),n=c(n,i,s,f,t[p+8],6,1873313359),f=c(f,n,i,s,t[p+15],10,-30611744),s=c(s,f,n,i,t[p+6],15,-1560198380),i=c(i,s,f,n,t[p+13],21,1309151649),n=c(n,i,s,f,t[p+4],6,-145523070),f=c(f,n,i,s,t[p+11],10,-1120210379),s=c(s,f,n,i,t[p+2],15,718787259),i=c(i,s,f,n,t[p+9],21,-343485551),n=e(n,h),i=e(i,v),s=e(s,g),f=e(f,l)}return[n,i,s,f]}(function(t){for(var r=[],e=0,n=8*t.length;e<n;e+=8)r[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return r}(t),8*t.length);switch(i){case r.outputTypes.Raw:return s;case r.outputTypes.Hex:return function(t){for(var r="0123456789abcdef",e=[],n=0,u=4*t.length;n<u;n++)e.push(r.charAt(t[n>>2]>>n%4*8+4&15)+r.charAt(t[n>>2]>>n%4*8&15));return e.join("")}(s);case r.outputTypes.String:return function(t){for(var r=[],e=0,n=32*t.length;e<n;e+=8)r.push(String.fromCharCode(t[e>>5]>>>e%32&255));return r.join("")}(s);case r.outputTypes.Base64:return function(t){for(var r=[],e=0,n=4*t.length;e<n;e+=3)for(var u=(t[e>>2]>>e%4*8&255)<<16|(t[e+1>>2]>>(e+1)%4*8&255)<<8|t[e+2>>2]>>(e+2)%4*8&255,o=0;o<4;o++)8*e+6*o>32*t.length?r.push("="):r.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(u>>6*(3-o)&63));return r.join("")}(s)}}}));