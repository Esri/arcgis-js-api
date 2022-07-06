/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../renderers/visualVariables/SizeVariable.js";const l=(e,l)=>{const a=e.featuresTilingScheme.getClosestInfoForScale(e.scale).level;return l?.levels?l.levels[a]:null};function a(a,i){if(!a||!("visualVariables"in a)||!a.visualVariables)return null;const s=a.visualVariables.find((e=>"size"===e.type)),n=l(i,s);return n?new e({field:s.field,minSize:n[2].size,minDataValue:n[2].value,maxSize:n[3].size,maxDataValue:n[3].value}):null}export{a as getClusterSizeVariable};
