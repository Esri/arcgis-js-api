// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports"],function(e,i){return function(){function e(e,i){this.lockedSchemaPixelSize=e,this.isWGS84=i}return e.prototype.getCompatibleLevelRowCol=function(e){var i=e[0],o=e[1],r=e[2];return this.isWGS84?(o>>=1,r>>=1):256===this.lockedSchemaPixelSize&&i>0&&(i--,o>>=1,r>>=1),[i,o,r]},e.prototype.getSchemaShift=function(e,i){var o=0,r=0;return(256===this.lockedSchemaPixelSize||this.isWGS84)&&(e[2]%2&&(o=2*i),e[1]%2&&(r=2*i)),[o,r]},e.prototype.adjustLevel=function(e){return this.isWGS84?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e},e.create256x256CompatibleTileInfo=function(e){if(!e)return null;if(256===e.rows&&256===e.cols)return e;for(var i,o,r=e.format,t=e.compressionQuality,l=e.dpi,n=e.origin,s=e.spatialReference,a=4326===s.wkid,c=[],u=e.lods.length,f=0;f<u;f++){var p=e.lods[f];i=p.scale,o=a?p.resolution:2*p.resolution,c.push({level:p.level,scale:i,resolution:o})}return{rows:256,cols:256,dpi:l,format:r,compressionQuality:t,origin:n,spatialReference:s,lods:c}},e.create512x512CompatibleTileInfo=function(e){if(!e)return null;if(256===e.rows||256===e.cols)return null;for(var i,o,r=e.format,t=e.compressionQuality,l=e.dpi,n=e.origin,s=e.spatialReference,a=[],c=e.lods.length,u=0;u<c;u++){var f=e.lods[u];i=f.scale,o=.5*f.resolution,a.push({level:f.level,scale:i,resolution:o})}return{rows:512,cols:512,dpi:l,format:r,compressionQuality:t,origin:n,spatialReference:s,lods:a}},e}()});