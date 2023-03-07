import "./globals.css";

export const metadata = {
  title: "focusfuse",
  description:
    "A pomodoro application to help you focus from your day-to-day tasks. This application was built on top of NextJS 13 and TailwindCSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
