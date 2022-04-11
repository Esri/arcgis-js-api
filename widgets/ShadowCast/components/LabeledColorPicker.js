/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./Label","../../support/ColorPicker","../../support/widgetUtils","../../../core/has","../../../core/Logger","../../support/jsxFactory"],(function(e,o,r,t,l,a,i){"use strict";function n(e){return i.tsx(o.Label,{for:e.id,label:e.label,tabIndex:-1},i.tsx(r.ColorPicker,{id:e.id,value:e.value,onChange:e.onChange}))}e.LabeledColorPicker=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
