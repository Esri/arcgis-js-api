// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Accessor","./Handles","./accessorSupport/decorators"],(function(e,r,t,o,s,n,c){return function(e){function r(){var r=e.call(this)||this;return r.handles=new n,r}return t(r,e),r.prototype.destroy=function(){this.handles.destroy()},o([c.property({readOnly:!0})],r.prototype,"handles",void 0),r=o([c.subclass("esri.core.HandleOwner")],r)}(c.declared(s))}));