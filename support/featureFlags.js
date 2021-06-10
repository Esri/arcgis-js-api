/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../core/has"],(function(e,t){"use strict";function n(e){return!!t(`enable-feature:${e}`)}const a=()=>n("force-wosr"),o=()=>n("disable-context-navigation");e.disableContextNavigation=o,e.enableWebStyleForceWOSR=a,e.hasEnableFeature=n,Object.defineProperty(e,"__esModule",{value:!0})}));
