// transform grid
uniform sampler2D u_transformGrid;

// transform grid spacing (one approximation/cell every x/y number of cols and rows)
uniform vec2 u_transformSpacing;

// transform grid size
uniform vec2 u_transformGridSize;

// target image size
uniform vec2 u_targetImageSize;

// source image size
uniform vec2 u_srcImageSize;

vec2 projectPixelLocation(vec2 coords) {
  // pixel index in row/column, corresponds to upperleft corner, e.g. [100, 20]
  vec2 index_image = floor(coords * u_targetImageSize);

  // pixel's corresponding cell index in transform grid
  // each transform cell corresponds to 4 pixels: 6 coefficients from lowerleft triangle followed by 6 coefficients from upperright triangle
  vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
  vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;

  // correspoding position in transform grid cell, cell center coordinates
  vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
  vec2 srcLocation;
  // pixel's corresponding transform cell location, center cell coordinates
  vec2 transform_location = index_transform + oneTransformPixel * 0.5;

  if (pos.s <= pos.t) {
    vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
    vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
    // todo half pixel for pos
    srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
    srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
  } else {
    vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
    vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
    srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
    srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
  }

  // half pixel
  //vec2 halfPixel = 0.5 / u_srcImageSize;

  // transform offsets are edge based, need to convert to center pixel location
  return srcLocation;// + halfPixel;
}
