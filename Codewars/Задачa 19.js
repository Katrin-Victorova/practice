// уточнить будет ли достаточно места включая водителя
function enough(cap, on, wait) {
  // console.log(cap, on, wait); анализ задачи
  const plays = on + wait - cap;
  return plays < 0 ? 0 : plays;
}