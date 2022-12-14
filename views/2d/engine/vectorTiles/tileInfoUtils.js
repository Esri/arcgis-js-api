/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../layers/support/TileInfo.js";const l=1e-6;function s(e,s){if(e===s)return!0;if(!e&&null!=s)return!1;if(null!=e&&!s)return!1;if(!e.spatialReference.equals(s.spatialReference)||e.dpi!==s.dpi)return!1;const o=e.origin,r=s.origin;if(Math.abs(o.x-r.x)>=l||Math.abs(o.y-r.y)>=l)return!1;let n,t;e.lods[0].scale>s.lods[0].scale?(n=e,t=s):(t=e,n=s);for(let i=n.lods[0].scale;i>=t.lods[t.lods.length-1].scale-l;i/=2)if(Math.abs(i-t.lods[0].scale)<l)return!0;return!1}function o(l,s){if(l===s)return l;if(!l&&null!=s)return s;if(null!=l&&!s)return l;const o=l.size[0],r=l.format,n=l.dpi,t={x:l.origin.x,y:l.origin.y},i=l.spatialReference.toJSON(),a=l.lods[0].scale>s.lods[0].scale?l.lods[0]:s.lods[0],d=l.lods[l.lods.length-1].scale<=s.lods[s.lods.length-1].scale?l.lods[l.lods.length-1]:s.lods[s.lods.length-1],f=a.scale,u=a.resolution,c=d.scale,p=[];let g=f,h=u,x=0;for(;g>c;)p.push({level:x,resolution:h,scale:g}),x++,g/=2,h/=2;return new e({size:[o,o],dpi:n,format:r||"pbf",origin:t,lods:p,spatialReference:i})}export{s as areSchemasOverlapping,o as unionTileInfos};