/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,p,c,i){"use strict";let n=function(r){function t(e){var t;return(t=r.call(this,e)||this).isCollection=null,t.magicKey=null,t.text=null,t}return e._inheritsLoose(t,r),t}(t.JSONSupport);r.__decorate([o.property({type:Boolean,json:{write:!0}})],n.prototype,"isCollection",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],n.prototype,"magicKey",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],n.prototype,"text",void 0),n=r.__decorate([i.subclass("esri.rest.support.SuggestionCandidate")],n);return n}));
