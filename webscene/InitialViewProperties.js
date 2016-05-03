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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../Viewpoint","../core/Accessoire","../geometry/SpatialReference","./Environment","../core/accessoireSupport/typescript"],function(e,t,n,i,o,r,p,l,s){var c=function(e){function t(t){e.call(this,t),this.environment=null,this.spatialReference=null,this.viewingMode=null,this.viewpoint=null}return n(t,e),t.prototype.getDefaults=function(){return{environment:{}}},t.prototype.clone=function(){return new t({environment:this.environment.clone(),spatialReference:this.spatialReference?this.spatialReference.clone():null,viewingMode:this.viewingMode,viewpoint:this.viewpoint?this.viewpoint.clone():null})},i([s.shared("esri.webscene.InitialViewProperties")],t.prototype,"declaredClass",void 0),i([s.property({type:l})],t.prototype,"environment",void 0),i([s.property({value:null,type:p})],t.prototype,"spatialReference",void 0),i([s.property({value:null,setter:function(e){return"local"===e||"global"===e?e:void 0}})],t.prototype,"viewingMode",void 0),i([s.property({value:null,type:o})],t.prototype,"viewpoint",void 0),t=i([s.subclass()],t)}(r);return c});