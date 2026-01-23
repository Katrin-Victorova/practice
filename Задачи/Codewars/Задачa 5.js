// нарисовать квадтратик, треугольник с помощью звездочек

function getRectangleString(width, height) {
const rn = "\r\n";
const tb = "*".repeat(width) + rn;
const center = (width > 1) ? ("*" + " ".repeat(width - 2) + "*" + rn).repeat(height - 2) : '';
return height > 1 ? (tb + center + tb) : tb.repeat(height);
};