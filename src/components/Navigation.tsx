import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import smartHawkerLogo from "@/assets/logo1.png";

const Navigation = () => {
  const { t } = useTranslation();

  const scrollToDownload = () => {
    const downloadSection = document.getElementById("download-section");
    if (downloadSection) {
      const headerOffset = 498; // Adjust this value to match your nav bar's height
      const elementPosition = downloadSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* 🔹 2. Replace the old div with this img tag */}
          <img
            src={smartHawkerLogo}
            alt="Smart Hawker Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-foreground">
            Smart Hawker
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            onClick={scrollToDownload}
            className="bg-primary hover:bg-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="mr-2 h-4 w-4" />
            {t("nav.downloadApp")}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
