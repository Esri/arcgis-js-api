/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
export{accessibleHandler}from"./decorators/accessibleHandler.js";export{messageBundle}from"./decorators/messageBundle.js";export{vmEvent}from"./decorators/vmEvent.js";export{tsx,tsxFragment}from"./jsxFactory.js";export{additionalAllowedTags,classes,cssTransition,discardNode,getDir,isActivationKey,isRTL,keepMenuItemWithinView,onResize,renderingSanitizer,safeAttrs,storeNode}from"./widgetUtils.js";export{getCalciteThemeClass,isDarkTheme,setCalciteThemeClass}from"../../support/themeUtils.js";function e(e){return e&&"function"==typeof e.render}function t(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}export{t as hasDomNode,e as isWidget};
