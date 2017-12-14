// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

//  copyright

/**
             * The copyright text as defined by the map service.
             *
             * @name copyright
             * @memberof module:esri/layers/mixins/ArcGISMapService
             *
             * @type {string}
             */

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./ArcGISService","../../geometry/Extent","../../geometry/SpatialReference"],function(e,r,t,o,p,i,n,a){var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.copyright=null,r.fullExtent=null,r.legendEnabled=!0,r.spatialReference=null,r.version=null,r}return t(r,e),r.prototype.readCapabilities=function(e,r){return e&&e.split(",").map(function(e){return e.trim()})},r.prototype.readCopyright=function(e,r){return r.copyrightText},r.prototype.readPopupEnabled=function(e,r){return!r.disablePopup},r.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t},o([p.property()],r.prototype,"capabilities",void 0),o([p.reader("service","capabilities")],r.prototype,"readCapabilities",null),o([p.property()],r.prototype,"copyright",void 0),o([p.reader("copyright",["copyrightText"])],r.prototype,"readCopyright",null),o([p.property({type:n})],r.prototype,"fullExtent",void 0),o([p.property({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],r.prototype,"id",void 0),o([p.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),o([p.reader("popupEnabled",["disablePopup"])],r.prototype,"readPopupEnabled",null),o([p.property({type:a})],r.prototype,"spatialReference",void 0),o([p.property()],r.prototype,"version",void 0),o([p.reader("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=o([p.subclass("esri.layers.mixins.ArcGISMapService")],r)}(p.declared(i));return l});