import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE_NAME } from "@/lib/constants";
import CheckoutContent from "./CheckoutContent";

export const metadata: Metadata = {
  title: "Checkout",
  description: `Complete your ${SITE_NAME} order.`,
  alternates: { canonical: "/checkout" },
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutContent />
    </Suspense>
  );
}
