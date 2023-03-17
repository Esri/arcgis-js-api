/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,s,n,p,i){"use strict";var c;e.LegendOptions=c=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).title=null,t}return t._inheritsLoose(r,e),r.prototype.clone=function(){return new c({title:this.title})},r}(o.JSONSupport),r.__decorate([s.property({type:String,json:{write:!0}})],e.LegendOptions.prototype,"title",void 0),e.LegendOptions=c=r.__decorate([i.subclass("esri.renderers.support.LegendOptions")],e.LegendOptions),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
