/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.updateSupportFromPoint=function(e,t,s=!1){let{hasM:a,hasZ:h}=e;Array.isArray(t)?4!==t.length||a||h?3===t.length&&s&&!a?(h=!0,a=!1):3===t.length&&a&&h&&(a=!1,h=!1):(a=!0,h=!0):(h=!h&&t.hasZ&&(!a||t.hasM),a=!a&&t.hasM&&(!h||t.hasZ)),e.hasZ=h,e.hasM=a},Object.defineProperty(e,"__esModule",{value:!0})}));
