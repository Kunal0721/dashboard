import {
Search,
Sun,
Moon,
History,
Bell,
LayoutGrid,
Star,
LayoutPanelLeft,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "@/components/ThemeProvider";
import { useLocation } from "react-router-dom";

interface AppHeaderProps {
  onToggleRightSidebar: () => void;
}

// Route name mapping
const routeNames: Record<string, string> = {
  "/": "Default",
  "/orders": "Order List",
  "/projects": "Projects",
  "/courses": "Online Courses",
  "/profile": "User Profile",
  "/account": "Account",
  "/corporate": "Corporate",
  "/blog": "Blog",
  "/social": "Social",
};

export function AppHeader({ onToggleRightSidebar }: AppHeaderProps) {
const { theme, setTheme } = useTheme();
const location = useLocation();
  const [isStarred, setIsStarred] = useState(false);

  // Get the current route name
  const currentRouteName = routeNames[location.pathname] || "Default";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-14 md:h-16 items-center gap-2 md:gap-4 px-3 md:px-4">
        {/* Left Section */}
        <div className="flex items-center gap-2 md:gap-3">
          <SidebarTrigger className="h-5 w-5 hover:bg-[hsl(233,33%,97%)] dark:hover:bg-[hsl(0,1%,14%)] rounded-md transition-colors text-foreground hover:text-foreground" />
          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9 hidden sm:flex hover:bg-[hsl(233,33%,97%)] dark:hover:bg-[hsl(0,1%,14%)] text-foreground hover:text-foreground" onClick={() => setIsStarred(!isStarred)}>
            <Star className={`h-4 w-4 md:h-5 md:w-5 ${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-foreground'}`} />
          </Button>
          <div className="hidden md:flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Dashboards</span>
            <span className="text-muted-foreground">/</span>
            <span className="font-semibold">{currentRouteName}</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-1 md:gap-2">
          <div className="relative w-32 sm:w-48 md:w-64">
            <Search className="absolute left-2 md:left-3 top-1/2 h-3 w-3 md:h-4 md:w-4 -translate-y-1/2 text-foreground pointer-events-none" />
            <Input
              placeholder="Search"
              className="pl-7 md:pl-9 pr-10 md:pr-16 h-9 md:h-10 bg-muted/50 border-0 text-sm text-foreground placeholder:text-muted-foreground hover:bg-[hsl(233,33%,97%)] dark:hover:bg-[hsl(0,1%,14%)] focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
            />
            <kbd className="hidden md:inline-flex absolute right-3 top-1/2 -translate-y-1/2 h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground pointer-events-none">
              ⌘/
            </kbd>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 md:h-9 md:w-9 hover:bg-[hsl(233,33%,97%)] dark:hover:bg-[hsl(0,1%,14%)] text-foreground hover:text-foreground"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 md:h-5 md:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
            <Moon className="absolute h-4 w-4 md:h-5 md:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
          </Button>

          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9 hidden sm:flex hover:bg-[hsl(233,33%,97%)] dark:hover:bg-[hsl(0,1%,14%)] text-foreground hover:text-foreground" onClick={() => window.location.reload()}>
          <History className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 md:h-9 md:w-9 hover:bg-[hsl(233,33%,97%)] dark:hover:bg-[hsl(0,1%,14%)] text-foreground hover:text-foreground"
            onClick={onToggleRightSidebar}
          >
            <Bell className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 md:h-9 md:w-9 hidden sm:flex hover:bg-[hsl(233,33%,97%)] dark:hover:bg-[hsl(0,1%,14%)] text-foreground hover:text-foreground"
            onClick={onToggleRightSidebar}
          >
            <LayoutGrid className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
          </Button>
        </div>
      </div>
    </header>
  );
}
