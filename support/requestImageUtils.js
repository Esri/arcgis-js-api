/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../request.js";async function t(t,r){const{data:a}=await e(t,{responseType:"image",...r});return a}export{t as requestImage};
