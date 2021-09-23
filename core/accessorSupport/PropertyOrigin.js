/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../maybe"],(function(e,r){"use strict";const t=7;function n(e){switch(e){case"defaults":return 0;case"service":return 2;case"portal-item":return 3;case"web-scene":return 4;case"web-map":return 5;case"user":return 6}}function u(e){switch(e){case 0:return"defaults";case 2:return"service";case 3:return"portal-item";case 4:return"web-scene";case 5:return"web-map";case 6:return"user"}return r.assumeNonNull(void 0)}function a(e){return n(e)}function s(e){return u(e)}function c(e){return n(e)}function i(e){return u(e)}e.OriginIdNum=t,e.idToName=u,e.idToReadableName=s,e.idToWritableName=i,e.nameToId=n,e.readableNameToId=a,e.writableNameToId=c,Object.defineProperty(e,"__esModule",{value:!0})}));
