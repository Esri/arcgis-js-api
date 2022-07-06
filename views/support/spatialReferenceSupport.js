/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{SupportedGCSWkids as i}from"../../geometry/support/SupportedGCSWkids.js";import{ViewingMode as o}from"../ViewingMode.js";function r(r,S){return null!=r&&(null==S||(S===o.Local?!r.isGeographic||(r.isWGS84||r.wkid===i.CGCS2000):r.isWebMercator||r.isWGS84||r.wkid===i.CGCS2000||r.wkid===i.GCSMARS2000||r.wkid===i.GCSMARS2000_SPHERE||r.wkid===i.GCSMOON2000))}export{r as isSpatialReferenceSupported};
