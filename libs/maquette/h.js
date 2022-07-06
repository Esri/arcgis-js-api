/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let e=e=>({vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}),r=(t,o,n)=>{for(let l=0,i=o.length;l<i;l++){let i=o[l];Array.isArray(i)?r(t,i,n):null!=i&&!1!==i&&("string"==typeof i&&(i=e(i)),n.push(i))}};function t(e,t,o){if(Array.isArray(t))o=t,t=void 0;else if(t&&("string"==typeof t||t.hasOwnProperty("vnodeSelector"))||o&&("string"==typeof o||o.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let n,l;return o&&1===o.length&&"string"==typeof o[0]?n=o[0]:o&&(l=[],r(e,o,l),0===l.length&&(l=void 0)),{vnodeSelector:e,properties:t,children:l,text:""===n?void 0:n,domNode:null}}export{t as h};
