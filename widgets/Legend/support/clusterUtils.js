/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../renderers/visualVariables/SizeVariable"],(function(e,l){"use strict";e.getClusterSizeVariable=function(e,i){if(!e||!("visualVariables"in e)||!e.visualVariables)return null;const a=e.visualVariables.find((e=>"size"===e.type)),s=((e,l)=>{const i=e.featuresTilingScheme.getClosestInfoForScale(e.scale).level;return l.levels?l.levels[i]:null})(i,a);return s?new l({field:a.field,minSize:s[2].size,minDataValue:s[2].value,maxSize:s[3].size,maxDataValue:s[3].value}):null},Object.defineProperty(e,"__esModule",{value:!0})}));
