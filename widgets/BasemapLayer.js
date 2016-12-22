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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","dojo/has","../kernel"],function(e,s,t,i){var r=e(null,{declaredClass:"esri.widgets.BasemapLayer",constructor:function(e){e=e||{},e.url||e.type||console.error("esri.widgets.BasemapLayer: unable to find the 'url' or 'type' property in parameters"),this.url=e.url,this.type=e.type,this.isReference=e.isReference===!0?!0:!1,this.opacity=e.opacity,this.visibleLayers=e.visibleLayers,this.displayLevels=e.displayLevels,this.exclusionAreas=e.exclusionAreas,this.bandIds=e.bandIds,this.templateUrl=e.templateUrl,this.copyright=e.copyright,this.subDomains=e.subDomains,this.fullExtent=e.fullExtent,this.tileInfo=e.tileInfo,this.tileServers=e.tileServers}});return r});