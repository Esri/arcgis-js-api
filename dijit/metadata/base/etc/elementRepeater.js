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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/has","dojo/Deferred","./docUtil","./matchTopNodeUtil","../../../../kernel"],(function(e,t,n,r,l,o,a){var i={_findClonedElement:function(e,n,r,l){var a=null,i=!0;if(n._isGxeElement)if(null!=l?l+="/":l="",l+=n.target,r===l){if(i=!1,o.evaluateXNodeMatch(e,n))return n}else i=!1,0===r.indexOf(l)&&(i=!0);else n._isGxeAttribute?i=!1:n._isGxeDescriptor&&null!=l&&(i=!1);return i&&t.some(n.getChildren(),(function(t){if(a=this._findClonedElement(e,t,r,l))return!0}),this),a},repeatElement:function(e,t,n){var o=new r;if(!t._isGxeElement)return o.resolve(null),o;var a=l.findDescriptorAndPath(t);if(!a.descriptor)return console.error("repeatElement: Unable to locate parent Descriptor for: ",t),o.resolve(null),o;var i=a.descriptor,s=a.path,d=i.newInstance();if(!d)return console.error("repeatElement: Cannot create a new Descriptor was null: ",t),o.resolve(null),o;var c=this._findClonedElement(t,d,a.path,null);return c?(e.adoptElement(c,n),o.resolve(c)):(console.error("repeatElement: Unable to locate new element instance for: ",s,t),o.resolve(null)),o}};return n("extend-esri")&&e.setObject("dijit.metadata.base.etc.elementRepeater",i,a),i}));