import React from "react";
import { FC, useContext, useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { MoonFilledIcon, SunFilledIcon } from "./Icons";

const ThemeContext = React.createContext({
  theme: "light",
  setTheme: (theme: string) => {},
});

const useTheme = () => useContext(ThemeContext);

const useIsSSR = () => {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return isSSR;
};

export interface ThemeSwitchProps {
  className?: string;
  classNames?: {
    base?: string;
    wrapper?: string;
  };
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const isSelected = theme === "light" || isSSR;

  return (
    <div
      className={clsx(
        "px-px transition-opacity hover:opacity-80 cursor-pointer",
        className,
        classNames?.base
      )}
      onClick={onChange}
    >
      <VisuallyHidden>
        <input type="checkbox" checked={isSelected} readOnly />
      </VisuallyHidden>
      <div
        className={clsx(
          [
            "w-auto h-auto",
            "bg-transparent",
            "rounded-lg",
            "flex items-center justify-center",
            "group-data-[selected=true]:bg-transparent",
            "!text-default-500",
            "pt-px",
            "px-0",
            "mx-0",
          ],
          classNames?.wrapper
        )}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon size={24} />
        ) : (
          <MoonFilledIcon size={24} />
        )}
      </div>
    </div>
  );
};
