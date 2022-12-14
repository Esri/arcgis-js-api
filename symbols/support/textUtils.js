/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","../../core/accessorSupport/ensureType"],(function(e,t,n){"use strict";const l=["none","underline","line-through"],o=["normal","italic","oblique"],r=["normal","lighter","bold","bolder"],i={type:Number,cast:e=>{const l=n.ensureNumber(e);return 0===l?1:t.clamp(l,.1,4)},nonNullable:!0},a=["left","right","center"],s=["baseline","top","middle","bottom"],u={type:a,nonNullable:!0},c={type:s,nonNullable:!0};e.fontDecorations=l,e.fontStyles=o,e.fontWeights=r,e.horizontalAlignmentProperty=u,e.horizontalAlignments=a,e.lineHeightProperty=i,e.verticalAlignmentProperty=c,e.verticalAlignments=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
