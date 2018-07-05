// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/query","dijit/registry","dojo/has","../../../../kernel"],function(e,t,n,r,i,a){var o={cleanHtml:function(e){if(void 0===e||null===e)return null;e=e.replace(/<\s*script[^>]*>((.|\s)*?)<\\?\/\s*script\s*>/gi,""),e=e.replace(/<\s*script\b([^<>]|\s)*>?/gi,""),e=e.replace(/<[^>]*=(\s|)*[("|')]javascript:[^$1][(\s|.)]*[$1][^>]*>/gi,""),e=e.replace(/<\s*iframe[^>]*>((.|\s)*?)<\\?\/\s*iframe\s*>/gi,""),e=e.replace(/<!--(.|\s){1,}?-->/g,"");var n=["script","iframe","embed","object","applet","html","head","title","meta","link","style","body","base","basefont","canvas","svg","input","button","select","dialog","img","audio","video","figure"];return t.forEach(n,function(t){var n=new RegExp("<\\s*"+t+"[^>]*>","igm"),r=new RegExp("<\\\\?\\/\\s*"+t+"\\s*>","igm");e=e.replace(n,""),e=e.replace(r,"")}),e=e.replace("_self","_blank"),e=e.replace("_parent","_blank"),e=e.replace("_top","_blank")},ensureVisibility:function(e){if(e)for(var t=e,n=e.getParent();n;)n._isGxeTabs?n.ensureActiveTab(t):n._isGxeMultiplicityHeader&&n.useTabs&&n.ensureActiveTab(t),t=n,n=n.getParent()},findElementChoice:function(e,t){for(var n,r=e,i=e.getParent();i;){if(i._isGxeElementChoice)return t&&(i.ensureActiveTab(r),(n=i.getParent())&&n.toggleContent&&n.toggleContent(!0)),i;r=i,i=i.getParent()}return null},findDescriptor:function(e){for(var t=e.getParent();t;){if(t._isGxeDescriptor)return t;t=t.getParent()}return null},findDescriptorAndPath:function(e){var t={descriptor:null,path:""};e._isGxeNode&&(t.path=""+e.target);for(var n=e.getParent();n;){if(n._isGxeElement&&(t.path=n.target+"/"+t.path),n._isGxeDescriptor){t.descriptor=n;break}n=n.getParent()}return t},findGxeContext:function(e){if(e.gxeContext)return e.gxeContext;for(var t=e.getParent();t;){if(t.gxeContext)return t.gxeContext;t=t.getParent()}return null},findGxeDocument:function(e){if(e.gxeDocument)return e.gxeDocument;for(var t=this.getParent();t;){if(t.gxeDocument)return t.gxeDocument;t=t.getParent()}return null},findInputWidget:function(e,t){var i,a=n("[data-gxe-path='"+e+"']",t);return a&&1===a.length&&(i=r.byNode(a[0]))?i.inputWidget:null},setI18nNodeText:function(e,t){void 0===t&&(t=null),e.innerHTML="",null!==t&&e.appendChild(document.createTextNode(t))},setNodeText:function(e,t){void 0===t&&(t=null),e.innerHTML="",null!==t&&e.appendChild(document.createTextNode(t))}};return i("extend-esri")&&e.setObject("dijit.metadata.base.etc.docUtil",o,a),o});