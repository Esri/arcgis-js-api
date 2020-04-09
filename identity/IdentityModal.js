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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!../nls/common","../core/accessorSupport/decorators","../widgets/Widget","../widgets/support/widget"],(function(t,e,i,n,o,r,s,d){var l="esri-identity-modal",a="esri-identity-modal--open",c="esri-identity-modal--closed",p="esri-identity-modal__title",u="esri-identity-modal__dialog",y="esri-identity-modal__content",h="esri-identity-modal__close-button",_="esri-icon-close";return function(t){function e(e){var i=t.call(this,e)||this;return i.container=document.createElement("div"),i.title=o.auth.signIn,i.content=null,i.open=!1,document.body.appendChild(i.container),i}return i(e,t),e.prototype.render=function(){var t,e=this.id,i=this.open,n=this.content,r=this.title,s=i&&!!n,y=((t={})[a]=s,t[c]=!s,t),b=d.tsx("button",{class:h,"aria-label":o.close,bind:this,onclick:this._close},d.tsx("span",{"aria-hidden":"true",class:_})),v=e+"_title",m=e+"_content",f=r?d.tsx("h1",{id:v,class:p},r):null,x=s?d.tsx("div",{class:u,role:"dialog","aria-labelledby":v,"aria-describedby":m},b,f,this._renderContent(m)):null;return d.tsx("div",{tabIndex:-1,class:this.classes(l,y)},x)},e.prototype._close=function(){this.open=!1},e.prototype._renderContent=function(t){var e=this.content;return"string"==typeof e?d.tsx("div",{class:y,id:t,innerHTML:e}):d.isWidget(e)?d.tsx("div",{class:y,id:t},e.render()):e instanceof HTMLElement?d.tsx("div",{class:y,id:t,bind:e,afterCreate:this._attachToNode}):null},e.prototype._attachToNode=function(t){t.appendChild(this)},n([r.property({readOnly:!0})],e.prototype,"container",void 0),n([d.renderable(),r.property()],e.prototype,"title",void 0),n([d.renderable(),r.property()],e.prototype,"content",void 0),n([d.renderable(),r.property()],e.prototype,"open",void 0),e=n([r.subclass("esri.identity.IdentityModal")],e)}(r.declared(s))}));