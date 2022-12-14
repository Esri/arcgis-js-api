/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./Label","../../support/ColorPicker","../../support/widgetUtils","../../support/jsxFactory"],(function(e,o,t,l,r){"use strict";function i(e){return r.tsx(o.Label,{for:e.id,label:e.label,tabIndex:-1},r.tsx(t.ColorPicker,{id:e.id,value:e.value,onChange:e.onChange}))}e.LabeledColorPicker=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
