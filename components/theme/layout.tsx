import Navbar from "@/components/theme/navbar";
import Footer from "@/components/theme/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="vsc-initialized has-navbar-fixed-top">
      <Navbar />

      <div id="main" role="main" className="main">
        {children}
      </div>

      <Footer />
    </body>
  );
}
