/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/label","./Label","../../support/ColorPicker","../../support/widgetUtils","../../../core/has","../../../core/Logger","../../support/jsxFactory"],(function(e,o,r,l,t,a,i,n){"use strict";function s(e){return n.tsx(r.Label,{for:e.id,label:e.label,tabIndex:-1},n.tsx(l.ColorPicker,{id:e.id,value:e.value,onChange:e.onChange}))}e.LabeledColorPicker=s,Object.defineProperty(e,"__esModule",{value:!0})}));
