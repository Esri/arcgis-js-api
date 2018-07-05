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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports"],function(i,e){function p(i){var e=i.toLowerCase();return"image/bmp"===e||"image/emf"===e||"image/exif"===e||"image/gif"===e||"image/x-icon"===e||"image/jpeg"===e||"image/png"===e||"image/tiff"===e||"image/x-wmf"===e}function a(i){return"text/plain"===i?o+"text-32.svg":"application/pdf"===i?o+"pdf-32.svg":"text/csv"===i?o+"csv-32.svg":"application/gpx+xml"===i?o+"gpx-32.svg":"application/x-dwf"===i?o+"cad-32.svg":"application/postscript"===i||"application/json"===i||"text/xml"===i||"model/vrml"===i?o+"code-32.svg":"application/x-zip-compressed"===i||"application/x-7z-compressed"===i||"application/x-gzip"===i||"application/x-tar"===i||"application/x-gtar"===i||"application/x-bzip2"===i||"application/gzip"===i||"application/x-compress"===i||"application/x-apple-diskimage"===i||"application/x-rar-compressed"===i||"application/zip"===i?o+"zip-32.svg":-1!==i.indexOf("image/")?o+"image-32.svg":-1!==i.indexOf("audio/")?o+"sound-32.svg":-1!==i.indexOf("video/")?o+"video-32.svg":-1!==i.indexOf("msexcel")||-1!==i.indexOf("ms-excel")||-1!==i.indexOf("spreadsheetml")?o+"excel-32.svg":-1!==i.indexOf("msword")||-1!==i.indexOf("ms-word")||-1!==i.indexOf("wordprocessingml")?o+"word-32.svg":-1!==i.indexOf("powerpoint")||-1!==i.indexOf("presentationml")?o+"report-32.svg":o+"generic-32.svg"}Object.defineProperty(e,"__esModule",{value:!0});var o=i.toUrl("../../../themes/base/images/files/");e.isSupportedImage=p,e.getIconPath=a});