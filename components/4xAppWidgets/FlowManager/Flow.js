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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","dojo/i18n!../../../nls/common","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators","../../../support/actions/ActionButton"],function(e,t,o,r,n,p,c,i,s){"use strict";var l=c.ofType(s),a=[new s({title:n.save,id:"save",buttonType:"primary"}),new s({title:n.cancel,id:"cancel",buttonType:"secondary"})];return function(e){function t(t){var o=e.call(this,t)||this;return o.formActions=new l(a),o.label=null,o.menuActions=new l,o.title=null,o}return o(t,e),r([i.property()],t.prototype,"content",void 0),r([i.property({type:l})],t.prototype,"formActions",void 0),r([i.property()],t.prototype,"label",void 0),r([i.property({type:l})],t.prototype,"menuActions",void 0),r([i.property()],t.prototype,"title",void 0),t=r([i.subclass("esri.widgets.FlowManager.Flow")],t)}(i.declared(p))});