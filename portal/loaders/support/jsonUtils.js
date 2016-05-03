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

define(["require","exports","./setUtils","../../../PopupTemplate"],function(e,r,s,a){function o(e,r){var o=null;r.layers&&Array.isArray(r.layers)&&r.layers.forEach(function(e){e.popupInfo&&(o=o||{},o[e.id]=a.fromJSON(e.popupInfo))}),s.setAsDefaultIfDefined(e,"popupTemplates",o)}function p(e,r,a,o){if(void 0!==a){var p=void 0;if(e._accessorProps){var i=e._accessorProps;p=i&&i.properties&&i.properties[r]&&i.properties[r].reader}else if(e.__accessor__){var i=e.__accessor__.metadatas;p=i&&i[r]&&i[r].json&&i[r].json.read}var f=void 0;return f=p?p.call(e,o[r],o):o[r],s.setAsDefaultIfDefined(e,r,f)}}r.readPopupTemplates=o,r.readIfDefined=p});