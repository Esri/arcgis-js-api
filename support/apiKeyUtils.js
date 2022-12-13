/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../core/urlUtils"],(function(e,s){"use strict";const t=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function i(e){return!!e&&e.length>4&&e.startsWith("AAPK")}function r(e){const i=s.getOrigin(e,!0);return!!i&&(i.endsWith(".arcgis.com")&&!t.includes(i)&&!e.endsWith("/sharing/rest/generateToken"))}e.isApiKey=i,e.supportsApiKey=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
