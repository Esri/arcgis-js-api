/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n){return n.split(",").map((n=>n.trim()))}function t(n,t){return n.map((n=>r(n,t)))}function r(n,t){return 0===n.indexOf(t)?n:`${t}.${n}`}export{t as normalizePropNames,n as splitProps};
