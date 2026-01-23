// решить где фигура ровна кубам
const cubeChecker = () => {
  if(volume <= 0 || side < 0) 
    return Math.cbrt(volume) === side;
};