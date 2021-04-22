// esri.symbols.support
import { RectDescriptor } from "esri/../../../symbols/support/interfaces";
import {
  generateFillAttributes,
  generateStrokeAttributes,
  renderDef,
  renderShape,
  getTransformMatrix,
  computeBBox,
  getBoundingBox,
  BBox
} from "esri/../../../symbols/support/svgUtils";

// esri.widgets
import { RelationshipRampElement } from "esri/../../interfaces";

// esri.widgets.support
import { VNode } from "esri/../../support/interfaces";
import { classes, tsx } from "esri/../../support/widget";

const svgNS = "http://www.w3.org/2000/svg";
const CSS = {
  // relationship diamond
  diamondContainer: "esri-relationship-ramp--diamond__container",
  diamondLeftCol: "esri-relationship-ramp--diamond__left-column",
  diamondRightCol: "esri-relationship-ramp--diamond__right-column",
  diamondMidCol: "esri-relationship-ramp--diamond__middle-column",
  diamondMidColLabel: "esri-relationship-ramp--diamond__middle-column--label",
  diamondMidColRamp: "esri-relationship-ramp--diamond__middle-column--ramp",
  // relationship square
  squareTable: "esri-relationship-ramp--square__table",
  squareTableRow: "esri-relationship-ramp--square__table-row",
  squareTableCell: "esri-relationship-ramp--square__table-cell",
  squareTableLabel: "esri-relationship-ramp--square__table-label",
  squareTableLabelLeftBottom: "esri-relationship-ramp--square__table-label--left-bottom",
  squareTableLabelRightBottom: "esri-relationship-ramp--square__table-label--right-bottom",
  squareTableLabelLeftTop: "esri-relationship-ramp--square__table-label--left-top",
  squareTableLabelRightTop: "esri-relationship-ramp--square__table-label--right-top"
};

export function renderRelationshipRamp(
  legendElement: RelationshipRampElement,
  id: string,
  opacity: number
): VNode {
  const { focus, labels } = legendElement;
  const isDiamond = !!focus;
  const rampDiv = renderRamp(legendElement, id, opacity);

  if (isDiamond) {
    return (
      <div class={CSS.diamondContainer}>
        <div class={CSS.diamondLeftCol}>{labels.left}</div>
        <div class={CSS.diamondMidCol}>
          <div class={CSS.diamondMidColLabel}>{labels.top}</div>
          {rampDiv}
          <div class={CSS.diamondMidColLabel}>{labels.bottom}</div>
        </div>
        <div class={CSS.diamondRightCol}>{labels.right}</div>
      </div>
    );
  }

  return (
    <div class={CSS.squareTable}>
      <div class={CSS.squareTableRow}>
        <div
          class={classes(
            CSS.squareTableCell,
            CSS.squareTableLabel,
            CSS.squareTableLabelRightBottom
          )}
        >
          {labels.left}
        </div>
        <div class={CSS.squareTableCell} />
        <div
          class={classes(CSS.squareTableCell, CSS.squareTableLabel, CSS.squareTableLabelLeftBottom)}
        >
          {labels.top}
        </div>
      </div>
      <div class={CSS.squareTableRow}>
        <div class={CSS.squareTableCell} />
        {rampDiv}
        <div class={CSS.squareTableCell} />
      </div>
      <div class={CSS.squareTableRow}>
        <div
          class={classes(CSS.squareTableCell, CSS.squareTableLabel, CSS.squareTableLabelRightTop)}
        >
          {labels.bottom}
        </div>
        <div class={CSS.squareTableCell} />
        <div
          class={classes(CSS.squareTableCell, CSS.squareTableLabel, CSS.squareTableLabelLeftTop)}
        >
          {labels.right}
        </div>
      </div>
    </div>
  );
}

function getLineMarkers(
  side: "left" | "right",
  focus: string,
  id: string
): { markerStart: string; markerEnd: string } {
  const startId = `${id}_arrowStart`;
  const endId = `${id}_arrowEnd`;
  const isLeftSide = side === "left";
  const result: { markerStart: string; markerEnd: string } = { markerStart: null, markerEnd: null };

  switch (focus) {
    case "HL":
      if (isLeftSide) {
        result.markerStart = `url(#${endId})`;
      } else {
        result.markerEnd = `url(#${startId})`;
      }
      break;
    case "LL":
      result.markerStart = `url(#${endId})`;
      break;
    case "LH":
      if (isLeftSide) {
        result.markerEnd = `url(#${startId})`;
      } else {
        result.markerStart = `url(#${endId})`;
      }
      break;
    default:
      result.markerEnd = `url(#${startId})`;
      break;
  }

  return result;
}

function renderRamp(
  legendElement: RelationshipRampElement,
  id: string,
  opacity: number,
  size: number = 60
): VNode {
  const { focus, numClasses, colors, rotation } = legendElement;
  const isDiamond = !!focus;
  const surfaceSize = Math.sqrt(size ** 2 + size ** 2) + (isDiamond ? 0 : 5); // diagonal length + 5px padding for arrows
  let opacityStyle: string = null;

  if (opacity != null) {
    opacityStyle = `opacity: ${opacity}`;
  }

  const defs: VNode[] = [];
  const squares: VNode[] = [];
  const bboxes: BBox[] = [];
  const groupSize = size || 75;
  const cellSize = groupSize / numClasses;

  for (let i = 0; i < numClasses; i++) {
    const y = i * cellSize;

    for (let j = 0; j < numClasses; j++) {
      const x = j * cellSize;

      const fillAttrs = generateFillAttributes(colors[i][j]);
      const strokeAttrs = generateStrokeAttributes(null);
      const shape: RectDescriptor = {
        type: "rect",
        x,
        y,
        width: cellSize,
        height: cellSize
      };

      defs.push(renderDef(fillAttrs));
      squares.push(renderShape(shape, fillAttrs.fill, strokeAttrs, null));
      bboxes.push(getBoundingBox(shape));
    }
  }

  const leftPaddingX = 10;
  const leftPaddingY = 15;
  const rightPaddingX = 15;
  const rightPaddingY = 10;

  let svgStyle: string = null;

  if (!isDiamond) {
    svgStyle = "margin: -15px -15px -18px -15px";
  }

  const leftMarkers = getLineMarkers("left", focus, id);
  const rightMarkers = getLineMarkers("right", focus, id);

  const bbox = computeBBox(bboxes);
  const rectMatrix = getTransformMatrix(bbox, surfaceSize, surfaceSize, 0, false, rotation, false);
  const arrowMatrix = getTransformMatrix(
    bbox,
    surfaceSize,
    surfaceSize,
    0,
    false,
    isDiamond ? -45 : null,
    false
  );

  return (
    <div style={opacityStyle} class={isDiamond ? CSS.diamondMidColRamp : CSS.squareTableCell}>
      <svg xmlns={svgNS} width={surfaceSize} height={surfaceSize} style={svgStyle}>
        <defs>
          <marker
            id={`${id}_arrowStart`}
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            markerUnits="strokeWidth"
            orient="auto"
          >
            <polyline points="0,0 5,5 0,10" fill="none" stroke="#555555" stroke-width="1" />
          </marker>
          <marker
            id={`${id}_arrowEnd`}
            markerWidth="10"
            markerHeight="10"
            refX="0"
            refY="5"
            markerUnits="strokeWidth"
            orient="auto"
          >
            <polyline points="5,0 0,5 5,10" fill="none" stroke="#555555" stroke-width="1" />
          </marker>
          {defs}
        </defs>
        <g transform={rectMatrix}>{squares}</g>
        <g transform={arrowMatrix}>
          <line
            fill="none"
            stroke="#555555"
            stroke-width="1"
            marker-start={leftMarkers.markerStart}
            marker-end={leftMarkers.markerEnd}
            x1={-leftPaddingX}
            y1={size - leftPaddingY}
            x2={-leftPaddingX}
            y2={leftPaddingY}
          />
          <line
            fill="none"
            stroke="#555555"
            stroke-width="1"
            marker-start={rightMarkers.markerStart}
            marker-end={rightMarkers.markerEnd}
            x1={rightPaddingX}
            y1={size + rightPaddingY}
            x2={size - rightPaddingX}
            y2={size + rightPaddingY}
          />
        </g>
      </svg>
    </div>
  );
}
