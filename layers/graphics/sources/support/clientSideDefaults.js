/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has","../../../../core/lang","../../../../symbols/support/defaultsJSON"],(function(e,t,n,r){"use strict";e.createDefaultAttributesFunction=function(e,n){if(t("csp-restrictions"))return()=>({[n]:null,...e});try{let t=`this.${n} = null;`;for(const n in e){t+=`this${n.indexOf(".")?`["${n}"]`:`.${n}`} = ${JSON.stringify(e[n])};`}const r=new Function(t);return()=>new r}catch(t){return()=>({[n]:null,...e})}},e.createDefaultTemplate=function(e={}){return[{name:"New Feature",description:"",prototype:{attributes:n.clone(e)}}]},e.createDrawingInfo=function(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?r.defaultPointSymbolJSON:"esriGeometryPolyline"===e?r.defaultPolylineSymbolJSON:r.defaultPolygonSymbolJSON}}},Object.defineProperty(e,"__esModule",{value:!0})}));
