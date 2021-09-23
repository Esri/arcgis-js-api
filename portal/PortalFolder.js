/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Error","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,p,l,n,s,c){"use strict";let u=function(r){function o(e){var t;return(t=r.call(this,e)||this).created=null,t.id=null,t.portal=null,t.title=null,t.username=null,t}return e._inheritsLoose(o,r),o.prototype.toJSON=function(){throw new t("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")},e._createClass(o,[{key:"url",get:function(){const e=this.get("portal.restUrl");return e?`${e}/content/users/${this.username}/${this.id}`:null}}]),o}(o.JSONSupport);return r.__decorate([p.property({type:Date})],u.prototype,"created",void 0),r.__decorate([p.property()],u.prototype,"id",void 0),r.__decorate([p.property()],u.prototype,"portal",void 0),r.__decorate([p.property()],u.prototype,"title",void 0),r.__decorate([p.property({readOnly:!0})],u.prototype,"url",null),r.__decorate([p.property()],u.prototype,"username",void 0),u=r.__decorate([c.subclass("esri.portal.PortalFolder")],u),u}));
