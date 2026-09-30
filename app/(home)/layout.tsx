import { Footer } from "@/ui/LayoutComponets/Footer";
import { Navbar } from "@/ui/LayoutComponets/Navbar";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
