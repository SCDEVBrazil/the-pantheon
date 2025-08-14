'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useForm } from '@formspree/react'
import { Metadata } from 'next'

// Note: Since this is a client component, metadata needs to be handled differently
// This would normally go in a separate metadata file or parent layout

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Founding Member Application | Pantheon Chicago Intellectual Salon",
  "description": "Apply for founding membership in Chicago's first intellectual salon for systems thinkers. Join 10-12 exceptional individuals in collaborative problem-solving.",
  "url": "https://www.thepantheon.club/questionnaire",
  "mainEntity": {
    "@type": "Application",
    "name": "Pantheon Founding Member Application",
    "description": "Multi-step assessment form for intellectual salon founding membership",
    "applicationCategory": "Educational Program Application",
    "provider": {
      "@type": "Organization",
      "name": "Pantheon",
      "url": "https://www.thepantheon.club"
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.thepantheon.club"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Application",
        "item": "https://www.thepantheon.club/questionnaire"
      }
    ]
  }
}

export default function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 6
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    resonance: '',
    interests: '',
    strengths: '',
    worldChange: '',
    criticalThinking: ''
  })

  // Formspree integration
  const [state, handleFormspreeSubmit] = useForm("xkgzebvd")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.firstName.trim() !== '' && 
               formData.lastName.trim() !== '' && 
               formData.email.trim() !== ''
      case 2:
        return formData.resonance.trim() !== ''
      case 3:
        return formData.interests.trim() !== ''
      case 4:
        return formData.strengths.trim() !== ''
      case 5:
        return formData.worldChange.trim() !== ''
      case 6:
        return formData.criticalThinking.trim() !== ''
      default:
        return false
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(currentStep)) {
      // Create a FormData object with all the form fields
      const formDataForSubmission = new FormData()
      formDataForSubmission.append('firstName', formData.firstName)
      formDataForSubmission.append('lastName', formData.lastName)
      formDataForSubmission.append('email', formData.email)
      formDataForSubmission.append('facebook', formData.facebook)
      formDataForSubmission.append('instagram', formData.instagram)
      formDataForSubmission.append('linkedin', formData.linkedin)
      formDataForSubmission.append('resonance', formData.resonance)
      formDataForSubmission.append('interests', formData.interests)
      formDataForSubmission.append('strengths', formData.strengths)
      formDataForSubmission.append('worldChange', formData.worldChange)
      formDataForSubmission.append('criticalThinking', formData.criticalThinking)
      formDataForSubmission.append('_subject', `New Pantheon Application: ${formData.firstName} ${formData.lastName}`)
      
      // Submit to Formspree
      await handleFormspreeSubmit(formDataForSubmission)
      
      // Wait a moment for state to update, then redirect
      setTimeout(() => {
        window.location.href = '/thank-you'
      }, 1000)
    }
  }

  // Show success message if form was submitted successfully
  if (state.succeeded) {
    // Automatically redirect after showing success message
    setTimeout(() => {
      window.location.href = '/thank-you'
    }, 2000)
    
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Application Submitted!</h1>
          <p className="text-xl text-gray-400 mb-8">Redirecting you to our thank you page...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* SEO Meta Tags for Client Component */}
      <head>
        <title>Apply for Founding Membership | Pantheon Chicago Intellectual Salon</title>
        <meta name="description" content="Apply for founding membership in Chicago's first intellectual salon for systems thinkers. Join 10-12 exceptional individuals in collaborative problem-solving and rigorous analysis." />
        <meta name="keywords" content="pantheon application, chicago intellectual salon application, founding member application, systems thinking assessment, intellectual community application, critical thinking evaluation" />
        <meta property="og:title" content="Apply for Founding Membership | Pantheon" />
        <meta property="og:description" content="Apply for founding membership in Chicago's first intellectual salon for systems thinkers. Multi-step assessment for exceptional individuals." />
        <meta property="og:url" content="https://www.thepantheon.club/questionnaire" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apply for Founding Membership | Pantheon" />
        <meta name="twitter:description" content="Apply for founding membership in Chicago's first intellectual salon for systems thinkers." />
        <link rel="canonical" href="https://www.thepantheon.club/questionnaire" />
      </head>

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Header */}
        <header className="relative z-10 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
          <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex justify-between items-center py-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <Link href="/" aria-label="Return to Pantheon homepage">
                  <svg viewBox="0 0 200 50" className="h-16 w-auto md:h-20 cursor-pointer" aria-label="Pantheon Logo">
                    <defs>
                      <linearGradient id="wingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF"/>
                        <stop offset="100%" stopColor="#E5E5E5"/>
                      </linearGradient>
                      <linearGradient id="wingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F0F0F0"/>
                        <stop offset="100%" stopColor="#FFFFFF"/>
                      </linearGradient>
                      <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D5D5D5"/>
                        <stop offset="100%" stopColor="#FFFFFF"/>
                      </linearGradient>
                    </defs>
                    <g transform="translate(82, 0)">
                      <path d="M20,26 C12,21 8,23 4,11 Q8,16 12,17 Q16,18 20,23 C19,22 19.5,21 20,26" fill="url(#wingGradient1)"/>
                      <path d="M20,26 C28,21 32,23 36,11 Q32,16 28,17 Q24,18 20,23 C21,22 20.5,21 20,26" fill="url(#wingGradient2)"/>
                      <path d="M20,26 C19,21 20,16 20,8 Q20.2,12 20,16 Q19.8,19 20,23 C20.2,24 20,25 20,26" fill="url(#bodyGradient)"/>
                    </g>
                    <text x="100" y="42" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fill="white" textAnchor="middle" fontWeight="700" letterSpacing="4">
                      PANTHEON
                    </text>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10">
          <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 pt-20">
            <div className="w-full max-w-6xl mx-auto">
              
              {/* Hero Message */}
              <div className="text-center mb-16">
                <div className="text-gray-300 space-y-8 text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto">
                  <h1 className="text-white font-semibold text-2xl lg:text-3xl">
                    This project is designed to face the problems that haunt our world head-on.
                  </h1>
                  <p>
                    <span className="text-white font-semibold">Behind every crisis lies a mechanical component.</span> Understand the mechanics, and you can devise strategies to counter them. This is what we do—we understand problems from their roots, their bigger picture, their fundamental architecture.
                  </p>
                  <p>
                    With that understanding, we bring innovative, brilliant, and revolutionary ideas that can <span className="text-white font-bold">literally change the world as we know it.</span>
                  </p>
                  <p className="text-white font-semibold text-xl lg:text-2xl">
                    Imagine a world where suffering, disease, genocide, and poverty are nearly unheard of. Where people live together in genuine harmony.
                  </p>
                  <p>
                    You have been led to believe such a world cannot exist. <span className="text-white font-bold">We have evidence to the contrary.</span> We have mapped the path forward.
                  </p>
                </div>
              </div>

              {/* Gradient Divider */}
              <div className="h-0.5 bg-gradient-to-r from-white via-gray-400 to-transparent w-full mb-16 opacity-60" role="separator" aria-hidden="true"></div>

              {/* Call for Founding Members */}
              <div className="text-center mb-16">
                <div className="text-gray-300 space-y-6 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                  <h2 className="text-white font-bold text-2xl lg:text-3xl">
                    We Are Assembling the Founding Team
                  </h2>
                  <p>
                    The founder of this project is seeking <span className="text-white font-semibold">10-12 individuals of exceptional intellectual ability</span> who resonate with this vision and are ready to join him in launching something that has never been attempted before.
                  </p>
                  <p className="text-white font-semibold text-xl">
                    If this idea moves you, please complete the questionnaire below. We want to learn more about who you are.
                  </p>
                </div>
              </div>

              {/* Gradient Divider */}
              <div className="h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-transparent w-full mb-16 opacity-60" role="separator" aria-hidden="true"></div>

              {/* Questionnaire Section */}
              <div className="bg-gray-900/20 rounded-3xl overflow-hidden">
                <div className="bg-black p-8 lg:p-12">
                  <div className="mb-8 text-center">
                    <div className="w-16 h-1 bg-gray-400 mb-4 mx-auto" aria-hidden="true"></div>
                    <p className="text-gray-400 uppercase tracking-wider text-sm font-semibold mb-2">FOUNDING MEMBER ASSESSMENT</p>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tight text-center">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      TELL US ABOUT YOURSELF
                    </span>
                  </h3>
                  
                  <div className="bg-gray-800/30 rounded-xl p-8 mb-8 max-w-4xl mx-auto">
                    {/* Progress Indicator */}
                    <div className="mb-8" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps} aria-label={`Step ${currentStep} of ${totalSteps}`}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-semibold text-gray-400">
                          Step {currentStep} of {totalSteps}
                        </span>
                        <span className="text-sm font-semibold text-gray-400">
                          {Math.round((currentStep / totalSteps) * 100)}% Complete
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                      {/* Step 1: Personal Information */}
                      {currentStep === 1 && (
                        <div className="step-section">
                          <h4 className="text-xl font-bold text-white mb-6">Personal Information</h4>
                          
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300 mb-2">
                                First Name *
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 h-12"
                                placeholder="Your first name"
                                aria-describedby="firstName-error"
                              />
                            </div>
                            <div>
                              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-300 mb-2">
                                Last Name *
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 h-12"
                                placeholder="Your last name"
                                aria-describedby="lastName-error"
                              />
                            </div>
                          </div>

                          <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 h-12"
                              placeholder="your.email@example.com"
                              aria-describedby="email-error"
                            />
                          </div>

                          <fieldset className="space-y-4 mb-6">
                            <legend className="text-sm font-semibold text-gray-300 mb-4">Social Media Profiles (Optional)</legend>
                            <div>
                              <label htmlFor="facebook" className="block text-sm font-semibold text-gray-300 mb-2">
                                Facebook Profile URL
                              </label>
                              <input
                                type="url"
                                id="facebook"
                                name="facebook"
                                value={formData.facebook}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 h-12"
                                placeholder="https://facebook.com/yourprofile"
                              />
                            </div>
                            <div>
                              <label htmlFor="instagram" className="block text-sm font-semibold text-gray-300 mb-2">
                                Instagram Profile URL
                              </label>
                              <input
                                type="url"
                                id="instagram"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 h-12"
                                placeholder="https://instagram.com/yourprofile"
                              />
                            </div>
                            <div>
                              <label htmlFor="linkedin" className="block text-sm font-semibold text-gray-300 mb-2">
                                LinkedIn Profile URL
                              </label>
                              <input
                                type="url"
                                id="linkedin"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 h-12"
                                placeholder="https://linkedin.com/in/yourprofile"
                              />
                            </div>
                          </fieldset>

                          <div className="flex justify-center">
                            <button
                              type="button"
                              onClick={nextStep}
                              disabled={!validateStep(currentStep)}
                              className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 border ${
                                validateStep(currentStep)
                                  ? 'bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 border-gray-700 cursor-pointer'
                                  : 'bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed'
                              }`}
                              aria-label="Continue to next step"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Project Resonance */}
                      {currentStep === 2 && (
                        <div className="step-section">
                          <h4 className="text-xl font-bold text-white mb-6">Project Resonance</h4>
                          
                          <div className="mb-6">
                            <label htmlFor="resonance" className="block text-sm font-semibold text-gray-300 mb-2">
                              Please explain why this project resonates with you.
                            </label>
                            <textarea
                              id="resonance"
                              name="resonance"
                              required
                              value={formData.resonance}
                              onChange={handleInputChange}
                              rows={6}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 resize-none"
                              placeholder="Share what draws you to this vision and why it matters to you..."
                              aria-describedby="resonance-help"
                            />
                            <div id="resonance-help" className="text-xs text-gray-500 mt-1">
                              Tell us what specifically resonates with you about our mission and approach.
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <button
                              type="button"
                              onClick={nextStep}
                              disabled={!validateStep(currentStep)}
                              className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 border ${
                                validateStep(currentStep)
                                  ? 'bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 border-gray-700 cursor-pointer'
                                  : 'bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed'
                              }`}
                              aria-label="Continue to next step"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Interests */}
                      {currentStep === 3 && (
                        <div className="step-section">
                          <h4 className="text-xl font-bold text-white mb-6">Your Interests</h4>
                          
                          <div className="mb-6">
                            <label htmlFor="interests" className="block text-sm font-semibold text-gray-300 mb-2">
                              What topics do you find yourself researching or thinking about in your spare time?
                            </label>
                            <textarea
                              id="interests"
                              name="interests"
                              required
                              value={formData.interests}
                              onChange={handleInputChange}
                              rows={5}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 resize-none"
                              placeholder="What subjects, problems, or ideas capture your curiosity..."
                              aria-describedby="interests-help"
                            />
                            <div id="interests-help" className="text-xs text-gray-500 mt-1">
                              Share the intellectual pursuits that genuinely fascinate you.
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <button
                              type="button"
                              onClick={nextStep}
                              disabled={!validateStep(currentStep)}
                              className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 border ${
                                validateStep(currentStep)
                                  ? 'bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 border-gray-700 cursor-pointer'
                                  : 'bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed'
                              }`}
                              aria-label="Continue to next step"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Strengths */}
                      {currentStep === 4 && (
                        <div className="step-section">
                          <h4 className="text-xl font-bold text-white mb-6">Your Approach</h4>
                          
                          <div className="mb-6">
                            <label htmlFor="strengths" className="block text-sm font-semibold text-gray-300 mb-2">
                              Describe a time when you saw a problem others missed, or approached something differently than most people would.
                            </label>
                            <textarea
                              id="strengths"
                              name="strengths"
                              required
                              value={formData.strengths}
                              onChange={handleInputChange}
                              rows={6}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 resize-none"
                              placeholder="Share a specific example that demonstrates your unique perspective or approach..."
                              aria-describedby="strengths-help"
                            />
                            <div id="strengths-help" className="text-xs text-gray-500 mt-1">
                              We're looking for evidence of independent thinking and unique problem-solving abilities.
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <button
                              type="button"
                              onClick={nextStep}
                              disabled={!validateStep(currentStep)}
                              className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 border ${
                                validateStep(currentStep)
                                  ? 'bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 border-gray-700 cursor-pointer'
                                  : 'bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed'
                              }`}
                              aria-label="Continue to next step"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 5: World Change */}
                      {currentStep === 5 && (
                        <div className="step-section">
                          <h4 className="text-xl font-bold text-white mb-6">Your Vision</h4>
                          
                          <div className="mb-6">
                            <label htmlFor="worldChange" className="block text-sm font-semibold text-gray-300 mb-2">
                              If you could change one thing and one thing only in the world, what would that be?
                            </label>
                            <textarea
                              id="worldChange"
                              name="worldChange"
                              required
                              value={formData.worldChange}
                              onChange={handleInputChange}
                              rows={5}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 resize-none"
                              placeholder="What single change would have the greatest positive impact..."
                              aria-describedby="worldChange-help"
                            />
                            <div id="worldChange-help" className="text-xs text-gray-500 mt-1">
                              This helps us understand your priorities and vision for positive change.
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <button
                              type="button"
                              onClick={nextStep}
                              disabled={!validateStep(currentStep)}
                              className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 border ${
                                validateStep(currentStep)
                                  ? 'bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 border-gray-700 cursor-pointer'
                                  : 'bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed'
                              }`}
                              aria-label="Continue to final step"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 6: Critical Thinking */}
                      {currentStep === 6 && (
                        <div className="step-section">
                          <h4 className="text-xl font-bold text-white mb-6">Systems Analysis</h4>
                          
                          <div className="mb-6">
                            <label htmlFor="criticalThinking" className="block text-sm font-semibold text-gray-300 mb-2">
                              Pick any major societal problem. In your view, what is the real reason it persists despite decades of efforts to solve it?
                            </label>
                            <textarea
                              id="criticalThinking"
                              name="criticalThinking"
                              required
                              value={formData.criticalThinking}
                              onChange={handleInputChange}
                              rows={6}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-200 resize-none"
                              placeholder="Choose a problem and explain why you think it really persists..."
                              aria-describedby="criticalThinking-help"
                            />
                            <div id="criticalThinking-help" className="text-xs text-gray-500 mt-1">
                              We want to see how you analyze systemic issues and identify root causes.
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <button
                              type="submit"
                              disabled={!validateStep(currentStep) || state.submitting}
                              className={`font-bold py-4 px-12 rounded-full transition-all duration-300 transform shadow-2xl border ${
                                validateStep(currentStep) && !state.submitting
                                  ? 'bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 hover:scale-105 border-gray-700 cursor-pointer'
                                  : 'bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed'
                              }`}
                              aria-label={state.submitting ? 'Submitting application...' : 'Submit your application'}
                            >
                              <span className="relative z-10">
                                {state.submitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
                              </span>
                            </button>
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Subtle Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>
    </>
  )
}