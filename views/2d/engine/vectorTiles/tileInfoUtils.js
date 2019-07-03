// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../layers/support/TileInfo"],function(e,l,r){function s(e,l){if(e===l)return!0;if(!e&&null!=l)return!1;if(null!=e&&!l)return!1;if(!e.spatialReference.equals(l.spatialReference)||e.dpi!==l.dpi)return!1;var r=e.origin,s=l.origin;if(Math.abs(r.x-s.x)>=o||Math.abs(r.y-s.y)>=o)return!1;var n,i,a=e.lods[0].scale,t=l.lods[0].scale;a>t?(n=e,i=l):(i=e,n=l);for(var u=n.lods[0].scale;u>=i.lods[i.lods.length-1].scale-o;u/=2)if(Math.abs(u-i.lods[0].scale)<o)return!0;return!1}function n(e,l){if(e===l)return e;if(!e&&null!=l)return l;if(null!=e&&!l)return e;for(var s=e.size[0],n=e.format,o=e.dpi,i={x:e.origin.x,y:e.origin.y},a=e.spatialReference.toJSON(),t=e.lods[0].scale>l.lods[0].scale?e.lods[0]:l.lods[0],u=e.lods[e.lods.length-1].scale<=l.lods[l.lods.length-1].scale?e.lods[e.lods.length-1]:l.lods[l.lods.length-1],d=t.scale,f=t.resolution,c=u.scale,p=[],g=d,h=f,v=0;g>c;)p.push({level:v,resolution:h,scale:g}),v++,g/=2,h/=2;return new r({size:[s,s],dpi:o,format:n||"pbf",origin:i,lods:p,spatialReference:a})}Object.defineProperty(l,"__esModule",{value:!0});var o=1e-6;l.areSchemasOverlapping=s,l.unionTileInfos=n});