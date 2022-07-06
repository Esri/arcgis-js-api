/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clamp as e}from"../../core/mathUtils.js";import{ensureNumber as o}from"../../core/accessorSupport/ensureType.js";const l=["none","underline","line-through"],t=["normal","italic","oblique"],r=["normal","lighter","bold","bolder"],n={type:Number,cast:l=>{const t=o(l);return 0===t?1:e(t,.1,4)},nonNullable:!0},i=["left","right","center"],a=["baseline","top","middle","bottom"],m={type:i,nonNullable:!0},p={type:a,nonNullable:!0};export{l as fontDecorations,t as fontStyles,r as fontWeights,m as horizontalAlignmentProperty,i as horizontalAlignments,n as lineHeightProperty,p as verticalAlignmentProperty,a as verticalAlignments};
