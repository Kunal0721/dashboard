import {
ShoppingBag,
Folder,
BookOpen,
ChevronRight,
Circle,
PieChart,
IdCard,
CreditCard,
Users,
FileText,
MessageCircle,
ChevronDown,
 Package,
 } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { BrandLogo } from "@/components/BrandLogo";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const favorites = [
  {
    title: "Overview",
    url: "/",
    icon: Circle,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Circle,
  },
];

const dashboards = [
  { title: "Default", url: "/", icon: PieChart },
  { title: "Orders", url: "/orders", icon: Package },
  {
    title: "eCommerce",
    icon: ShoppingBag,
    items: [
      { title: "ecommerce1", url: "/ecommerce1" },
      { title: "ecommerce2", url: "/ecommerce2" },
      { title: "ecommerce3", url: "/ecommerce3" },
    ],
  },
  {
    title: "Projects",
    icon: Folder,
    items: [
      { title: "project1", url: "/project1" },
      { title: "project2", url: "/project2" },
      { title: "project3", url: "/project3" },
    ],
  },
  {
    title: "Online Courses",
    icon: BookOpen,
    items: [
      { title: "course1", url: "/course1" },
      { title: "course2", url: "/course2" },
      { title: "course3", url: "/course3" },
    ],
  },
];

const pages = [
  {
    title: "User Profile",
    icon: IdCard,
    items: [
      { title: "Overview", url: "/profile/overview" },
      { title: "Projects", url: "/profile/projects" },
      { title: "Campaigns", url: "/profile/campaigns" },
      { title: "Documents", url: "/profile/documents" },
      { title: "Followers", url: "/profile/followers" },
    ],
  },
  { title: "Account", url: "/account", icon: CreditCard },
  { title: "Corporate", url: "/corporate", icon: Users },
  { title: "Blog", url: "/blog", icon: FileText },
  { title: "Social", url: "/social", icon: MessageCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const [activeTab, setActiveTab] = useState("favorites");
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b px-3 py-4">
        <BrandLogo isCollapsed={isCollapsed} />
      </SidebarHeader>
      <SidebarContent className="p-5">
        {/* Tabs for Favorites and Recently */}
        {!isCollapsed && (
          <div className="py-3">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 h-9 bg-transparent p-0">
                <TabsTrigger 
                  value="favorites" 
                  className="text-sm data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-foreground text-muted-foreground"
                >
                  Favorites
                </TabsTrigger>
                <TabsTrigger 
                  value="recently" 
                  className="text-sm data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-foreground text-muted-foreground"
                >
                  Recently
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        )}

        {/* Favorites List */}
        <SidebarGroup className="px-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {favorites.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-9">
                    <NavLink to={item.url}>
                      <item.icon className="h-2 w-2 fill-current shrink-0" />
                      <span className="text-sm">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Dashboards */}
        <SidebarGroup className="px-0 mt-6">
          <SidebarGroupLabel className="text-sm text-muted-foreground dark:text-[hsl(45,9%,41%)] mb-2 px-0">
            Dashboards
        </SidebarGroupLabel>
        <SidebarGroupContent>
        <SidebarMenu>
            {dashboards.map((item) => {
                if ("items" in item) {
                  return (
                    <Collapsible
                      key={item.title}
                      asChild
                      defaultOpen
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="h-9">
                            <item.icon className="h-4 w-4 shrink-0" />
                            <span className="text-sm">{item.title}</span>
                            <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-0 group-data-[state=closed]/collapsible:-rotate-90 h-4 w-4" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild className="h-8">
                                  <NavLink to={subItem.url}>
                                    <span className="text-sm">{subItem.title}</span>
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`h-9 ${isActive ? 'bg-muted hover:bg-muted' : ''}`}
                    >
                      <NavLink to={item.url}>
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span className="text-sm">{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
            })}
        </SidebarMenu>
        </SidebarGroupContent>
        </SidebarGroup>

        {/* Pages */}
        <SidebarGroup className="px-0 mt-6">
          <SidebarGroupLabel className="text-sm text-muted-foreground dark:text-[hsl(45,9%,41%)] mb-2 px-0">
            Pages
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pages.map((item) => {
                if ("items" in item) {
                  return (
                    <Collapsible
                      key={item.title}
                      asChild
                      defaultOpen
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="h-9">
                            <item.icon className="h-4 w-4 shrink-0" />
                            <span className="text-sm">{item.title}</span>
                            <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-0 group-data-[state=closed]/collapsible:-rotate-90 h-4 w-4" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild className="h-8">
                                  <NavLink to={subItem.url}>
                                    <span className="text-sm">{subItem.title}</span>
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="h-9">
                      <NavLink to={item.url}>
                        <ChevronRight className="h-4 w-4 shrink-0 opacity-50" />
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span className="text-sm">{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
