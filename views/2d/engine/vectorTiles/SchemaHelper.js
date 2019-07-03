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

define(["require","exports","../../../../layers/support/LOD","../../../../layers/support/TileInfo"],function(e,i,t,r){return function(){function e(e,i){this.lockedSchemaPixelSize=e,this.isGCS=i}return e.prototype.getLevelRowColumn=function(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e},e.prototype.adjustLevel=function(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e},e.prototype.getShift=function(e,i){var t=0,r=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(t=2*i),e[1]%2&&(r=2*i)),[t,r]},e.prototype.getScale=function(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 2}else if(256===this.lockedSchemaPixelSize&&0===e)return.5;return 1},e.create256x256CompatibleTileInfo=function(e){if(!e)return null;if(256===e.size[0]&&256===e.size[1])return e;for(var i=e.spatialReference.isGeographic,o=[],l=e.lods.length,n=0;n<l;n++){var s=e.lods[n],a=i?s.resolution:2*s.resolution;o.push(new t({level:s.level,scale:s.scale,resolution:a}))}return new r({size:[256,256],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:o})},e.create512x512CompatibleTileInfo=function(e){if(!e)return null;if(256===e.size[0]||256===e.size[1])return null;for(var i=[],o=e.lods.length,l=0;l<o;l++){var n=e.lods[l],s=.5*n.resolution;i.push(new t({level:n.level,scale:n.scale,resolution:s}))}return new r({size:[512,512],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:i})},e}()});