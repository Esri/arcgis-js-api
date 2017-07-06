// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","./xmlUtil","../../../../kernel"],function(e,t,i,a,l,r){var n=e(null,{nl:"\r\n",tb:"	",xmlHeader:'<?xml version="1.0" encoding="UTF-8"?>',constructor:function(e){t.mixin(this,e)},generate:function(e,t,i,a){var l={ignoreOptionallyOff:!1,validationTracker:i},r={gxeDocument:e,transformer:a},n=this._collect(t,null,l),s=this._walk(n,!0,r);return i&&i.whenComplete(),s},_checkTarget:function(e,i,a){var l,r="",n="",s=i.widget,u=s.target;e.transformer&&(u=e.transformer.checkTarget(s,u));var o=[u];return s.inputWidget&&s.inputWidget.subTarget&&(l=t.trim(s.inputWidget.subTarget),l.length>0&&(o.push(l),u=l,r=a+"<"+o[0]+">",n=a+"</"+o[0]+">")),{aNames:o,sBegin:r,sEnd:n,sName:u}},_collect:function(e,t,a){if(e.ignoreContent)return null;var l,r,n,s=!1,u=!1;return e._isGxeElement?(u=e._isOptionallyOff,e.multiplicityHeader&&e.multiplicityHeader.useTabs&&(u=e.multiplicityHeader._isOptionallyOff)):u=e._isGxeAttribute?e._isOptionallyOff:e._isOptionallyOff,e._isGxeElement?(a.ignoreOptionallyOff||!u)&&(r={isAttribute:!1,widget:e,depth:0,xvalue:null,serialize:e.serialize,references:[],attributeRefs:[],elementRefs:[]},r.xvalue=e.checkXmlValue(),e.isDocumentTitle&&(a.validationTracker.documentTitle=r.xvalue),n=e.validateValue(a.validationTracker),t&&(r.depth=t.depth+1,t.references.push(r),t.elementRefs.push(r)),t=r,s=!0):e._isGxeAttribute?(a.ignoreOptionallyOff||!u)&&(l={isAttribute:!0,widget:e,xvalue:null,serialize:e.serialize},l.xvalue=e.checkXmlValue(),e.isDocumentTitle&&(a.validationTracker.documentTitle=l.xvalue),n=e.validateValue(a.validationTracker),t&&(t.references.push(l),t.attributeRefs.push(l),l.serialize&&e.isIsoCodeListValue?(t.xvalue=l.xvalue,null===l.xvalue&&(t.serialize=!1)):!l.serialize&&e.isIsoCodeListValue&&(t.serialize=!1))):(a.ignoreOptionallyOff||!u)&&(s=!0),s&&(i.forEach(e.getChildren(),function(e){this._collect(e,t,a)},this),e.validateConditionals&&e.validateConditionals(a.validationTracker)),t},_renderNamespaces:function(e,t,a,l){if(!t)return e;var r=a.getNamespaces();return l.transformer&&(r=l.transformer.toDocumentType.getNamespaces()),i.forEach(r,function(t){t.prefix&&t.uri&&(e+=" xmlns:"+t.prefix+'="'+t.uri+'"')}),e},_walk:function(e,t,a){if(!e.serialize)return"";var r,n,s=function(e,t,i,a,l,r,n){var s=null;return"TopicCatCd@value"===i?s=e+a+"<TopicCatCd value='"+r+"'/>"+t:(s=a+"<"+i+l,0===r.length&&0===n.length?s+="/>":(s+=">",r.length>0&&(s+=r),n.length>0&&(s+=n+a),s+="</"+i+">"),s=e+s+t)},u="",o="",c=this.nl,f="",h=[];for(r=0;r<e.depth;r++)c+=this.tb;t&&(u=this._renderNamespaces(u,t,a.gxeDocument,a)),e.serialize&&null!==e.xvalue&&(e.xvalue.push?i.forEach(e.xvalue,function(e){h.push(l.escape(e))},this):f=l.escape(e.xvalue)),i.forEach(e.attributeRefs,function(e){e.serialize&&null!==e.xvalue&&(n=l.escape(e.xvalue),u+=" "+e.widget.target.replace("@","")+'="'+n+'"')},this),i.forEach(e.elementRefs,function(e){var t=this._walk(e,!1,a);null!==t&&t.length>0&&(o+=t)},this);var d=0===u.length&&0===f.length&&0===h.length&&0===o.length;if(d&&!e.widget.serializeIfEmpty)return null;var g=this._checkTarget(a,e,c),m=g.sBegin,p=g.sEnd,v=g.sName;for(r=0;r<g.aNames.length-1;r++)c+=this.tb;var x=null;return d&&e.widget.serializeIfEmpty?x=m+c+"<"+v+"/>"+p:0===h.length?x=s(m,p,v,c,u,f,o):(x="",i.forEach(h,function(e){x+=s(m,p,v,c,u,e,o)})),t&&(x=this.xmlHeader+x),x}});return a("extend-esri")&&t.setObject("dijit.metadata.base.xml.XmlGenerator",n,r),n});