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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../kernel","dojo/_base/kernel"],function(e,t,o,s){function n(){var e=t.storage.session.getItem(l(f.recent));return e&&JSON.parse(e)}function r(){return JSON.parse(t.storage.local.getItem(l(f.custom)))}function a(e){t.storage.session.setItem(l(f.recent),JSON.stringify(e))}function i(){var e=t.storage.local.getItem(l(f.version)),o=u();e!==o&&(t.storage.local.setItem(l(f.version),o),c())}function c(){t.storage.session.removeItem(l(f.recent))}function l(e){return m+"/"+e}function u(){return o.version+"|"+s.locale}Object.defineProperty(t,"__esModule",{value:!0});var m="symbol-storage/symbol",f={"default":"default",recent:"recent",custom:"custom",types:"types",version:"version"};t.storage={session:sessionStorage,local:localStorage},t.loadRecentSymbolItem=n,t.loadCustomItems=r,t.saveRecentItem=a,t.init=i,t.empty=c,t.keyify=l});