"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import InteractiveButton from "@/components/InteractiveButton"
import MultiStepForm from "@/components/MultiStepForm"
import { useState } from "react"

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center text-center px-4">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
          This Is The Ugly Truth
        </h1>
        
        <p className="text-xl md:text-2xl text-emerald-300/90 max-w-2xl mx-auto">
          Don&apos;t Spend A Single Cent On Ads Until You Know This 3-Step Strategy That Allows
        </p>

        <p className="text-2xl md:text-3xl font-semibold text-white max-w-3xl mx-auto">
          1 Hour Presentation Reveals Step By Step How Service Providers Increase Marketing Budget ROI 3-5 Times As Fast As 90 Days
        </p>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <InteractiveButton>
              <span className="text-lg font-bold">Register To Save Your Spot</span>
              <span className="block text-xs opacity-80 mt-1">Limited Spots Available</span>
            </InteractiveButton>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-white">
            <MultiStepForm onClose={() => setIsOpen(false)} />
          </DialogContent>
        </Dialog>

        <p className="text-sm text-gray-400 italic">
          You&apos;ll get access to join the 1 Hour Presentation revealing the 3-Step Strategy in your email inbox
        </p>
      </div>
    </main>
  )
}

