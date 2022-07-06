/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getOrigin as s}from"../core/urlUtils.js";const t=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function c(s){return s&&s.length>4&&s.startsWith("AAPK")}function r(c){const r=s(c,!0);return r&&r.endsWith(".arcgis.com")&&!t.includes(r)&&!c.endsWith("/sharing/rest/generateToken")}export{c as isApiKey,r as supportsApiKey};
