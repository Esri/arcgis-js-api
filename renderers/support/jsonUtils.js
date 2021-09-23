/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/Error","../../core/object","../../core/Warning","../../core/accessorSupport/extensions/serializableProperty/reader","./types"],(function(e,r,n,s,t,u,o){"use strict";function c(e,r,n,t){const u=l(e,t);u&&s.setDeepValue(n,u,r)}function a(e,r){if(!r||"web-scene"!==r.origin)return!0;switch(e.type){case"simple":case"unique-value":case"class-breaks":return!0;default:return!1}}function l(e,r){return e?a(e,r)?e.write({},r):(r.messages&&r.messages.push(new n("renderer:unsupported",`Renderer of type '${e.declaredClass}' are not supported in scenes.`,{renderer:e,context:r})),null):null}function i(e,r){return d(e,null,r)}const p=u.createTypeReader({types:o.rendererTypes});function d(e,r,n){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(n&&n.messages&&n.messages.push(new t("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:n})),null):p(e,r,n):null}e.fromJSON=i,e.read=d,e.write=c,Object.defineProperty(e,"__esModule",{value:!0})}));
