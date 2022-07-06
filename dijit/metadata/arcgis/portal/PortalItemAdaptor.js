// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/Deferred","../../context/GxeAdaptor","../../../../kernel","../../../../request"],(function(t,e,n,a,o,r,l,i){var s=t([r],{itemRequiresRefresh:!1,portalItemContext:null,postCreate:function(){this.inherited(arguments)},afterEditDocumentLoad:function(t,e,n,a){var o,r=this.getItemContext(),l=r.getItem();if(l&&r.getAutoPullItem()&&!a&&(!e||e&&n))try{(o=t.documentType.newPortalItemTransformer(t))&&o.pull(t,l)}catch(t){console.error(t)}},afterViewDocumentLoad:function(t,e){},deleteMetadata:function(){var t;return this.getItemContext().getAllowDeleteMetadata()?this.writeXml(null):((t=new o).reject("Metadata Adaptor: Delete metadata in not allowed."),t)},getAllowEditMetadata:function(){return this.getItemContext().getAllowEditMetadata()},getAllowDeleteMetadata:function(){return this.getItemContext().getAllowDeleteMetadata()},getAllowPullItem:function(){return this.getItemContext().getAllowPullItem()},getAllowPushToItem:function(){return this.getItemContext().getAllowPushToItem()},getOriginalXml:function(){return this.getItemContext().getOriginalXml()},pullItem:function(t){var e,n=new o,a=this.getItemContext(),r=a.getItem();if(r&&a.getAllowPullItem())try{(e=t.documentType.newPortalItemTransformer(t))&&e.pull(t,r)}catch(t){console.error(t)}return n.resolve(),n},saveXml:function(t,n,a){var r=new o,l=this.getItemContext(),i=l.getItem();if(!l.getAllowEditMetadata())return r.reject("Metadata Adaptor: Write XML in not allowed."),r;var s,u=null;if(a&&l.getAllowPushToItem()&&i&&window.FormData)try{(s=t.documentType.newPortalItemTransformer(t))&&(u=s.generatePush(t,i))}catch(t){u=null,console.error(t)}return null===u?this.writeXml(n):(this.writeXml(n).then(e.hitch(this,(function(){this.updateItem(u).then(e.hitch(this,(function(){this.itemRequiresRefresh=!0,r.resolve()})),e.hitch(this,(function(t){console.error(t),r.resolve()})))})),e.hitch(this,(function(t){r.reject(t)}))),r)},getItemContext:function(){return this.portalItemContext},makeMultiPartFormData:function(t){if(!window.FormData)return null;var e,n=new FormData,a=null;for(e in t)t.hasOwnProperty(e)&&(a=t[e],"snippet"!==e&&"description"!==e&&"text"!==e||null==a&&(a=""),n.append(e,a));return n},readXml:function(t){var e=new o,n=this.getItemContext(),a=n.getRestBaseUrl(),r=n.getToken(),l=n.getItemId();if(null===a)return e.reject("Metadata Adaptor: Unable to read XML, no restBaseUrl"),e;var s=a+"content/items/";s+=encodeURIComponent(l),s+="/info/metadata/metadata.xml";var u={};null!==r&&(u.token=r);var m={url:s,content:u,handleAs:t,preventCache:!0};return"json"===t&&(m.callbackParamName="callback"),i(m,{usePost:!0}).then((function(t){e.resolve(t)}),(function(t){e.resolve(null)})),e},updateItem:function(t){var e,n=this.getItemContext(),a=n.getRestBaseUrl(),r=n.getToken(),l=n.getItemId(),s=n.getItemOwner(),u=n.getItemFolderId();t.f="json",null!==r&&(t.token=r);var m=this.makeMultiPartFormData(t);if(!n.getAllowPushToItem())return(e=new o).reject("Metadata Adaptor: Update portal item is not allowed."),e;if(null===m)return(e=new o).reject("Metadata Adaptor: Unable to update portal item, FormData is not supported on this browser."),e;if(null===a)return(e=new o).reject("Metadata Adaptor: Unable to update portal item, no restBaseUrl"),e;var d=a+"content/users/";d+=encodeURIComponent(s),null!=u&&u.length>0&&(d+="/"+encodeURIComponent(u)),d+="/items/"+encodeURIComponent(l)+"/update";return i({url:d,form:m,handleAs:"json",callbackParamName:"callback",preventCache:!0},{usePost:!0})},writeXml:function(t){var n,a=this.getItemContext(),r=a.getRestBaseUrl(),l=a.getToken(),s=a.getItemId(),u=a.getItemOwner(),m=a.getItemFolderId();if(!a.getAllowEditMetadata())return(n=new o).reject("Metadata Adaptor: Write XML in not allowed."),n;if(null===r)return(n=new o).reject("Metadata Adaptor: Unable to write XML, no restBaseUrl"),n;var d=r+"content/users/";d+=encodeURIComponent(u),null!=m&&m.length>0&&(d+="/"+encodeURIComponent(m)),d+="/items/"+encodeURIComponent(s),d+=null===t?"/deleteinfo":"/update";var c="387F8C2A-CFAB-443C-863B-B180E79B05F4",h=[];h.push("--"+c,'Content-Disposition: form-data; name="f"',"","json"),null!=l&&h.push("--"+c,'Content-Disposition: form-data; name="token"',"",l),null===t?h.push("--"+c,'Content-Disposition: form-data; name="infoFile"',"","metadata/metadata.xml"):(h.push("--"+c,'Content-Disposition: form-data; name="overwrite"',"","true"),h.push("--"+c,'Content-Disposition: form-data; name="metadata"; filename="metadata.xml"',"Content-Type: text/xml","",t)),h.push("--"+c+"--","");var p={url:d,handleAs:"json",callbackParamName:"callback",preventCache:!0,headers:{"Content-Type":"multipart/form-data; boundary="+c},postData:h.join("\r\n")};return this._started||this.startup(),n=new o,i(p,{usePost:!0}).then(e.hitch(this,(function(e){n.resolve(e),null===t?this.emit("metadata-delete",{response:e}):this.emit("metadata-save",{response:e})})),e.hitch(this,(function(t){n.reject(t)}))),n}});return a("extend-esri")&&e.setObject("dijit.metadata.arcgis.portal.PortalItemAdaptor",s,l),s}));