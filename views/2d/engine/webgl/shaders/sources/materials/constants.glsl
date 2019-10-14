const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float SIGNED_BYTE_TO_UNSIGNED = 128.0;

// markers
const float SOFT_EDGE_RATIO = 1.0; // use blur here if needed

// lines
const float THIN_LINE_WIDTH_FACTOR = 1.1;

// meaning that a 2 pixels line width is considered a thin line
const float THIN_LINE_HALF_WIDTH = 1.0;

// labels 
const float OFFSET_PRECISION = 1.0 / 8.0;
const float OUTLINE_SCALE = 1.0 / 5.0;
const float SDF_FONT_SIZE = 24.0;

// maximum SDF distance of 8 pixels represent the distance values that range from -2 inside the
// geometry to 6 on the outside. 6 is actually the maximum distance outside the glyph, therefore
// it is the limitation of the halo which is 1/4 of the geometry size.
const float MAX_SDF_DISTANCE = 8.0;

const float PLACEMENT_PADDING = 8.0;

const float EPSILON = 0.0000001; 

const int MAX_FILTER_COUNT = 2;

const int ATTR_VV_SIZE = 0;
const int ATTR_VV_COLOR = 1;
const int ATTR_VV_OPACITY = 2;
const int ATTR_VV_ROTATION = 3;

const highp float NAN_MAGIC_NUMBER = 1e-30;

