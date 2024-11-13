import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./__components/NavBar";
import { getJWTUser } from "@/serverUtilities/getJWTUser";
import AuthenticationProvider from "./__components/AuthenticationProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Blood-Bank",
  description: "An App To Manage Blood Bank Online , Effectively and Efficiently",
};

export default function RootLayout({ children }) {
  const initialUser = getJWTUser();
  return (
    <html lang="en">
      <AuthenticationProvider initialUser={initialUser}>
        <body className={`${inter.className} bg-gray-100`}>
          <NavBar />
          {children}
        </body>
      </AuthenticationProvider>
    </html>
  );
}
