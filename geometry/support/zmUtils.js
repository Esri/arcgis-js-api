/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function h(h,a,s=!1){let{hasM:t,hasZ:e}=h;Array.isArray(a)?4!==a.length||t||e?3===a.length&&s&&!t?(e=!0,t=!1):3===a.length&&t&&e&&(t=!1,e=!1):(t=!0,e=!0):(e=!e&&a.hasZ&&(!t||a.hasM),t=!t&&a.hasM&&(!e||a.hasZ)),h.hasZ=e,h.hasM=t}export{h as updateSupportFromPoint};
