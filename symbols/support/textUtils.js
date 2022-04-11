/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","../../core/accessorSupport/ensureType"],(function(e,t,l){"use strict";const n=["none","underline","line-through"],r=["normal","italic","oblique"],o=["normal","lighter","bold","bolder"],i={type:Number,cast:e=>{const n=l.ensureNumber(e);return 0===n?1:t.clamp(n,.1,4)},nonNullable:!0},u=["left","right","center","justify"],a=["left","right","center"],N=["baseline","top","middle","bottom"],c={type:u,nonNullable:!0},p={type:a,nonNullable:!0},s={type:N,nonNullable:!0};e.FONT_DECORATIONS=n,e.FONT_STYLES=r,e.FONT_WEIGHTS=o,e.HORIZONTAL_ALIGNMENTS=u,e.HORIZONTAL_ALIGNMENTS_3D=a,e.VERTICAL_ALIGNMENTS=N,e.horizontalAlignmentProperty=c,e.horizontalAlignmentProperty3D=p,e.lineHeightProperty=i,e.verticalAlignmentProperty=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
