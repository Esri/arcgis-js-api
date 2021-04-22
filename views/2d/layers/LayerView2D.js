/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/Collection","../../../core/collectionUtils","../../../core/watchUtils","../../layers/support/ClipArea","../../layers/support/ClipRect","../engine/Container","../../layers/support/Geometry","../../layers/support/Path"],(function(e,t,i,s,r,o,a,n,p,c,d,h,u,l,y,_,v,f,w){"use strict";const g=h.ofType({key:"type",base:y,typeMap:{rect:_,path:w,geometry:f}}),q=e=>{let s=function(e){function i(){var t;return(t=e.apply(this,arguments)||this).clips=new g,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}t._inheritsLoose(i,e);var s=i.prototype;return s.initialize=function(){var e;this.container||(this.container=new v.Container),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([l.init(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),l.init(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),l.init(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),l.init(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))},s.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1},s.isVisibleAtScale=function(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,o=!r;!i&&e<=s&&(i=!0),!o&&e>=r&&(o=!0),t=i&&o}return t},s.requestUpdate=function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},s.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},s.isUpdating=function(){return!1},s.isRendering=function(){return!1},s.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},t._createClass(i,[{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}}]),i}(e);return i.__decorate([a.property({type:g,set(e){const t=u.referenceSetter(e,this._get("clips"),g);this._set("clips",t)}})],s.prototype,"clips",void 0),i.__decorate([a.property()],s.prototype,"moving",void 0),i.__decorate([a.property()],s.prototype,"attached",void 0),i.__decorate([a.property()],s.prototype,"container",void 0),i.__decorate([a.property()],s.prototype,"suspended",void 0),i.__decorate([a.property({readOnly:!0})],s.prototype,"updateParameters",void 0),i.__decorate([a.property()],s.prototype,"updateRequested",void 0),i.__decorate([a.property()],s.prototype,"updating",null),i.__decorate([a.property()],s.prototype,"view",void 0),s=i.__decorate([n.subclass("esri.views.2d.layers.LayerView2D")],s),s};e.LayerView2DMixin=q,Object.defineProperty(e,"__esModule",{value:!0})}));
