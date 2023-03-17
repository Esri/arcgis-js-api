/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t,e,a=!1){let{hasM:s,hasZ:h}=t;Array.isArray(e)?4!==e.length||s||h?3===e.length&&a&&!s?(h=!0,s=!1):3===e.length&&s&&h&&(s=!1,h=!1):(s=!0,h=!0):(h=!h&&e.hasZ&&(!s||e.hasM),s=!s&&e.hasM&&(!h||e.hasZ)),t.hasZ=h,t.hasM=s}t.updateSupportFromPoint=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
