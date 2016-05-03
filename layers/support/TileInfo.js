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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../core/jsonDictionary","../../core/JSONSupporter","../../core/lang","../../geometry/SpatialReference","../../geometry/Point","./LOD","dojo/_base/lang"],function(e,r,t,n,i,o,a){var s=e({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc"}),l=r.createSubclass({declaredClass:"esri.layers.support.TileInfo",classMetadata:{properties:{origin:{dependsOn:["spatialReference"]},spatialReference:{type:n}}},lods:null,_lodsReader:function(e){return e.map(function(e){return o.fromJSON(e)})},_lodsSetter:function(e){var r=0,t=0,n=[];return e&&(r=-1/0,t=1/0,e.forEach(function(e){n.push(e.scale),r=e.scale>r?e.scale:r,t=e.scale<t?e.scale:t},this)),this.scales=n,this.minScale=r,this.maxScale=t,e},origin:null,_originReader:function(e,r){return i.fromJSON(a.mixin({spatialReference:r.spatialReference},e))},spatialReference:null,_spatialReferenceReader:function(e){return e&&new n(e)},_spatialReferenceSetter:function(e){return e?e.clone():null},format:null,_formatReader:s.fromJSON,zoomToScale:function(e){var r=this.scales;if(0>=e)return r[0];if(e>=r.length)return r[r.length-1];var t=Math.round(e-.5),n=Math.round(e);return r[n]+(n-e)*(r[t]-r[n])},scaleToZoom:function(e){var r,t,n=this.scales,i=0,o=n.length-1;for(i;o>i;i++){if(r=n[i],t=n[i+1],e>=r)return i;if(t===e)return i+1;if(r>e&&e>t)return i+1-(e-t)/(r-t)}return i},snapScale:function(e,r){null==r&&(r=.95);var t=this.scaleToZoom(e),n=t%Math.floor(t);return this.zoomToScale(n>=r?Math.ceil(t):Math.floor(t))},clone:function(){return l.fromJSON(this.toJSON())},toJSON:function(){return t.fixJson({rows:this.rows,cols:this.cols,dpi:this.dpi,format:s.toJSON(this.format),compressionQuality:this.compressionQuality,origin:this.origin&&this.origin.toJSON(),spatialReference:this.spatialReference&&this.spatialReference.toJSON(),lods:this.lods&&this.lods.map(function(e){return e.toJSON()})})}});return l});