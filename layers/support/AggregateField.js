/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./OutStatistic"],(function(t,e,r,o,s,c,p,i,n){"use strict";var u;let a=u=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).name=null,t}return t._inheritsLoose(r,e),r.prototype.clone=function(){return new u({name:this.name,outStatistic:this.outStatistic.clone()})},r}(r.JSONSupport);return e.__decorate([o.property({type:String,json:{write:!0}})],a.prototype,"name",void 0),e.__decorate([o.property({type:n,json:{write:!0}})],a.prototype,"outStatistic",void 0),a=u=e.__decorate([i.subclass("esri.layers.support.AggregateField")],a),a}));
