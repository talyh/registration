import { useEffect } from "react";
import colors from "../../../colors";

export const useCustomStyleVariables = () => {
  useEffect(() => {
    const injectStyleVariables = () => {
      const root = document.documentElement;
      root.style.setProperty(
        "--headerBackground",
        colors.datePicker.calendar.header.background
      );
      root.style.setProperty(
        "--headerText",
        colors.datePicker.calendar.header.text
      );
      root.style.setProperty(
        "--selectedBackground",
        colors.datePicker.calendar.selected.background
      );
      root.style.setProperty(
        "--selectedText",
        colors.datePicker.calendar.selected.text
      );
      root.style.setProperty(
        "--inputBackground",
        colors.datePicker.input.background
      );
    };

    injectStyleVariables();
  }, []);
};
