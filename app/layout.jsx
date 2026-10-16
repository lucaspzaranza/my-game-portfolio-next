import "./globals.css";

export const metadata = {
  title: "Lucas Zaranza | Game Developer",
  description:
    "Portfolio of Lucas Zaranza — Unity and C# game developer, indie creator, and full-stack engineer.",
  icons: {
    icon: "/mmx-helmet.png?v=2",
  },
};

export const viewport = {
  themeColor: "#07111f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
