/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getContextCache as e}from"./contextCache.js";const o={enabled:!1,disposeContextCache:()=>{const o=e();o.forEach((e=>e.dispose())),o.clear()}};export{o as contextCache};
