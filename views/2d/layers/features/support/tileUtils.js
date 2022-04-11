/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./Tile"],(function(e,o){"use strict";function l(e,l,t){const n=e.tileInfoView.tileInfo.isWrappable,r=i(e.key,l,t,n);return new o.Tile(e.tileInfoView,r)}function i(e,o,l,i){const t=e.clone(),n=1<<t.level,r=t.col+o,c=t.row+l;return i&&r<0?(t.col=r+n,t.world-=1):r>=n?(t.col=r-n,t.world+=1):t.col=r,t.row=c,t}e.getPow2NeighborKey=i,e.getPow2NeighborTile=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
