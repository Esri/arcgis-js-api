/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../css","../../../../widgets/support/widgetUtils","../../../../widgets/support/jsxFactory"],(function(s,e,t,l){"use strict";function i({className:s,helpMessage:i},...n){const o=n.filter((s=>!!s));return l.tsx("div",{class:t.classes(s,e.CONTENT)},o.length>0?l.tsx("div",{class:e.TABLE},...o):null,i?l.tsx("div",{key:"help-message",class:e.HELP_MESSAGE},i):null)}s.TooltipContentWithHelpMessage=i,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})}));
