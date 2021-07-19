/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,s,p,c,i){"use strict";let n=function(r){function o(e){var o;return(o=r.call(this,e)||this).isCollection=null,o.magicKey=null,o.text=null,o}return e._inheritsLoose(o,r),o}(o.JSONSupport);return r.__decorate([t.property({type:Boolean,json:{write:!0}})],n.prototype,"isCollection",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],n.prototype,"magicKey",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],n.prototype,"text",void 0),n=r.__decorate([i.subclass("esri.rest.support.SuggestionCandidate")],n),n}));
