'use client';

import * as React from 'react';
import { GalleryVerticalEnd, SquareTerminal } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
  user: {
    name: 'Admin',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Learning Center',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
  ],
  navMain: [
    {
      title: 'Dashboard management',
      url: '/dashboard',

      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Navbar',
          url: '/dashboard/navbar',
        },
        {
          title: 'Hero',
          url: '/dashboard/hero',
        },
        {
          title: 'About Us',
          url: '/dashboard/about-us',
        },
        {
          title: 'Features',
          url: '/dashboard/features',
        },
        {
          title: 'Testimonials',
          url: '/dashboard/testimonials',
        },
        {
          title: 'FAQs',
          url: '/dashboard/faqs',
        },
        {
          title: 'Contact submissions',
          url: '/dashboard/contact-submissions',
        },
        {
          title: 'Footer',
          url: '/dashboard/footer',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
