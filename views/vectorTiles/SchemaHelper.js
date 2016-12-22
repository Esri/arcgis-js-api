// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/Error"],function(e,o,i){var t=function(){function e(e){this.lockedSchemaPixelSize=e}return e.prototype.getCompatibleLevelRowCol=function(e){var o=e[0],t=e[1],r=e[2];if(256===this.lockedSchemaPixelSize&&o>0)o--,t>>=1,r>>=1;else if(0!==o&&512!==this.lockedSchemaPixelSize)throw new i("Cannot get a compatible tile key for the locked tiling scheme!");return[o,t,r]},e.prototype.getSchemaShift=function(e,o){var i=0,t=0;return 256===this.lockedSchemaPixelSize&&(e[2]%2&&(i=2*o),e[1]%2&&(t=2*o)),[i,t]},e.prototype.adjustLevel=function(e){return 256===this.lockedSchemaPixelSize?e>0?e-1:0:e},e.create256x256CompatibleTileInfo=function(e){if(!e)return null;if(256===e.rows&&256===e.cols)return e;for(var o,i,t=e.format,r=e.compressionQuality,l=e.dpi,n=e.origin,c=e.spatialReference,a=256,s=[],u=0,f=e.lods.length;f>u;u++){var h=e.lods[u];o=h.scale,i=2*h.resolution,s.push({level:h.level,scale:o,resolution:i})}return{rows:a,cols:a,dpi:l,format:t,compressionQuality:r,origin:n,spatialReference:c,lods:s}},e}();return t});