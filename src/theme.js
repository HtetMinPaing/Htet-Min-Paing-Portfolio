// theme.js
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    colors: {
        brand: {
            100: "#4d5061", // Primary color
            200: "#30323d",
        },
        highlight: {
            100: "#439775", // Secondary color
            200: "#46ab79",
            300: "#48bf84",
            400: "#61d095",
        },
        neutral: {
            orange: "#cc7d2f",
            white: {
                100: "#ffffff",
                200: "#f1f5f1",
            },
            black: {
                100: "#1b1b1b",
                200: "#16161d",
                300: "#1d1d16",
                400: "#18181b"
            }
        }
    },
    components: {
        Button: {
            baseStyle: {
                background: "highlight.300",
                color: 'neutral.black.300',
                fontSize: '1.3rem',
                fontWeight: '700',
                _hover: {
                    background: "highlight.100", // Set hover background
                    color: "neutral.white.200",  // Set hover text color
                    transition: '0.5s',
                },
            },
            variant: {
            },
            defaultProps: {
                background: "highlight.100",
                color: 'brand.200',
                fontSize: '1.3rem',
                fontWeight: '700',
                variant: "standard"
            }
        },
        Link: {
            baseStyle: {
                _hover:{ 
                    textDecoration: "none",
                    color: "highlight.400",
                    transition: "1s",
                },
                _focus:{ 
                    outline: "none" 
                },
                _active:{
                    textDecoration: "none",
                    color: "highlight.100"
                }
            },
            variant: {
            },
            defaultProps: {
                variant: "standard"
            }
        }
    },
});

export default customTheme;
