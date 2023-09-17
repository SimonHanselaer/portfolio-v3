import "@/utils/styles/reset.css";

import { StyledComponentsRegistry } from "@/utils";
import { bebasNeue, sen } from "@/utils/foundations";

export const metadata = {
  title: "Simon Hanselaer",
  description:
    "Passionate about coding and pushing my skills to the next level.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sen.className} ${bebasNeue.className}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
