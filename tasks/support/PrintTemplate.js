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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators"],(function(t,e,o,r,p,a){return function(t){function e(e){var o=t.call(this,e)||this;return o.attributionVisible=!0,o.exportOptions={width:800,height:1100,dpi:96},o.forceFeatureAttributes=!1,o.format="png32",o.label=null,o.layout="map-only",o.layoutOptions=null,o.outScale=0,o.preserveScale=!0,o.showLabels=!0,o}return o(e,t),r([a.property()],e.prototype,"attributionVisible",void 0),r([a.property()],e.prototype,"exportOptions",void 0),r([a.property()],e.prototype,"forceFeatureAttributes",void 0),r([a.property({type:["pdf","png32","png8","jpg","gif","eps","svg","svgz"]})],e.prototype,"format",void 0),r([a.property()],e.prototype,"label",void 0),r([a.property({type:["map-only","a3-landscape","a3-portrait","a4-landscape","a4-portrait","letter-ansi-a-landscape","letter-ansi-a-portrait","tabloid-ansi-b-landscape","tabloid-ansi-b-portrait"]})],e.prototype,"layout",void 0),r([a.property()],e.prototype,"layoutOptions",void 0),r([a.property()],e.prototype,"outScale",void 0),r([a.property()],e.prototype,"preserveScale",void 0),r([a.property()],e.prototype,"showLabels",void 0),e=r([a.subclass("esri.tasks.support.PrintTemplate")],e)}(a.declared(p))}));