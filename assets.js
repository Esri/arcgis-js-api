/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import s from"./config.js";import t from"./request.js";import o from"./core/Error.js";import r from"./core/Logger.js";import{join as e}from"./core/urlUtils.js";const i=r.getLogger("esri.assets");function n(s,o){return t(a(s),o)}function a(t){if(!s.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new o("assets:path-not-set","config.assetsPath is not set");return e(s.assetsPath,t)}export{n as fetchAsset,a as getAssetUrl};
