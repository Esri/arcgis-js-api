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

define(["require","exports","../../core/urlUtils","../../support/persistableUrlUtils"],(function(e,a,r,t){function i(e,a,t){return a.imageData?r.makeData({mediaType:a.contentType||"image/png",isBase64:!0,data:a.imageData}):n(a.url,t)}function n(e,a){return function(e){return e&&("service"===e.origin||"portal-item"===e.origin)&&e.layer&&("feature"===e.layer.type||"stream"===e.layer.type)}(a)&&!r.isAbsolute(e)&&a.layer.parsedUrl?r.join(a.layer.parsedUrl.path,"images",e):t.fromJSON(e,a)}function o(e,a,i,n){if(r.isDataProtocol(e)){var o=r.dataComponents(e);a.contentType=o.mediaType,a.imageData=o.data,i&&i.imageData===a.imageData&&i.url&&t.write(i.url,a,"url",n)}else t.write(e,a,"url",n)}Object.defineProperty(a,"__esModule",{value:!0}),a.readImageDataOrUrl=i,a.read=n,a.writeImageDataAndUrl=o,a.urlPropertyDefinition={json:{read:{source:["imageData","url"],reader:i},write:{writer:function(e,a,r,t){o(e,a,this.source,t)}}}},a.sourcePropertyDefinition={readOnly:!0,json:{read:{source:["imageData","url"],reader:function(e,a,r){var t={};return a.imageData&&(t.imageData=a.imageData),a.contentType&&(t.contentType=a.contentType),a.url&&(t.url=n(a.url,r)),t}}}}}));