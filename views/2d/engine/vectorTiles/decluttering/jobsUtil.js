/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./core","./util","./jobs","./SymbolDeclutterer","./SymbolRepository"],(function(e,t,o,r,i,s){"use strict";e.declutterSingleTile=function(e,n){const y=[],l=new s.SymbolRepository(4096,y,(()=>{const e=new t.VTLUniqueSymbol;return e.show=!1,e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e})),u=new i.SymbolDeclutterer(y,l,((t,o,i)=>new r.CollisionJob(t,o,i,e.styleRepository,e.key.level,0)),((e,t)=>{o.writeOpacityToBuffers(e,t,!1)}),(()=>0),(e=>{const t=n.getStyleLayerByUID(e).getLayoutProperty("visibility");return!t||"none"!==t.getValue()}));y.push(e),l.add(e),u.setScreenSize(512,512),u.continue(1/0)},Object.defineProperty(e,"__esModule",{value:!0})}));
