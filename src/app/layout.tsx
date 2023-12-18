import "@/utils/styles/reset.css";

import { ThemeProvider } from "@/theme";
import { StyledComponentsRegistry } from "@/utils";
import { fonts } from "@/theme/foundations";

export const metadata = {
  title: "Simon Hanselaer",
  description:
    "Passionate about coding and pushing my skills to the next level.",
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <body
        className={`${fonts.primary.className} ${fonts.secondary.className}`}
      >
        <ThemeProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
