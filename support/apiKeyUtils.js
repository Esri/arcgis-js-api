/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../core/urlUtils"],(function(e,s){"use strict";const t=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function i(e){return e&&e.length>4&&e.startsWith("AAPK")}function c(e){const i=s.getOrigin(e,!0);return i&&i.endsWith(".arcgis.com")&&!t.includes(i)&&!e.endsWith("/sharing/rest/generateToken")}e.isApiKey=i,e.supportsApiKey=c,Object.defineProperty(e,"__esModule",{value:!0})}));
