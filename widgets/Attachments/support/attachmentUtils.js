// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../assets"],(function(e,i,p){Object.defineProperty(i,"__esModule",{value:!0});var a=p.getAssetUrl("esri/themes/base/images/files/");i.isSupportedImage=function(e){var i=e.toLowerCase();return"image/bmp"===i||"image/emf"===i||"image/exif"===i||"image/gif"===i||"image/x-icon"===i||"image/jpeg"===i||"image/png"===i||"image/tiff"===i||"image/x-wmf"===i},i.getIconPath=function(e){return e?"text/plain"===e?a+"text-32.svg":"application/pdf"===e?a+"pdf-32.svg":"text/csv"===e?a+"csv-32.svg":"application/gpx+xml"===e?a+"gpx-32.svg":"application/x-dwf"===e?a+"cad-32.svg":"application/postscript"===e||"application/json"===e||"text/xml"===e||"model/vrml"===e?a+"code-32.svg":"application/x-zip-compressed"===e||"application/x-7z-compressed"===e||"application/x-gzip"===e||"application/x-tar"===e||"application/x-gtar"===e||"application/x-bzip2"===e||"application/gzip"===e||"application/x-compress"===e||"application/x-apple-diskimage"===e||"application/x-rar-compressed"===e||"application/zip"===e?a+"zip-32.svg":-1!==e.indexOf("image/")?a+"image-32.svg":-1!==e.indexOf("audio/")?a+"sound-32.svg":-1!==e.indexOf("video/")?a+"video-32.svg":-1!==e.indexOf("msexcel")||-1!==e.indexOf("ms-excel")||-1!==e.indexOf("spreadsheetml")?a+"excel-32.svg":-1!==e.indexOf("msword")||-1!==e.indexOf("ms-word")||-1!==e.indexOf("wordprocessingml")?a+"word-32.svg":-1!==e.indexOf("powerpoint")||-1!==e.indexOf("presentationml")?a+"report-32.svg":a+"generic-32.svg":a+"generic-32.svg"}}));