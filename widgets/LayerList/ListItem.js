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

define(["../../core/Accessor","../../core/Collection","../../core/Identifiable","../../core/lang","../../support/Action"],function(e,i,t,n,o){var r=new i.ofType(i.ofType(o))(),l=e.createSubclass(t,{properties:{actionsSections:{type:i.ofType(i.ofType(o)),value:r},actionsOpen:{value:!1},children:{type:i.ofType(l),value:[]},error:{},open:{value:!1},title:{value:""},updating:{value:!1},visible:{value:!0},visibleAtCurrentScale:{value:!0},visibilityMode:{}},clone:function(){return new l({actionsSections:n.clone(this.actionsSections.toArray()),actionsOpen:this.actionsOpen,children:n.clone(this.children.toArray()),error:this.error,open:this.open,title:this.title,updating:this.updating,visible:this.visible,visibleAtCurrentScale:this.visibleAtCurrentScale,visibilityMode:this.visibilityMode})}});return l});