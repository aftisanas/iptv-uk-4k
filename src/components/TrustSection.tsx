"use client";

import { motion } from "framer-motion";
import { Shield, Wifi, Lock, ServerCog } from "lucide-react";
import Link from "next/link";

const trustItems = [
  {
    icon: Shield,
    title: "30-Day Money-Back Guarantee On Every IPTV Subscription",
    description:
      "Not convinced? Contact support within 30 days and every penny returns same-day. No forms, no retention scripts, no small print — a full refund that lets you test IPTV UK completely risk-free.",
  },
  {
    icon: Wifi,
    title: "99.9% Uptime On Strong IPTV Servers",
    description:
      "A live status page tracks performance minute by minute. If uptime falls below 99.9 percent, service credits apply automatically. Strong UK infrastructure is the foundation of every streaming claim.",
  },
  {
    icon: Lock,
    title: "Secure Proxy Option — Premium IPTV Privacy At No Extra Cost",
    description:
      "The secure proxy option helps keep every stream private with zero latency penalty. No bandwidth cap, no logs, no separate subscription — proxy-secured streaming included in every plan from day one.",
  },
  {
    icon: ServerCog,
    title: "24/7 UK Support — A British IPTV Service That Never Closes",
    description:
      "A named British team answers live chat, WhatsApp and email around the clock. Average first response: under four minutes — support quality that matches the streaming quality.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 transition-all group-hover:border-emerald-200 group-hover:bg-emerald-100 group-hover:shadow-lg group-hover:shadow-emerald-100/50">
                <item.icon className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
