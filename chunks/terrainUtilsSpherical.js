/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../core/Error","../geometry/support/spatialReferenceUtils","../geometry/projection","../views/3d/terrain/TilingScheme"],(function(e,i,t,n,r){"use strict";function l(){return!0}function c(){return 0}function o(e,l){const c=e.lods.length-1,o=e.spatialReference,s=n.canProjectToWGS84ComparableLonLat(o)||t.isMars(o)||t.isMoon(o);if(o.isWebMercator){if(!r.makeWebMercatorAuxiliarySphere(c).compatibleWith(e))return new i("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!s)return new i("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!r.makeGCSWithTileSize(e.spatialReference,e.size[0],c).compatibleWith(e))return e.spatialReference.isWGS84?new i("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme"):new i("tilingscheme:incompatible-global","The tiling scheme is not compatible with the ArcGIS Online tiling scheme")}if(l&&!e.spatialReference.equals(l))return new i("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}var s=Object.freeze({__proto__:null,isInsideExtent:l,tiltToExtentEdge:c,checkIfTileInfoSupportedForViewSR:o});e.checkIfTileInfoSupportedForViewSR=o,e.isInsideExtent=l,e.terrainUtilsSpherical=s,e.tiltToExtentEdge=c}));
