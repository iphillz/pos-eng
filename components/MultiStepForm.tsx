"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MultiStepForm({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Handle form submission here
      onClose?.()
    }
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
        <div 
          className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      <div className="text-sm text-gray-600 mb-4">
        Step {step} of {totalSteps}
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {step === 1 && (
          <div className="grid gap-2">
            <Label htmlFor="first-name">First name</Label>
            <Input 
              id="first-name" 
              type="text" 
              placeholder="Enter your first name" 
              required
            />
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              required
            />
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="Enter your phone number" 
              required
            />
          </div>
        )}

        <div className="flex justify-between gap-4 mt-6">
          {step > 1 && (
            <button 
              type="button"
              onClick={prevStep}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              Back
            </button>
          )}
          
          <button 
            type="button"
            onClick={nextStep}
            className="inline-block max-w-full relative rounded-[10px] mt-2 mb-2 pt-[10px] pb-[10px] px-6 text-black font-arial text-sm leading-5 antialiased"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% -100%, #176344 24%, #89ffd0 55%)',
              border: '2px solid #74ca8b',
              boxShadow: 'inset 0 2px 20px #196138b3, 0 0 40px #5dd39099',
            }}
          >
            {step === totalSteps ? "Submit Registration" : "Next Step"}
          </button>
        </div>
      </form>
    </div>
  )
} 