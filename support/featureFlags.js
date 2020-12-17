/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../core/has"],(function(e,t){"use strict";function n(e){return!!t(`enable-feature:${e}`)}e.disableContextNavigation=()=>n("disable-context-navigation"),e.enableWebStyleForceWOSR=()=>n("force-wosr"),e.hasEnableFeature=n,Object.defineProperty(e,"__esModule",{value:!0})}));
