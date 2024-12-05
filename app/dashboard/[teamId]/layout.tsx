'use client';

import SidebarLayout, { SidebarItem } from "@/components/sidebar-layout";
import { SelectedTeamSwitcher, useUser } from "@stackframe/stack";
import { BadgePercent, BarChart4, Columns3, Globe, Locate, Settings2, ShoppingBag, ShoppingCart, Users } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const navigationItems: SidebarItem[] = [
  {
    name: "Statistics",
    href: "/",
    icon: Globe,
    type: "item",
  },
  {
    type: 'label',
    name: 'Orders & Subscriptions',
  },
  {
    name: "New Order",
    href: "/new-order",
    icon: ShoppingBag,
    type: "item",
  },
  {
    name: "Order Logs",
    href: "/order-logs",
    icon: Users,
    type: "item",
  },
  {
    name: "Drip-feed",
    href: "/drip-feed",
    icon: Columns3,
    type: "item",
  },
  {
    name: "REAL-FN Follows",
    href: "/real-fn-follows",
    icon: Locate,
    type: "item",
  },
  {
    type: 'label',
    name: 'Services & Funds',
  },
  {
    name: "Subscriptions",
    href: "/subscriptions",
    icon: BarChart4,
    type: "item",
  },
  {
    name: "Refill",
    href: "/refill",
    icon: ShoppingCart,
    type: "item",
  },
  {
    name: "Add Funds",
    href: "/add-funds",
    icon: BadgePercent,
    type: "item",
  },
  {
    name: "Transaction Logs",
    href: "/transaction-logs",
    icon: BadgePercent,
    type: "item",
  },
  {
    type: 'label',
    name: 'Support & FAQs',
  },
  {
    name: "Tickets",
    href: "/tickets",
    icon: Settings2,
    type: "item",
  },
  {
    name: "FAQs",
    href: "/faqs",
    icon: Settings2,
    type: "item",
  },
  {
    type: 'label',
    name: 'Legal',
  },
  {
    name: "Terms & Conditions",
    href: "/terms",
    icon: Settings2,
    type: "item",
  },
  {
    type: 'label',
    name: 'Other',
  },
  {
    name: "Order",
    href: "/order",
    icon: Settings2,
    type: "item",
  },
];



export default function Layout(props: { children: React.ReactNode }) {
  const params = useParams<{ teamId: string }>();
  const user = useUser({ or: 'redirect' });
  const team = user.useTeam(params.teamId);
  const router = useRouter();

  if (!team) {
    router.push('/dashboard');
    return null;
  }

  return (
    <SidebarLayout 
      items={navigationItems}
      basePath={`/dashboard/${team.id}`}
      sidebarTop={<SelectedTeamSwitcher 
        selectedTeam={team}
        urlMap={(team) => `/dashboard/${team.id}`}
      />}
      baseBreadcrumb={[{
        title: team.displayName,
        href: `/dashboard/${team.id}`,
      }]}
    >
      {props.children}
    </SidebarLayout>
  );
}