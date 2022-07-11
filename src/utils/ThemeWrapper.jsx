import React, { useState, useContext, createContext, useEffect } from "react"

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

const generateColorPalette = (darkTheme, color) => {
    let generatedTheme = {};
    if (darkTheme) {
        if (color === "red") {
            generatedTheme = {
                themeColor: "red",
                backgroundColor: "bg-myred-950",
                iconBgColor: "bg-redAlpha-100",
                mainColor: `red-50`,
                mainBtnColor: `bg-${color}Alpha-${color === "red" ? '700' : '600'}`,
            }
        } else if (color == "green") {
            generatedTheme = {
                themeColor: "green",
                backgroundColor: "bg-mygreen-950",
                iconBgColor: "bg-greenAlpha-100",
                mainColor: `green-50`,
                mainBtnColor: `bg-greenAlpha-${color === "red" ? '700' : '600'}`,
            }
        } else {
            generatedTheme = {
                themeColor: "blue",
                backgroundColor: "bg-myblue-950",
                iconBgColor: "bg-blueAlpha-100",
                mainColor: `blue-50`,
                mainBtnColor: `bg-blueAlpha-${color === "red" ? '700' : '600'}`,
            }
        }
    } else {
        if (color === "red") {
            generatedTheme = {
                themeColor: "red",
                backgroundColor: "bg-myred-50",
                iconBgColor: "bg-redAlpha-100",
                mainColor: `red-900`,
                mainBtnColor: `bg-${color}Alpha-${color === "red" ? '700' : '600'}`,
            }
        } else if (color == "green") {
            generatedTheme = {
                themeColor: "green",
                backgroundColor: "bg-mygreen-50",
                iconBgColor: "bg-greenAlpha-100",
                mainColor: `green-900`,
                mainBtnColor: `bg-greenAlpha-${color === "red" ? '700' : '600'}`,
            }
        } else {
            generatedTheme = {
                themeColor: "blue",
                backgroundColor: "bg-myblue-50",
                iconBgColor: "bg-blueAlpha-100",
                mainColor: `blue-900`,
                mainBtnColor: `bg-blueAlpha-${color === "red" ? '700' : '600'}`,
            }
        }
    }

    return generatedTheme;
}

export const ThemeWrapper = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true);
    const [color, setColor] = useState(generateColorPalette(darkTheme, "red"));

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }

    const updateColor = (color) => {
        setColor(generateColorPalette(darkTheme, color));
    }

    useEffect(() => {
        setColor(generateColorPalette(darkTheme, color.themeColor))
    }, [darkTheme])

    return (
        <>
            <ThemeContext.Provider value={{ darkTheme, toggleTheme, updateColor, color }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}
