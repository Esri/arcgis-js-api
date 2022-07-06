/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Effect as e}from"./Effect.js";import{TextureSamplingMode as t}from"../../../../webgl/enums.js";class r extends e{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:r,height:s}=e.getViewport(),o=t.getFbos(r,s).effect0;e.bindFramebuffer(o),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,r){const{context:s,painter:o}=e,n=o.getPostProcessingEffects(r),c=s.getBoundFramebufferObject();for(const{postProcessingEffect:t,effect:f}of n)t.draw(e,c,f);s.bindFramebuffer(this._prev),s.setStencilTestEnabled(!1),o.blitTexture(s,c.colorTexture,t.NEAREST),s.setStencilTestEnabled(!0)}}export{r as FeatureEffect};
