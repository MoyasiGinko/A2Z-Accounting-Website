import WhoWeServe from "@/components/who-we-serve-page/WhoWeServe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Serve | A2Z Accounting",
  description:
    "Discover why Dubai is one of the world’s most tax-efficient places to build, protect, and grow your wealth — with a strong lifestyle and global business access.",
};

export default async function WhoWeServeRoute() {
  return <WhoWeServe />;
}
