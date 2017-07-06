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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../Basemap","../../../core/Accessor","../../../core/Collection"],function(e,r,t,o,p,s,a,c){var n=c.ofType(s),u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.basemaps=new n,r.state="ready",r}return t(r,e),r.prototype.refresh=function(){},r}(p.declared(a));return o([p.property({type:n})],u.prototype,"basemaps",void 0),o([p.property({readOnly:!0})],u.prototype,"state",void 0),u=o([p.subclass("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],u)});