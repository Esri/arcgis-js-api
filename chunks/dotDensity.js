/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../Color","../smartMapping/symbology/support/symbologyUtils","../smartMapping/renderers/support/utils","../smartMapping/symbology/support/colors"],(function(e,o,t,n,a){"use strict";const r={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"}},i=["vibrant-rainbow","cat-dark","predominant-v2","predominant-v1","predominance-race","desert-blooms","tropical-bliss","under-the-sea","ocean-bay","cat-light","predominant-v4","predominance-money","predominant-v3","predominance-race-ethnic","pastel-chalk","predominance-rainbow","predominance-sequence"],c={default:{name:"default",label:"Default",description:"Default theme for visualizing features using the density of randomly placed dots.",schemes:{default:{light:{primary:"predominant-v5",secondary:i,common:{outline:r.light,fillOpacity:.8}},dark:{primary:"predominant-v5",secondary:i,common:{outline:r.dark,fillOpacity:.8}}}}}},s=t.createThemes({themeDictionary:c});function m(e){return t.getThemesforBasemap(s,e)}function l(e){const o="default",n=t.getRawSchemes({basemap:e.basemap,basemapTheme:e.basemapTheme,theme:s.get(o)});if(!n)return;const{schemesInfo:a,basemapId:r,basemapTheme:i}=n,c=a.common,m=e.numColors;return{primaryScheme:h(a.primary,c,m),secondarySchemes:a.secondary.map((e=>h(e,c,m))).filter(Boolean),basemapId:r,basemapTheme:i}}function p(e){return t.filterSchemesByName(e.name,l(e))}function u(e){return t.filterSchemesByTag(e.includedTags,e.excludedTags,l(e))}function d(e){if(!e)return;const t={...e};return t.colors&&(t.colors=t.colors.map((e=>new o(e)))),t.outline&&(t.outline={color:t.outline.color&&new o(t.outline.color),width:t.outline.width}),t}function h(e,o,t){const r=a[e];if(!r)return;return y({name:r.name,tags:r.tags,colors:r[t]||n.createColors(r.stops,t),opacity:o.fillOpacity,outline:o.outline})}function y(e){return{name:e.name,tags:[...e.tags],colors:e.colors.map((e=>new o(e))),outline:{color:new o(e.outline.color),width:e.outline.width},opacity:e.opacity}}var g=Object.freeze({__proto__:null,getThemes:m,getSchemes:l,getSchemeByName:p,getSchemesByTag:u,cloneScheme:d});e.cloneScheme=d,e.dotDensitySymbology=g,e.getSchemeByName=p,e.getSchemes=l,e.getSchemesByTag=u,e.getThemes=m}));
