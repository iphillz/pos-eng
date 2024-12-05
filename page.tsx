import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LandingPage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center text-center px-4">
      {/* Background Image with Darker Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
          This Is The Ugly Truth
        </h1>
        
        <p className="text-xl md:text-2xl text-emerald-300/90 max-w-2xl mx-auto">
          Don't Spend A Single Cent On Ads Until You Know This 3-Step Strategy That Allows
        </p>

        <p className="text-2xl md:text-3xl font-semibold text-white max-w-3xl mx-auto">
          1 Hour Presentation Reveals Step By Step How Service Providers Increase Marketing Budget ROI 3-5 Times As Fast As 90 Days
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <button 
              className="inline-block max-w-full relative rounded-lg border-2 border-[#74ca8b] my-4 py-2.5 px-10 text-black font-arial text-sm leading-5 antialiased"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% -100%, #176344 24%, #89ffd0 55%)',
                boxShadow: 'inset 0 2px 20px rgba(25, 97, 56, 0.7), 0 0 40px rgba(93, 211, 144, 0.6)',
                textRendering: 'optimizeLegibility',
              }}
            >
              Register To Save Your Spot
              <span className="block ml-2 text-xs opacity-80">Limited Spots Available</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" type="text" placeholder="Enter your first name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              <button 
                className="inline-block max-w-full relative rounded-lg border-2 border-[#74ca8b] my-4 py-2.5 px-10 text-black font-arial text-sm leading-5 antialiased"
                style={{
                  backgroundImage: 'radial-gradient(circle at 50% -100%, #176344 24%, #89ffd0 55%)',
                  boxShadow: 'inset 0 2px 20px rgba(25, 97, 56, 0.7), 0 0 40px rgba(93, 211, 144, 0.6)',
                  textRendering: 'optimizeLegibility',
                }}
              >
                Submit Registration
              </button>
            </div>
          </DialogContent>
        </Dialog>

        <p className="text-sm text-gray-400 italic">
          You'll get access to join the 1 Hour Presentation revealing the 3-Step Strategy in your email inbox
        </p>
      </div>
    </main>
  )
}

