import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Navigation = () => {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download-section');
    downloadSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-bold text-foreground">SmartHawker</span>
        </div>
        
        <Button 
          onClick={scrollToDownload}
          className="bg-primary hover:bg-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          <Download className="mr-2 h-4 w-4" />
          Download App
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
