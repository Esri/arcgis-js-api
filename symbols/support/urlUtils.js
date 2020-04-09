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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/urlUtils"],(function(e,a,r){function t(e,a,t){return a.imageData?r.makeData({mediaType:a.contentType||"image/png",isBase64:!0,data:a.imageData}):i(a.url,t)}function i(e,a){return function(e){return e&&("service"===e.origin||"portal-item"===e.origin)&&e.layer&&("feature"===e.layer.type||"stream"===e.layer.type)}(a)&&!r.isAbsolute(e)&&a.layer.parsedUrl?r.join(a.layer.parsedUrl.path,"images",e):r.fromJSON(e,a)}function n(e,a,t,i){if(r.isDataProtocol(e)){var n=r.dataComponents(e);a.contentType=n.mediaType,a.imageData=n.data,t&&t.imageData===a.imageData&&t.url&&r.write(t.url,a,"url",i)}else r.write(e,a,"url",i)}Object.defineProperty(a,"__esModule",{value:!0}),a.readImageDataOrUrl=t,a.read=i,a.writeImageDataAndUrl=n,a.urlPropertyDefinition={json:{read:{source:["imageData","url"],reader:t},write:{writer:function(e,a,r,t){n(e,a,this.source,t)}}}},a.sourcePropertyDefinition={readOnly:!0,json:{read:{source:["imageData","url"],reader:function(e,a,r){var t={};return a.imageData&&(t.imageData=a.imageData),a.contentType&&(t.contentType=a.contentType),a.url&&(t.url=i(a.url,r)),t}}}}}));