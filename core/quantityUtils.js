/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./unitUtils"],(function(t,e){"use strict";function n(t,n){return{type:e.unitType(n),value:t,unit:n}}function i(t,n){return{type:e.unitType(n),value:t,unit:n}}function u(t,n){return{type:e.unitType(n),value:t,unit:n}}function r(t){return e.isBaseUnit(t.unit)}function o(t,i){return n(e.convertUnit(t.value,t.unit,i),i)}function a(t){return o(t,e.baseUnitForUnit(t.unit))}t.createArea=u,t.createLength=i,t.createQuantity=n,t.isBaseUnit=r,t.toBaseUnit=a,t.toUnit=o,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
