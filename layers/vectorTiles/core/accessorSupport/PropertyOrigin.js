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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){var n;function E(e){switch(e){case"defaults":return n.DEFAULTS;case"service":return n.SERVICE;case"portal-item":return n.PORTAL_ITEM;case"web-scene":return n.WEB_SCENE;case"web-map":return n.WEB_MAP;case"user":return n.USER}}function t(e){switch(e){case n.DEFAULTS:return"defaults";case n.SERVICE:return"service";case n.PORTAL_ITEM:return"portal-item";case n.WEB_SCENE:return"web-scene";case n.WEB_MAP:return"web-map";case n.USER:return"user"}}Object.defineProperty(r,"__esModule",{value:!0}),function(e){e[e.DEFAULTS=0]="DEFAULTS",e[e.COMPUTED=1]="COMPUTED",e[e.SERVICE=2]="SERVICE",e[e.PORTAL_ITEM=3]="PORTAL_ITEM",e[e.WEB_SCENE=4]="WEB_SCENE",e[e.WEB_MAP=5]="WEB_MAP",e[e.USER=6]="USER",e[e.NUM=7]="NUM"}(n=r.OriginId||(r.OriginId={})),r.nameToId=E,r.idToName=t,r.readableNameToId=function(e){return E(e)},r.idToReadableName=function(e){return t(e)},r.writableNameToId=function(e){return E(e)},r.idToWritableName=function(e){return t(e)}}));