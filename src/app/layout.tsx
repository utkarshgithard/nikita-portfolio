import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikita Rani — Full-Stack Developer",
  description:
    "Nikita Rani is a B.Tech student, full-stack developer, and machine learning enthusiast building thoughtful digital experiences.",
  icons: {
    icon: "/nikita.jpeg",
    shortcut: "/nikita.jpeg",
    apple: "/nikita.jpeg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `try{var saved=localStorage.getItem("nikita-theme");document.documentElement.dataset.theme=saved==="light"?"light":"dark"}catch{document.documentElement.dataset.theme="dark"}`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
