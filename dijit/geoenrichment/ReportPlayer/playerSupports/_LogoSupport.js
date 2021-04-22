// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/when","../core/annotations/supportClasses/DynamicBehaviors","../core/supportClasses/images/DefaultLogoLoader"],(function(t,e,o,a){return t(null,{_getReportLogo:function(t,a,r){var n=this;switch(t){case o.ATTACHMENTS:return e(n._reportData.attachmentsStore&&n._reportData.attachmentsStore.getImages(),(function(t){return e(t&&t[0]&&t[0].getThumbnail(),(function(t){return t||n._getDefaultLogo(a,r)}))}));default:return this._getDefaultLogo(a,r)}},_getDefaultLogo:function(t,e){return this._reportData.customLogo||e||a.getDefaultLogo(this._viewModel.getDocumentDefaultStyles())}})}));