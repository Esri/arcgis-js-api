/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{makeHandle as e}from"../core/handleUtils.js";import{watch as o}from"../core/reactiveUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import r from"../widgets/Widget.js";import{isWidget as n}from"../widgets/support/widget.js";import{createFocusTrap as a}from"focus-trap";import{messageBundle as c}from"../widgets/support/decorators/messageBundle.js";import{tsx as d}from"../widgets/support/jsxFactory.js";const l={base:"esri-identity-modal",open:"esri-identity-modal--open",closed:"esri-identity-modal--closed",title:"esri-identity-modal__title",dialog:"esri-identity-modal__dialog",content:"esri-identity-modal__content",closeButton:"esri-identity-modal__close-button",iconClose:"esri-icon-close"};let p=class extends r{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.content=null,this.open=!1,this._close=()=>{this.open=!1},document.body.appendChild(this.container),this.own(o((()=>this.open),(()=>this._toggleFocusTrap())))}destroy(){this._destroyFocusTrap()}render(){const t=this.id,{open:e,content:o,title:s,messages:i}=this,r=e&&!!o,n={[l.open]:r,[l.closed]:!r},a=d("button",{class:l.closeButton,"aria-label":i.close,title:i.close,bind:this,onclick:this._close,type:"button"},d("span",{"aria-hidden":"true",class:l.iconClose})),c=`${t}_title`,p=`${t}_content`,u=s?d("h1",{id:c,class:l.title},s):null,m=r?d("div",{bind:this,class:l.dialog,role:"dialog","aria-labelledby":c,"aria-describedby":p,afterCreate:this._createFocusTrap},a,u,this._renderContent(p)):null;return d("div",{tabIndex:-1,class:this.classes(l.base,n)},m)}_destroyFocusTrap(){this._focusTrap?.deactivate({onDeactivate:null}),this._focusTrap=null}_toggleFocusTrap(){const{_focusTrap:t,open:e}=this;t&&(e?t.activate():t.deactivate())}_createFocusTrap(t){this._destroyFocusTrap();const o=requestAnimationFrame((()=>{this._focusTrap=a(t,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap()}));this.own(e((()=>cancelAnimationFrame(o))))}_renderContent(t){const e=this.content;return"string"==typeof e?d("div",{class:l.content,id:t,innerHTML:e}):n(e)?d("div",{class:l.content,id:t},e.render()):e instanceof HTMLElement?d("div",{class:l.content,id:t,bind:e,afterCreate:this._attachToNode}):null}_attachToNode(t){const e=this;t.appendChild(e)}};t([s({readOnly:!0})],p.prototype,"container",void 0),t([s()],p.prototype,"content",void 0),t([s()],p.prototype,"open",void 0),t([s(),c("esri/t9n/common")],p.prototype,"messages",void 0),t([s({aliasOf:"messages.auth.signIn"})],p.prototype,"title",void 0),p=t([i("esri.identity.IdentityModal")],p);const u=p;export{u as default};