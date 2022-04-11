/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t,a=!1){let{hasM:s,hasZ:h}=e;Array.isArray(t)?4!==t.length||s||h?3===t.length&&a&&!s?(h=!0,s=!1):3===t.length&&s&&h&&(s=!1,h=!1):(s=!0,h=!0):(h=!h&&t.hasZ&&(!s||t.hasM),s=!s&&t.hasM&&(!h||t.hasZ)),e.hasZ=h,e.hasM=s}e.updateSupportFromPoint=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
