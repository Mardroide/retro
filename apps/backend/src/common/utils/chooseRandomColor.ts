import { avaibleColors } from '../constants/constants';

const selectedColors: string[] = [];

export const chooseRandomColor = () => {
  const colors = Object.values(avaibleColors).filter(
    (color) => !selectedColors.includes(color),
  );
  const random = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[random];
  selectedColors.push(selectedColor);
  const colorsLeft = Object.keys(avaibleColors).filter(
    (el) => el !== selectedColor,
  );
  return { color: selectedColor, colorsLeft };
};
