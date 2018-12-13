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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(e,i){return function(){function e(e,i){this.lockedSchemaPixelSize=e,this.isWGS84=i}return e.prototype.getLevelRowColumn=function(e){return this.isWGS84?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e},e.prototype.adjustLevel=function(e){return this.isWGS84?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e},e.prototype.getShift=function(e,i){var o=0,t=0;return(256===this.lockedSchemaPixelSize||this.isWGS84)&&(e[2]%2&&(o=2*i),e[1]%2&&(t=2*i)),[o,t]},e.prototype.getScale=function(e){if(this.isWGS84){if(512===this.lockedSchemaPixelSize)return 2}else if(256===this.lockedSchemaPixelSize&&0===e)return.5;return 1},e.create256x256CompatibleTileInfo=function(e){if(!e)return null;if(256===e.rows&&256===e.cols)return e;for(var i=4326===e.spatialReference.wkid,o=[],t=e.lods.length,r=0;r<t;r++){var l=e.lods[r],n=i?l.resolution:2*l.resolution;o.push({level:l.level,scale:l.scale,resolution:n})}return{rows:256,cols:256,dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:o}},e.create512x512CompatibleTileInfo=function(e){if(!e)return null;if(256===e.rows||256===e.cols)return null;for(var i=[],o=e.lods.length,t=0;t<o;t++){var r=e.lods[t],l=.5*r.resolution;i.push({level:r.level,scale:r.scale,resolution:l})}return{rows:512,cols:512,dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:i}},e}()});