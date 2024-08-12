import { Inter } from "next/font/google";
import "./globals.css";
import AuthenticationProvider from "./__components/AuthenticationProvider";
import NavBar from "./__components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Blood-Bank",
  description: "An App To Manage Blood Bank Online , Effectively and Efficiently",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthenticationProvider>
        <body className={`${inter.className} bg-gray-100`}>
          <NavBar />
          {children}
        </body>
      </AuthenticationProvider>
    </html>
  );
}
