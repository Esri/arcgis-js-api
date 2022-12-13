/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,p,c){"use strict";let i=function(r){function t(e){var t;return(t=r.call(this,e)||this).isCollection=null,t.magicKey=null,t.text=null,t}return e._inheritsLoose(t,r),t}(t.JSONSupport);r.__decorate([o.property({type:Boolean,json:{write:!0}})],i.prototype,"isCollection",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],i.prototype,"magicKey",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],i.prototype,"text",void 0),i=r.__decorate([c.subclass("esri.rest.support.SuggestionCandidate")],i);return i}));
