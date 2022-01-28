/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./config","./request","./core/Error","./core/Logger","./core/urlUtils"],(function(e,s,t,o,r,n){"use strict";const i=r.getLogger("esri.assets");function a(e,s){return t(c(e),s)}function c(e){if(!s.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new o("assets:path-not-set","config.assetsPath is not set");return n.join(s.assetsPath,e)}e.fetchAsset=a,e.getAssetUrl=c,Object.defineProperty(e,"__esModule",{value:!0})}));
