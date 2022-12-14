/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass"],(function(t,e,r,o,p,s,n){"use strict";var i;let c=i=function(e){function r(t){return e.call(this,t)||this}return t._inheritsLoose(r,e),r.prototype.clone=function(){return new i({name:this.name,path:this.path,title:this.title})},r}(r.JSONSupport);e.__decorate([o.property({type:String,json:{write:!0}})],c.prototype,"name",void 0),e.__decorate([o.property({type:String,json:{write:!0}})],c.prototype,"path",void 0),e.__decorate([o.property({type:String,json:{write:!0}})],c.prototype,"title",void 0),c=i=e.__decorate([n.subclass("esri.webscene.TransportationNetwork")],c);return c}));
