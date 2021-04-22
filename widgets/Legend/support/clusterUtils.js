/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../renderers/visualVariables/SizeVariable"],(function(e,l){"use strict";const i=(e,l)=>{const i=e.featuresTilingScheme.getClosestInfoForScale(e.scale).level;return null!=l&&l.levels?l.levels[i]:null};function a(e,a){if(!e||!("visualVariables"in e)||!e.visualVariables)return null;const s=e.visualVariables.find((e=>"size"===e.type)),n=i(a,s);return n?new l({field:s.field,minSize:n[2].size,minDataValue:n[2].value,maxSize:n[3].size,maxDataValue:n[3].value}):null}e.getClusterSizeVariable=a,Object.defineProperty(e,"__esModule",{value:!0})}));
