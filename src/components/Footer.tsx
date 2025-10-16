import { useTranslation } from "react-i18next";
import smartHawkerLogo from "@/assets/logo1.png";
import { Mail, Phone } from "lucide-react"; // 🔹 1. Import icons

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="container mx-auto text-center">
        {/* Logo and Name */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src={smartHawkerLogo}
            alt="Smart Hawker Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold">Smart Hawker</span>
        </div>

        {/* Tagline */}
        <p className="text-background/80 mb-6 max-w-md mx-auto">
          {t("footer.tagline")}
        </p>

        {/* 🔹 2. Added Contact Info Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
          {/* Email */}
          <a
            href="mailto:contact@platinuminfo.tech"
            className="flex items-center gap-2 text-background/90 hover:text-primary transition-colors font-medium"
          >
            <Mail className="w-4 h-4" />
            contact@platinuminfo.tech
          </a>

          {/* Phone */}
          <a
            href="tel:+917976494804"
            className="flex items-center gap-2 text-background/90 hover:text-primary transition-colors font-medium"
          >
            <Phone className="w-4 h-4" />
            +91-7976494804
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-background/60">
          &copy; {new Date().getFullYear()} Smart Hawker. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
