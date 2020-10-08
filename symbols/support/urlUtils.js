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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/urlUtils","../../support/persistableUrlUtils"],(function(e,r,a,t){"use strict";function i(e,r,t){return r.imageData?a.makeData({mediaType:r.contentType||"image/png",isBase64:!0,data:r.imageData}):n(r.url,t)}function n(e,r){return function(e){return e&&("service"===e.origin||"portal-item"===e.origin)&&e.layer&&("feature"===e.layer.type||"stream"===e.layer.type)}(r)&&!a.isAbsolute(e)&&r.layer.parsedUrl?a.join(r.layer.parsedUrl.path,"images",e):t.fromJSON(e,r)}function o(e,r,i,n){if(a.isDataProtocol(e)){var o=a.dataComponents(e);r.contentType=o.mediaType,r.imageData=o.data,i&&i.imageData===r.imageData&&i.url&&t.write(i.url,r,"url",n)}else t.write(e,r,"url",n)}Object.defineProperty(r,"__esModule",{value:!0}),r.sourcePropertyDefinition=r.urlPropertyDefinition=r.writeImageDataAndUrl=r.read=r.readImageDataOrUrl=void 0,r.readImageDataOrUrl=i,r.read=n,r.writeImageDataAndUrl=o,r.urlPropertyDefinition={json:{read:{source:["imageData","url"],reader:i},write:{writer:function(e,r,a,t){o(e,r,this.source,t)}}}},r.sourcePropertyDefinition={readOnly:!0,json:{read:{source:["imageData","url"],reader:function(e,r,a){var t={};return r.imageData&&(t.imageData=r.imageData),r.contentType&&(t.contentType=r.contentType),r.url&&(t.url=n(r.url,a)),t}}}}}));