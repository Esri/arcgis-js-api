/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../maybe"],(function(e,r){"use strict";function t(e){switch(e){case"defaults":return 0;case"service":return 2;case"portal-item":return 3;case"web-scene":return 4;case"web-map":return 5;case"user":return 6}}function n(e){switch(e){case 0:return"defaults";case 2:return"service";case 3:return"portal-item";case 4:return"web-scene";case 5:return"web-map";case 6:return"user"}return r.assumeNonNull(void 0)}e.OriginIdNum=7,e.idToName=n,e.idToReadableName=function(e){return n(e)},e.idToWritableName=function(e){return n(e)},e.nameToId=t,e.readableNameToId=function(e){return t(e)},e.writableNameToId=function(e){return t(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
