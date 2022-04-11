/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */const a=(t,a,e)=>Math.max(a,Math.min(t,e)),e=t=>{const a=(""+t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return a?Math.max(0,(a[1]?a[1].length:0)-(a[2]?+a[2]:0)):0};t.clamp=a,t.decimalPlaces=e}));
