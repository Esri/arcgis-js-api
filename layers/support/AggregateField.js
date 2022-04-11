/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./OutStatistic"],(function(t,e,r,o,s,c,p,i,n){"use strict";var a;let u=a=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).name=null,t}return t._inheritsLoose(r,e),r.prototype.clone=function(){return new a({name:this.name,outStatistic:this.outStatistic.clone()})},r}(r.JSONSupport);e.__decorate([o.property({type:String,json:{write:!0}})],u.prototype,"name",void 0),e.__decorate([o.property({type:n,json:{write:!0}})],u.prototype,"outStatistic",void 0),u=a=e.__decorate([i.subclass("esri.layers.support.AggregateField")],u);return u}));
