"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const inputStyles = "w-full px-4 py-3 rounded-full border border-gray-100 focus:border-emerald-300 focus:ring-0 focus:outline-none bg-white transition-all text-gray-800"
const buttonStyles = "w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium transition-all"

export default function MultiStepForm({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: ''
  })
  const totalSteps = 3

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.firstName || !formData.email || !formData.phone) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Create URL with query parameters
      const url = new URL('https://n8n.saastify.co/webhook/c752c784-f84f-466c-9f2a-21935753680e');
      url.searchParams.append('firstName', formData.firstName);
      url.searchParams.append('email', formData.email);
      url.searchParams.append('phone', formData.phone);
      url.searchParams.append('timestamp', new Date().toISOString());

      const response = await fetch(url.toString(), {
        method: 'GET',
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form. Please try again.');
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-emerald-600 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Please check your email for further instructions about the Marketing ROI Strategy presentation.
        </p>
        <button
          onClick={onClose}
          className={buttonStyles}
        >
          Close
        </button>
      </div>
    );
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
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
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
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
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
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>
        )}

        <div className="text-xs text-gray-500 mt-2">
          By submitting this form, you agree to our <a href="/privacy" className="text-emerald-600 hover:text-emerald-700 underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>

        <div className="flex justify-between gap-4 mt-6">
          {step > 1 && (
            <button 
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
            >
              Back
            </button>
          )}
          
          <button 
            type="button"
            onClick={() => {
              if (step === totalSteps) {
                handleSubmit();
              } else {
                setStep(step + 1);
              }
            }}
            className={buttonStyles}
          >
            {step === totalSteps ? "Submit Registration" : "Next Step"}
          </button>
        </div>
      </form>
    </div>
  )
} 