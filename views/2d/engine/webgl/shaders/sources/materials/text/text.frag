precision mediump float;

#include <materials/text/common.glsl>

uniform lowp sampler2D u_texture;

void main()
{
  // read the distance from the SDF texture

  // The distance texture is encoded with a "cutoff" value that shifts the encoded distance
  // (for encoding negative values). We need to unshift this to get the actual distance
  // https://github.com/mapbox/fontnik/blob/master/lib/sdf.js#L220
  float SDF_CUTOFF = (2.0 / 8.0);
  float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF; // below this value, outside of glyph
  
  lowp float dist = texture2D(u_texture, v_tex).a;

  // Below `edge` distance, we are outside the glyph. 
  // If we have an outline, we need to descrease the edge threshold (thus increasing glyph size); 
  // We cap this to 0.25 to prevent this from becomming negative / running into the glyph boundaries
  mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;

#ifdef HIGHLIGHT
  edge /= 2.0;
#endif

  lowp float aa = v_antialiasingWidth;
    
  // Use smoothstep to interpolate between edge +- v_antialiasingWidth for smooth glyph edge
  lowp float alpha = smoothstep(edge - aa, edge + aa, dist);

  gl_FragColor = alpha * v_color * v_opacity;

#ifdef ID
  if (gl_FragColor.a < 1.0 / 255.0) {
    discard;
  }
  gl_FragColor = v_id;
#endif // ID
}
