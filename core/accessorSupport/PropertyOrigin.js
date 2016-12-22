// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function n(e){switch(e){case"defaults":return c.DEFAULTS;case"service":return c.SERVICE;case"portal-item":return c.PORTAL_ITEM;case"web-scene":return c.WEB_SCENE;case"web-map":return c.WEB_MAP;case"user":return c.USER}}function E(e){switch(e){case c.DEFAULTS:return"defaults";case c.SERVICE:return"service";case c.PORTAL_ITEM:return"portal-item";case c.WEB_SCENE:return"web-scene";case c.WEB_MAP:return"web-map";case c.USER:return"user"}}function t(e){return n(e)}function a(e){return E(e)}function u(e){return n(e)}function i(e){return E(e)}!function(e){e[e.DEFAULTS=0]="DEFAULTS",e[e.COMPUTED=1]="COMPUTED",e[e.SERVICE=2]="SERVICE",e[e.PORTAL_ITEM=3]="PORTAL_ITEM",e[e.WEB_SCENE=4]="WEB_SCENE",e[e.WEB_MAP=5]="WEB_MAP",e[e.USER=6]="USER",e[e.NUM=7]="NUM"}(r.OriginId||(r.OriginId={}));var c=r.OriginId;r.nameToId=n,r.idToName=E,r.readableNameToId=t,r.idToReadableName=a,r.writableNameToId=u,r.idToWritableName=i});