/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clone as s}from"../../../core/lang.js";import{isSome as e}from"../../../core/maybe.js";import{defaultBasemapGroups as t,getBasemapId as a,getBasemapGroup as p}from"../../support/utils.js";function m(s,t,m){let o=null,i=null;if(t&&(o=a(t,s,!1),o)){const s=p(o);e(s)&&(i=s)}return!o&&m&&(o="dark"===m?"dark-gray":"gray",i=m),o||i||(o="gray",i="light"),{basemapId:o,basemapTheme:i}}class o{constructor(s){this.name=null,this.label=null,this.description=null,this.supportedBasemaps=null,this.basemapGroups=null,this.schemes=null;const{name:e,label:a,description:p,schemes:m}=s;this.name=e,this.label=a,this.description=p,this.schemes=m;const o=s.basemapGroups||t;let i=[];if(o)for(const t in o)i=i.concat(o[t]);this.supportedBasemaps=i,this.basemapGroups=o}isBasemapSupported(s){const e=a(s,this.supportedBasemaps);return!(!e||!this.supportedBasemaps.includes(e))}getRawSchemes(t){const{basemapId:a,basemapTheme:o}=m(this.supportedBasemaps,t.basemap,t.basemapTheme);let i=o;if(a){const s=p(a,this.basemapGroups);e(s)&&(i=s)}let r=t.geometryType;"multipoint"===r?r="point":"mesh"===r&&(r="polygon");const n=this.schemes[r]||this.schemes.default;return{schemesInfo:s(n[i]),basemapId:a,basemapTheme:o}}}export{o as default};