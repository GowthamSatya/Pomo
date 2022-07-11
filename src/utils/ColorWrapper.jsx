import React, { useState, useContext, createContext, useEffect } from "react"
import { useTheme, useUpdateTheme, ThemeWrapper } from "./ThemeWrapper"

const ColorContext = createContext();
const ColorUpdateContext = createContext();

const generateColorPalette = (darkTheme, color) => {
    const generatedTheme = darkTheme ? {
        themeColor: `${color}`,
        backgroundColor: `bg-${color}-950`,
        iconBgColor: `bg-${color}Alpha-100`,
        mainColor: `${color}-50`,
        mainBtnColor: `bg-${color}Alpha-${color === "red" ? '700' : '600'}`,
    } : {

        themeColor: `${color}`,
        backgroundColor: `bg-${color}-50`,
        iconBgColor: `bg-${color}Alpha-100`,
        mainColor: `${color}-900`,
        mainBtnColor: `bg-${color}Alpha-${color === "red" ? '700' : '600'}`,
    }

    return generatedTheme;
}

export const useColor = () => {
    return useContext(ColorContext);
}

export const useUpdateColor = () => {
    return useContext(ColorUpdateContext)
}

export const ColorWrapper = ({ children }) => {
    const darkTheme = useTheme();
    const [color, setColor] = useState();

    const updateColor = (color) => {
        setColor(generateColorPalette(darkTheme, color));
    }

    return (
        <ThemeWrapper>
            <ColorContext.Provider value={color}>
                <ColorUpdateContext.Provider value={updateColor}>
                    {children}
                </ColorUpdateContext.Provider>
            </ColorContext.Provider>
        </ThemeWrapper>
    )
}