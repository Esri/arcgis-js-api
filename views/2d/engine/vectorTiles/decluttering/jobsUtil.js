/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./core","./jobs","./SymbolDeclutterer","./SymbolRepository","./util","../style/StyleDefinition"],(function(t,e,i,o,r,s,y){"use strict";function l(t,l){const n=[],a=new r.SymbolRepository(4096,n,(()=>{const t=new e.VTLUniqueSymbol;return t.show=!1,t.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),t.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),t})),u=new o.SymbolDeclutterer(n,a,((e,o,r)=>new i.CollisionJob(e,o,r,t.styleRepository,t.key.level,0)),((t,e)=>{s.writeOpacityToBuffers(t,e,!1)}),(()=>0),(t=>{const e=l.getStyleLayerByUID(t).getLayoutProperty("visibility");return!e||e.getValue()!==y.Visibility.NONE}));n.push(t),a.add(t),u.setScreenSize(512,512),u.continue(1/0)}t.declutterSingleTile=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
