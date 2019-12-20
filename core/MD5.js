// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

/*	A port of Paul Johnstone's MD5 implementation
     *	http://pajhome.org.uk/crypt/md5/index.html
     *
     *	Copyright (C) Paul Johnston 1999 - 2002.
     *	Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * 	Distributed under the BSD License
     *
     *	Dojo port by Tom Trenka
     *  Later ported to typescript
     */

define(["require","exports"],function(r,t){function n(r,t){var n=(65535&r)+(65535&t);return(r>>16)+(t>>16)+(n>>16)<<16|65535&n}function e(r){for(var t=[],n=0,e=r.length*l;n<e;n+=l)t[n>>5]|=(r.charCodeAt(n/l)&y)<<n%32;return t}function u(r){for(var t=[],n=0,e=32*r.length;n<e;n+=l)t.push(String.fromCharCode(r[n>>5]>>>n%32&y));return t.join("")}function o(r){for(var t="0123456789abcdef",n=[],e=0,u=4*r.length;e<u;e++)n.push(t.charAt(r[e>>2]>>e%4*8+4&15)+t.charAt(r[e>>2]>>e%4*8&15));return n.join("")}function a(r){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=[],e=0,u=4*r.length;e<u;e+=3)for(var o=(r[e>>2]>>e%4*8&255)<<16|(r[e+1>>2]>>(e+1)%4*8&255)<<8|r[e+2>>2]>>(e+2)%4*8&255,a=0;a<4;a++)8*e+6*a>32*r.length?n.push("="):n.push(t.charAt(o>>6*(3-a)&63));return n.join("")}function c(r,t){return r<<t|r>>>32-t}function i(r,t,e,u,o,a){return n(c(n(n(t,r),n(u,a)),o),e)}function f(r,t,n,e,u,o,a){return i(t&n|~t&e,r,t,u,o,a)}function s(r,t,n,e,u,o,a){return i(t&e|n&~e,r,t,u,o,a)}function p(r,t,n,e,u,o,a){return i(t^n^e,r,t,u,o,a)}function h(r,t,n,e,u,o,a){return i(n^(t|~e),r,t,u,o,a)}function v(r,t){r[t>>5]|=128<<t%32,r[14+(t+64>>>9<<4)]=t;for(var e=1732584193,u=-271733879,o=-1732584194,a=271733878,c=0;c<r.length;c+=16){var i=e,v=u,g=o,l=a;e=f(e,u,o,a,r[c+0],7,-680876936),a=f(a,e,u,o,r[c+1],12,-389564586),o=f(o,a,e,u,r[c+2],17,606105819),u=f(u,o,a,e,r[c+3],22,-1044525330),e=f(e,u,o,a,r[c+4],7,-176418897),a=f(a,e,u,o,r[c+5],12,1200080426),o=f(o,a,e,u,r[c+6],17,-1473231341),u=f(u,o,a,e,r[c+7],22,-45705983),e=f(e,u,o,a,r[c+8],7,1770035416),a=f(a,e,u,o,r[c+9],12,-1958414417),o=f(o,a,e,u,r[c+10],17,-42063),u=f(u,o,a,e,r[c+11],22,-1990404162),e=f(e,u,o,a,r[c+12],7,1804603682),a=f(a,e,u,o,r[c+13],12,-40341101),o=f(o,a,e,u,r[c+14],17,-1502002290),u=f(u,o,a,e,r[c+15],22,1236535329),e=s(e,u,o,a,r[c+1],5,-165796510),a=s(a,e,u,o,r[c+6],9,-1069501632),o=s(o,a,e,u,r[c+11],14,643717713),u=s(u,o,a,e,r[c+0],20,-373897302),e=s(e,u,o,a,r[c+5],5,-701558691),a=s(a,e,u,o,r[c+10],9,38016083),o=s(o,a,e,u,r[c+15],14,-660478335),u=s(u,o,a,e,r[c+4],20,-405537848),e=s(e,u,o,a,r[c+9],5,568446438),a=s(a,e,u,o,r[c+14],9,-1019803690),o=s(o,a,e,u,r[c+3],14,-187363961),u=s(u,o,a,e,r[c+8],20,1163531501),e=s(e,u,o,a,r[c+13],5,-1444681467),a=s(a,e,u,o,r[c+2],9,-51403784),o=s(o,a,e,u,r[c+7],14,1735328473),u=s(u,o,a,e,r[c+12],20,-1926607734),e=p(e,u,o,a,r[c+5],4,-378558),a=p(a,e,u,o,r[c+8],11,-2022574463),o=p(o,a,e,u,r[c+11],16,1839030562),u=p(u,o,a,e,r[c+14],23,-35309556),e=p(e,u,o,a,r[c+1],4,-1530992060),a=p(a,e,u,o,r[c+4],11,1272893353),o=p(o,a,e,u,r[c+7],16,-155497632),u=p(u,o,a,e,r[c+10],23,-1094730640),e=p(e,u,o,a,r[c+13],4,681279174),a=p(a,e,u,o,r[c+0],11,-358537222),o=p(o,a,e,u,r[c+3],16,-722521979),u=p(u,o,a,e,r[c+6],23,76029189),e=p(e,u,o,a,r[c+9],4,-640364487),a=p(a,e,u,o,r[c+12],11,-421815835),o=p(o,a,e,u,r[c+15],16,530742520),u=p(u,o,a,e,r[c+2],23,-995338651),e=h(e,u,o,a,r[c+0],6,-198630844),a=h(a,e,u,o,r[c+7],10,1126891415),o=h(o,a,e,u,r[c+14],15,-1416354905),u=h(u,o,a,e,r[c+5],21,-57434055),e=h(e,u,o,a,r[c+12],6,1700485571),a=h(a,e,u,o,r[c+3],10,-1894986606),o=h(o,a,e,u,r[c+10],15,-1051523),u=h(u,o,a,e,r[c+1],21,-2054922799),e=h(e,u,o,a,r[c+8],6,1873313359),a=h(a,e,u,o,r[c+15],10,-30611744),o=h(o,a,e,u,r[c+6],15,-1560198380),u=h(u,o,a,e,r[c+13],21,1309151649),e=h(e,u,o,a,r[c+4],6,-145523070),a=h(a,e,u,o,r[c+11],10,-1120210379),o=h(o,a,e,u,r[c+2],15,718787259),u=h(u,o,a,e,r[c+9],21,-343485551),e=n(e,i),u=n(u,v),o=n(o,g),a=n(a,l)}return[e,u,o,a]}function g(r,n){void 0===n&&(n=t.outputTypes.Hex);var c=n||t.outputTypes.Base64,i=v(e(r),r.length*l);switch(c){case t.outputTypes.Raw:return i;case t.outputTypes.Hex:return o(i);case t.outputTypes.String:return u(i);case t.outputTypes.Base64:return a(i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.outputTypes={Base64:0,Hex:1,String:2,Raw:3};var l=8,y=(1<<l)-1;t.createMD5Hash=g});