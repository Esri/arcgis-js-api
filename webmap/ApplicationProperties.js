/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/Logger","../core/accessorSupport/decorators/subclass","../webdoc/applicationProperties/Viewing"],(function(e,o,r,t,i,n,p,s,c,l){"use strict";var u;let a=u=function(o){function r(e){var r;return(r=o.call(this,e)||this).editing=null,r.offline=null,r.viewing=null,r}return e._inheritsLoose(r,o),r.prototype.clone=function(){return new u(t.clone({editing:this.editing,offline:this.offline,viewing:this.viewing}))},r}(r.JSONSupport);return o.__decorate([i.property({json:{write:!0}})],a.prototype,"editing",void 0),o.__decorate([i.property({json:{write:!0}})],a.prototype,"offline",void 0),o.__decorate([i.property({type:l,json:{write:!0}})],a.prototype,"viewing",void 0),a=u=o.__decorate([c.subclass("esri.webmap.ApplicationProperties")],a),a}));
