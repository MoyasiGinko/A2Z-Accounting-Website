import type { Metadata } from "next";

import WhyDubaiPage from "@/components/why-dubai-page/WhyDubai";

export const metadata: Metadata = {
  title: "Why Dubai | A2Z Accounting",
  description:
    "Discover why Dubai is one of the world’s most tax-efficient places to build, protect, and grow your wealth — with a strong lifestyle and global business access.",
};

export default async function WhyDubaiRoute() {
  return <WhyDubaiPage />;
}
