// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/accessorSupport/decorators","../widgets/Widget","../widgets/support/widget"],(function(e,t,i,o,n,r){var s="esri-identity-modal",d="esri-identity-modal--open",a="esri-identity-modal--closed",l="esri-identity-modal__title",c="esri-identity-modal__dialog",p="esri-identity-modal__content",_="esri-identity-modal__close-button",y="esri-icon-close";return function(e){function t(t,i){var o=e.call(this,t,i)||this;return o.container=document.createElement("div"),o.content=null,o.open=!1,document.body.appendChild(o.container),o}return i.__extends(t,e),t.prototype.render=function(){var e,t=this.id,i=this.open,o=this.content,n=this.title,p=this.messages,u=i&&!!o,h=((e={})[d]=u,e[a]=!u,e),b=r.tsx("button",{class:_,"aria-label":p.close,bind:this,onclick:this._close},r.tsx("span",{"aria-hidden":"true",class:y})),m=t+"_title",v=t+"_content",g=n?r.tsx("h1",{id:m,class:l},n):null,f=u?r.tsx("div",{class:c,role:"dialog","aria-labelledby":m,"aria-describedby":v},b,g,this._renderContent(v)):null;return r.tsx("div",{tabIndex:-1,class:this.classes(s,h)},f)},t.prototype._close=function(){this.open=!1},t.prototype._renderContent=function(e){var t=this.content;return"string"==typeof t?r.tsx("div",{class:p,id:e,innerHTML:t}):r.isWidget(t)?r.tsx("div",{class:p,id:e},t.render()):t instanceof HTMLElement?r.tsx("div",{class:p,id:e,bind:t,afterCreate:this._attachToNode}):null},t.prototype._attachToNode=function(e){e.appendChild(this)},i.__decorate([o.property({readOnly:!0})],t.prototype,"container",void 0),i.__decorate([o.property(),r.renderable()],t.prototype,"content",void 0),i.__decorate([o.property(),r.renderable()],t.prototype,"open",void 0),i.__decorate([o.property(),r.renderable(),r.messageBundle("esri/t9n/common")],t.prototype,"messages",void 0),i.__decorate([o.property({aliasOf:"messages.auth.signIn"}),r.renderable()],t.prototype,"title",void 0),t=i.__decorate([o.subclass("esri.identity.IdentityModal")],t)}(n)}));