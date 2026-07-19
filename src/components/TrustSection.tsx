import { Shield, Wifi, Lock, ServerCog } from "lucide-react";
import Link from "next/link";
import MotionReveal from "./MotionReveal";

const trustItems = [
  {
    icon: Shield,
    title: "30-Day Money-Back Guarantee On Every IPTV Subscription",
    description:
      "Not convinced? Contact support within 30 days and every penny returns same-day. No forms, no retention scripts, no small print — a full refund that lets you test IPTV UK completely risk-free.",
  },
  {
    icon: Wifi,
    title: "UK-Hosted Infrastructure — Stable Streaming, Live Status",
    description:
      "A live status page tracks performance minute by minute. If the service is degraded, credits and refunds are applied without you having to ask. Stable UK infrastructure is the foundation of every streaming claim.",
  },
  {
    icon: Lock,
    title: "Optional Secure Proxy Add-On — Privacy On Shared Networks",
    description:
      "Enable an encrypted route at checkout when you want an extra layer of privacy. No bandwidth cap, no logs, no separate subscription — a single line-item on the order at the price shown in the modal.",
  },
  {
    icon: ServerCog,
    title: "24/7 English-Language Support — Around The Clock",
    description:
      "Live chat, WhatsApp and email are answered around the clock by an English-speaking support team. Average first response is measured in minutes, not hours.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal y={20} className="text-center mb-16">
          <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-4">
            Four Commitments You Can Verify
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The IPTV UK Guarantee &mdash; Four Commitments{" "}
            <span className="gradient-text">You Can Verify</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            Every claim on this page is published, measured and backed by a full{" "}
            <Link href="/refund" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              same-day refund
            </Link>.
          </p>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <MotionReveal key={item.title} delay={i * 0.1} y={20}>
              <div className="group text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 transition-all group-hover:border-emerald-200 group-hover:bg-emerald-100 group-hover:shadow-lg group-hover:shadow-emerald-100/50">
                  <item.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
