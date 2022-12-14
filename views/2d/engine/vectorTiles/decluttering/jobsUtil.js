/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./core","./jobs","./SymbolDeclutterer","./SymbolRepository","./util","../style/StyleDefinition"],(function(e,t,i,o,r,s,l){"use strict";function y(e,y){const n=[],u=new r.SymbolRepository(4096,n,(()=>{const e=new t.VTLUniqueSymbol;return e.show=!1,e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e})),a=new o.SymbolDeclutterer(n,u,((t,o,r)=>new i.CollisionJob(t,o,r,e.styleRepository,e.key.level,0)),((e,t)=>{s.writeOpacityToBuffers(e,t,!1)}),(()=>0),(e=>{const t=y.getStyleLayerByUID(e).getLayoutProperty("visibility");return!t||t.getValue()!==l.Visibility.NONE}));n.push(e),u.add(e),a.setScreenSize(512,512),a.continue(1/0)}e.declutterSingleTile=y,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
