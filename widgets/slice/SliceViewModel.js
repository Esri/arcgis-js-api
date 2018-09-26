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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators","../../views/3d/interactive/interactiveToolUtils","../../views/3d/interactive/analysisTools/slice/SliceTool"],function(e,t,o,i,l,r,s,n,a,c){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new r,t.view=null,t.tool=null,t.plane=null,t}return o(t,e),t.prototype.initialize=function(){var e=this;this._handles.add(s.init(this,"view.ready",function(){var t=e.view&&e.view.ready;t&&!e.tool&&e._set("tool",new c({view:e.view})),a.toggle(e.view,e.tool),t||e._set("tool",null)}))},t.prototype.destroy=function(){a.toggle(this.view,this.tool,!1),this._set("tool",null),this.view=null,this._handles.destroy(),this._handles=null},i([n.property()],t.prototype,"view",void 0),i([n.property({readOnly:!0})],t.prototype,"tool",void 0),i([n.aliasOf("tool.plane")],t.prototype,"plane",void 0),t=i([n.subclass("esri.widgets.slice.SliceViewModel")],t)}(n.declared(l))});