import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-900/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link href="/">
                <svg viewBox="0 0 200 50" className="h-16 w-auto md:h-20 cursor-pointer">
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
          <div className="w-full max-w-4xl mx-auto text-center">
            
            {/* Success Icon */}
            <div className="mb-12">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-8 border border-gray-600">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Thank You Message */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  THANK YOU
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed mb-8">
                Your application has been successfully submitted
              </p>
            </div>

            {/* Gradient Divider */}
            <div className="h-0.5 bg-gradient-to-r from-white via-gray-400 to-transparent w-full mb-16 opacity-60 max-w-2xl mx-auto"></div>

            {/* What Happens Next */}
            <div className="mb-16">
              <div className="mb-6">
                <div className="w-16 h-1 bg-white mb-4 mx-auto"></div>
                <p className="text-gray-400 uppercase tracking-wider text-sm font-semibold mb-2">WHAT HAPPENS NEXT</p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                WE WILL BE IN <span className="text-gray-300">TOUCH</span>
              </h2>
              
              <div className="text-gray-300 space-y-6 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                <p>
                  <span className="text-white font-semibold">We are carefully reviewing each application</span> to ensure we bring together the right group of systems thinkers for the Chicago intellectual salon.
                </p>
                <p>
                  Once we have received sufficient interest and have identified the ideal venue for our first meeting, <span className="text-white font-semibold">you will be notified by email</span> with all the details including date, time, and location.
                </p>
                <p className="text-white font-semibold text-xl lg:text-2xl">
                  The journey toward applied intelligence begins soon.
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-900/30 rounded-2xl p-8 lg:p-10 border border-gray-700/50 backdrop-blur-md max-w-2xl mx-auto mb-16">
              <h3 className="text-2xl font-bold text-white mb-6">In the Meantime</h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Keep thinking deeply about the systemic problems that concern you most. Consider what solutions might actually work, beyond the surface-level fixes typically proposed.
                </p>
                <p>
                  <span className="text-white font-semibold">You are joining a community of minds</span> committed to moving beyond complaints to actual understanding and collaborative solutions.
                </p>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center mb-20">
              <Link href="/">
                <button className="group relative bg-gradient-to-r from-gray-800 to-black text-white font-bold py-4 px-8 rounded-full text-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl border border-gray-700">
                  <span className="relative z-10">← Back to Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Subtle Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
    </div>
  )
}