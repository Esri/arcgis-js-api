/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./Tile"],(function(e,o){"use strict";function l(e,l,n){const t=e.tileInfoView.tileInfo.isWrappable,r=i(e.key,l,n,t);return new o.Tile(e.tileInfoView,r)}function i(e,o,l,i){const n=e.clone(),t=1<<n.level,r=n.col+o,c=n.row+l;return i&&r<0?(n.col=r+t,n.world-=1):r>=t?(n.col=r-t,n.world+=1):n.col=r,n.row=c,n}e.getPow2NeighborKey=i,e.getPow2NeighborTile=l,Object.defineProperty(e,"__esModule",{value:!0})}));
