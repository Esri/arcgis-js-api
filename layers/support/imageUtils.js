/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(A){"use strict";let o=null;function e(A){if(o)return o;const e={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return o=new Promise((o=>{const l=new Image;l.onload=()=>{l.onload=l.onerror=null,o(l.width>0&&l.height>0)},l.onerror=()=>{l.onload=l.onerror=null,o(!1)},l.src="data:image/webp;base64,"+e[A]})),o}A.checkWebPSupport=e,Object.defineProperties(A,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
