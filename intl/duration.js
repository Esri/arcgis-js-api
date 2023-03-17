/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../core/timeUtils","./locale","../chunks/datetime"],(function(e,t,n,o){"use strict";function i(e,n="milliseconds",i={}){const r={locale:l(),numberingSystem:"latn"};let s;return s=e?o.Duration.fromMillis(t.convertTime(e,n,"milliseconds"),r).rescale():o.Duration.fromObject({seconds:0},r),s.toHuman({listStyle:"narrow",unitDisplay:"long",...i})}function l(){return"bs"===n.getLanguage()?"hr":n.getLocale()}e.formatDuration=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
