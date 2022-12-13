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

define(["dojo/_base/lang","dojo/_base/array","dojo/has","../xml/xmlUtil","../xml/XmlFlattener","../../../../kernel"],(function(t,e,n,a,o,i){var u={evaluateDomMatch:function(t,n,a){if(!this.hasMatchConditions(t))return n;var i=new o,u=[],r=t.matchTopNode.length;return e.forEach(n,(function(n){var o=0;e.forEach(t.matchTopNode,(function(e){var u=i.flattenNode(n,a);this._evaluateDomNode(t,n,u,e)&&o++}),this),o===r&&u.push(n)}),this),u},evaluateXNodeMatch:function(t,n){if(!this.hasMatchConditions(t))return!0;var a=0,o=t.matchTopNode.length;return e.forEach(t.matchTopNode,(function(t){var e=this._findXNode(n,t.qPath,null);e?this._evaluateXNode(e,t)&&a++:"mustNot"===t.qMode&&a++}),this),a===o},hasMatchConditions:function(t){return!!(t.matchTopNode&&t.matchTopNode.push&&t.matchTopNode.length>0)},_evaluateDomNode:function(t,e,n,a){var o=null,i=null,u=t.target+"/"+a.qPath;if(!a.qValue){var r=u in n;return"mustNot"!==a.qMode?r:!r}if(u in n)(i=n[u])&&i.length>0&&(o=i[0]);else if("mustNot"!==a.qMode)return!1;var l=null===a.qValue||o===a.qValue;return"mustNot"===a.qMode?!l:l},_evaluateXNode:function(t,e){var n=t.getXmlValue(),a=null===e.qValue||n===e.qValue;return"mustNot"===e.qMode?!a:a},_findXNode:function(t,n,a){var o=null,i=!0;if(t._isGxeElement)if(null===a)a="";else{if(a.length>0&&(a+="/"),a+=t.target,n===a)return t;i=!1,0===n.indexOf(a)&&(i=!0)}else if(t._isGxeAttribute&&(i=!1,null!==a&&(a.length>0&&(a+="/"),a+="@"+t.target,n===a)))return t;return i&&e.some(t.getChildren(),(function(t){if(o=this._findXNode(t,n,a))return!0}),this),o}};return n("extend-esri")&&t.setObject("dijit.metadata.base.etc.matchTopNodeUtil",u,i),u}));