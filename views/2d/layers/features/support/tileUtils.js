/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./Tile"],(function(e,o){"use strict";function l(e,o,l){const n=e.clone(),t=1<<n.level,r=n.col+o,c=n.row+l;return r<0&&r!==n.col?(n.col=r+t,n.world-=1):r>=t?(n.col=r-t,n.world+=1):n.col=r,n.row=c,n}e.getPow2NeighborKey=l,e.getPow2NeighborTile=function(e,n,t){const r=l(e.key,n,t);return new o.Tile(e.tileInfoView,r)},Object.defineProperty(e,"__esModule",{value:!0})}));
