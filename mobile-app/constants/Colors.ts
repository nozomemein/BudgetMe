/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "hsl(142.1, 76.2%, 36.3%)"; // primary
const tintColorDark = "hsl(142.1, 70.6%, 45.3%)"; // primary for dark mode

export const Colors = {
  light: {
    text: "hsl(240, 10%, 3.9%)", // foreground
    background: "hsl(240 4.8% 95.9%)", // background
    tint: tintColorLight,
    icon: "hsl(240, 10%, 3.9%)", // card-foreground
    tabIconDefault: "hsl(240, 10%, 3.9%)",
    tabIconSelected: tintColorLight,
    cardBackground: "hsl(0, 0%, 100%)", // card
    cardForeground: "hsl(240, 10%, 3.9%)",
    border: "hsl(240, 5.9%, 90%)", // border
    destructive: "hsl(0, 84.2%, 60.2%)", // destructive
    destructiveForeground: "hsl(0, 0%, 98%)",
  },
  dark: {
    text: "hsl(0, 0%, 95%)", // foreground
    background: "hsl(20, 14.3%, 4.1%)", // background for dark mode
    tint: tintColorDark,
    icon: "hsl(0, 0%, 95%)", // card-foreground for dark mode
    tabIconDefault: "hsl(240, 3.7%, 15.9%)", // muted foreground
    tabIconSelected: tintColorDark,
    cardBackground: "hsl(24, 9.8%, 10%)", // card
    cardForeground: "hsl(0, 0%, 95%)", // card-foreground
    border: "hsl(240, 3.7%, 15.9%)", // border
    destructive: "hsl(0, 62.8%, 30.6%)", // destructive for dark mode
    destructiveForeground: "hsl(0, 85.7%, 97.3%)",
  },
};
