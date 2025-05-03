"use client";
import {
  Frame,
  Map,
  NewspaperIcon,
  PieChart,
  SquareTerminal,
} from "lucide-react";

import { NavItem, NavSection } from "@/components/nav-items";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Settings,
} from "lucide-react";
import { Session } from "next-auth";

// This is sample data.
const teams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
];
const navItems: Array<NavSection> = [
  {
    sectionName: "Community",
    tabs: [
      {
        title: "Feed",
        url: "#",
        icon: NewspaperIcon,
        itemType: "item",
      },
      {
        title: "Live Events",
        url: "#",
        icon: NewspaperIcon,
        itemType: "item",
      },
      {
        title: "Groups",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        itemType: "dropdown",
        items: [
          {
            title: "Start Here",
            url: "#",
          },
          {
            title: "Say Hello",
            url: "#",
          },
          {
            title: "Resources",
            url: "#",
          },
          {
            title: "Newsletter",
            url: "#",
          },
          {
            title: "Disucssions",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    sectionName: "Admin",
    tabs: [
      {
        title: "Plan with AI",
        url: "#",
        icon: PieChart,
        itemType: "item",
      },
      {
        title: "Analytics",
        url: "#",
        icon: Frame,
        itemType: "item",
      },
      {
        title: "Public Pages",
        url: "#",
        icon: PieChart,
        itemType: "item",
      },
    ],
  },
];

interface AppSidebarProps {
  side: "left" | "right";
  session: Session | null;
}

export function AppSidebar({ side, session }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" side={side}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavItem sections={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser session={session} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
