import { PropsWithChildren } from 'react'
import { App, ConfigProvider, theme } from 'antd'


import 'antd/dist/reset.css'

const { darkAlgorithm, defaultAlgorithm } = theme
export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const isDark = false
    return (
        <ConfigProvider
            theme={{
                components: {
                    Typography: {
                        fontSizeHeading1: 24,
                        fontSizeHeading2: 22,
                        fontSizeHeading3: 20,
                        fontSizeHeading4: 18,
                        titleMarginBottom: 24,
                        colorText: 'gray',
                        colorTextHeading: '#000',
                    },
                },

                token: {
                    // borderRadius: 15,
                    controlItemBgHover: '#FFFFFF',
                    colorPrimary: '#336AEA',
                    colorBgSolid: '#FFFFFF',


                // fontFamily: "'Roboto', sans-serif", 

            },

                algorithm: isDark ?darkAlgorithm:defaultAlgorithm,
            }}
        >
    { children }
        </ConfigProvider >
    )
}
