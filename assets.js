/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./config","./request","./core/Error","./core/Logger","./core/urlUtils"],(function(e,t,s,o,r,n){"use strict";const i=r.getLogger("esri.assets");function a(e,t){return s(c(e),t)}function c(e){if(!t.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new o("assets:path-not-set","config.assetsPath is not set");return n.join(t.assetsPath,e)}e.fetchAsset=a,e.getAssetUrl=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
