/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../core/urlUtils"],(function(e,t){"use strict";const i=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function s(e){return!!e&&e.length>4&&e.startsWith("AAPK")}function r(e){const s=t.getOrigin(e,!0);return!!s&&(s.endsWith(".arcgis.com")&&!i.includes(s)&&!e.endsWith("/sharing/rest/generateToken"))}e.isApiKey=s,e.supportsApiKey=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
