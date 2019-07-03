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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

/**
 * Defines the layout template options used by the {@link module:esri/widgets/Print|Print} widget to generate the print page.
 *
 * @module esri/widgets/Print/TemplateOptions
 * @since 4.6
 *
 * @see module:esri/widgets/Print
 * @see module:esri/tasks/support/PrintTemplate
 *
 * @example
 *
 * templateOptions = new TemplateOptions({
 *   title: "My Print",
 *   author: "Sam",
 *   copyright: "My Company",
 *   legendEnabled: false
 * });
 */

//  copyright

/**
             * The text used for the copyright if the specified layout contains an copyright text element.
             *
             * @name copyright
             * @instance
             * @type {string}
             */

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators"],function(t,e,o,r,p,i){return function(t){function e(e){var o=t.call(this)||this;return o.attributionEnabled=!0,o.author=null,o.copyright=null,o.dpi=96,o.forceFeatureAttributes=!1,o.format=null,o.layout=null,o.legendEnabled=!0,o.height=null,o.scaleEnabled=!1,o.title=null,o.width=null,o}return o(e,t),r([i.property()],e.prototype,"attributionEnabled",void 0),r([i.property()],e.prototype,"author",void 0),r([i.property()],e.prototype,"copyright",void 0),r([i.property()],e.prototype,"dpi",void 0),r([i.property()],e.prototype,"forceFeatureAttributes",void 0),r([i.property()],e.prototype,"format",void 0),r([i.property()],e.prototype,"layout",void 0),r([i.property()],e.prototype,"legendEnabled",void 0),r([i.property()],e.prototype,"height",void 0),r([i.property()],e.prototype,"scale",void 0),r([i.property()],e.prototype,"scaleEnabled",void 0),r([i.property()],e.prototype,"title",void 0),r([i.property()],e.prototype,"width",void 0),e=r([i.subclass("esri.widgets.Print.TemplateOptions")],e)}(i.declared(p))});