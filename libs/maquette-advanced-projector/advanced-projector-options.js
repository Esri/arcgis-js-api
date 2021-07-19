/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t={handleInterceptedEvent:(e,t,n,r)=>(e.scheduleRender(),t.properties[`on${r.type}`].apply(t.properties.bind||n,[r]))};e.defaultAdvancedProjectorOptions=t,Object.defineProperty(e,"__esModule",{value:!0})}));
