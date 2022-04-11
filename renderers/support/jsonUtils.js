/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/Warning","../../core/accessorSupport/extensions/serializableProperty/reader","./types"],(function(e,r,n,t){"use strict";function s(e,r){return o(e,null,r)}const u=n.createTypeReader({types:t.rendererTypes});function o(e,n,t){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(t&&t.messages&&t.messages.push(new r("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:t})),null):u(e,n,t):null}e.fromJSON=s,e.read=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
