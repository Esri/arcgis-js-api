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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor"],function(r,o,e,I,p,t){var O=function(r){function o(){var o=null!==r&&r.apply(this,arguments)||this;return o.SCENEVIEW_HITTEST_RETURN_SELECTOR=!1,o.HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED=!1,o.HIGHLIGHTS_VISUALIZE_BLOCKS=!1,o.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,o.DECONFLICTOR_SHOW_OUTLINES=!1,o.DECONFLICTOR_SHOW_GRID=!1,o.LABELS_SHOW_BORDER=!1,o}return e(o,r),o}(p.declared(t));I([p.property()],O.prototype,"SCENEVIEW_HITTEST_RETURN_SELECTOR",void 0),I([p.property()],O.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED",void 0),I([p.property()],O.prototype,"HIGHLIGHTS_VISUALIZE_BLOCKS",void 0),I([p.property()],O.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),I([p.property()],O.prototype,"DECONFLICTOR_SHOW_OUTLINES",void 0),I([p.property()],O.prototype,"DECONFLICTOR_SHOW_GRID",void 0),I([p.property()],O.prototype,"LABELS_SHOW_BORDER",void 0),O=I([p.subclass()],O);var _=new O;return _});