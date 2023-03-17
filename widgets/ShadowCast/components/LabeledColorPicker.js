/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./Label","../../support/ColorPicker","../../support/widgetUtils","../../support/jsxFactory"],(function(e,o,t,r,l){"use strict";function i(e){return l.tsx(o.Label,{for:e.id,label:e.label,tabIndex:-1},l.tsx(t.ColorPicker,{id:e.id,value:e.value,onChange:e.onChange}))}e.LabeledColorPicker=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
