/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../core/JSONSupport","../geometry/SpatialReference","../Viewpoint","./Environment"],(function(e,t,o,r,i,n,s,p,c,l,a,u,v,d){"use strict";var w;let y=w=function(t){function o(e){var o;return(o=t.call(this,e)||this).environment=new d,o.spatialReference=null,o.viewpoint=null,o}return e._inheritsLoose(o,t),o.prototype.clone=function(){return new w({environment:this.environment.clone(),spatialReference:this.spatialReference?this.spatialReference.clone():null,viewingMode:this.viewingMode,viewpoint:this.viewpoint?this.viewpoint.clone():null})},e._createClass(o,[{key:"viewingMode",set:function(e){this._set("viewingMode",e)}}]),o}(a.JSONSupport);return t.__decorate([n.property({type:d,json:{write:{isRequired:!0}}})],y.prototype,"environment",void 0),t.__decorate([n.property({type:u})],y.prototype,"spatialReference",void 0),t.__decorate([n.property({type:["local","global"]})],y.prototype,"viewingMode",null),t.__decorate([n.property({type:v,json:{write:{isRequired:!0}}})],y.prototype,"viewpoint",void 0),y=w=t.__decorate([s.subclass("esri.webscene.InitialViewProperties")],y),y}));
