/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./accessorSupport/decorators/property","./Warning","./accessorSupport/decorators/subclass","./Error","./promiseUtils","./Promise"],(function(o,e,r,t,l,n,a,s){"use strict";const d="not-loaded",i="loading",c="failed",u="loaded",p=s=>{let p=function(e){function r(...r){var t;return(t=e.call(this,...r)||this)._loadController=null,t.loadError=null,t.loadStatus="not-loaded",t._set("loadWarnings",[]),t.addResolvingPromise(new Promise((e=>{const r=t.load.bind(o._assertThisInitialized(t));t.load=l=>{const s=new Promise(((e,r)=>{const s=a.onAbortOrThrow(l,r);t.destroyed&&r(new n("load:instance-destroyed",`Instance of '${t.declaredClass||t.constructor.name}' is already destroyed`,{instance:o._assertThisInitialized(t)})),t._promiseProps.when(e,r).finally((()=>{s&&s.remove()}))}));if(t.loadStatus===d){t._set("loadStatus",i);const o=t._loadController=a.createAbortController();r({signal:o.signal}),a.onAbort(o.signal,(()=>{t._promiseProps.abort()}))}return e(),s}}))),t.when((()=>{t._set("loadStatus",u),t._loadController=null}),(o=>{t._set("loadStatus",c),t._set("loadError",o),t._loadController=null})),t}o._inheritsLoose(r,e);var t=r.prototype;return t.load=function(){return null},t.cancelLoad=function(){var o;return this.isFulfilled()||(this._set("loadError",new n("load:cancelled","Cancelled")),null==(o=this._loadController)||o.abort()),this},o._createClass(r,[{key:"loaded",get:function(){return this.loadStatus===u}},{key:"loadWarnings",get:function(){return this._get("loadWarnings")}}]),r}(s);return e.__decorate([r.property({readOnly:!0})],p.prototype,"loaded",null),e.__decorate([r.property({readOnly:!0})],p.prototype,"loadError",void 0),e.__decorate([r.property()],p.prototype,"loadStatus",void 0),e.__decorate([r.property({type:[t],readOnly:!0})],p.prototype,"loadWarnings",null),p=e.__decorate([l.subclass("esri.core.Loadable")],p),p};let _=function(e){function r(){return e.apply(this,arguments)||this}return o._inheritsLoose(r,e),r}(p(s.EsriPromise));return _=e.__decorate([l.subclass("esri.core.Loadable")],_),function(o){function e(o){return!(!o||!o.load)}o.LoadableMixin=p,o.isLoadable=e}(_||(_={})),_}));
