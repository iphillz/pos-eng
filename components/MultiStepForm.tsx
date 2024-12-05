"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const inputStyles = "w-full px-4 py-3 rounded-full border border-gray-100 focus:border-emerald-300 focus:ring-0 focus:outline-none bg-white transition-all text-gray-800"
const buttonStyles = "w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium transition-all"

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
      <div className="w-full bg-gray-100 h-1.5 rounded-full mb-6">
        <div 
          className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      <div className="text-sm text-gray-500 mb-4">
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
              className={inputStyles}
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
              className={inputStyles}
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
              className={inputStyles}
              required
            />
          </div>
        )}

        <div className="flex justify-between gap-4 mt-6">
          {step > 1 && (
            <button 
              type="button"
              onClick={prevStep}
              className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
            >
              Back
            </button>
          )}
          
          <button 
            type="button"
            onClick={nextStep}
            className={buttonStyles}
          >
            {step === totalSteps ? "Submit Registration" : "Next Step"}
          </button>
        </div>
      </form>
    </div>
  )
} 