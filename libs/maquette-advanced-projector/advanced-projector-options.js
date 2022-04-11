/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t={handleInterceptedEvent:(e,t,n,o)=>(e.scheduleRender(),t.properties[`on${o.type}`].apply(t.properties.bind||n,[o]))};e.defaultAdvancedProjectorOptions=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
