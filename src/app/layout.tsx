import "@/styles/reset.css";

import { ThemeProvider, fonts } from "@/theme";
import { StyledComponentsRegistry } from "@/utils";
import { ThemeConsumer } from "styled-components";

export const metadata = {
  title: "Simon Hanselaer",
  description: "Front-end developer",
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <ThemeProvider>
        <StyledComponentsRegistry>
          <body
            className={`${fonts.primary.className} ${fonts.secondary.className}`}
          >
            {children}
          </body>
        </StyledComponentsRegistry>
      </ThemeProvider>
    </html>
  );
}
