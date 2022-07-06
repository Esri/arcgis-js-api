/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../request.js";async function n(n){const{data:o}=await e(n,{responseType:"json",query:{f:"json"}});return o}export{n as requestArcGISServiceJSON};
