import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
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
              <svg viewBox="0 0 200 50" className="h-16 w-auto md:h-20">
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
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 pt-20">
          <div className="w-full max-w-none">
            {/* Hero Content */}
            <div className="text-center mb-20">
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight">
                  JOIN CHICAGO'S FIRST
                  <br />
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    INTELLECTUAL SALON
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
                  For systems thinkers ready to move beyond surface-level conversations
                </p>
              </div>
            </div>

            {/* Gradient Divider */}
            <div className="h-0.5 bg-gradient-to-r from-white via-gray-400 to-transparent w-full mb-16 opacity-60"></div>

            {/* Core Message Section */}
            <section className="mb-32 relative">
              <div className="text-center">
                <div className="text-gray-300 space-y-8 text-xl lg:text-2xl leading-relaxed max-w-5xl mx-auto mb-12">
                  <p className="text-white font-semibold text-2xl lg:text-3xl">
                    Something is deeply wrong with the world we've inherited.
                  </p>
                  <p>
                    You see the suffering that could be prevented. The problems that could be solved. The potential that remains locked away while systems designed to help us have become systems designed to exploit us.
                  </p>
                  <p>
                    You feel the weight of knowing that better is possible, while watching most people accept what is as what must be.
                  </p>
                  <p className="text-white font-semibold text-xl lg:text-2xl">
                    If these words resonate in your soul - if you&apos;ve been searching for others who see what you see and refuse to accept it as inevitable - then you may be exactly who we&apos;re looking for.
                  </p>
                  <p className="text-white font-bold text-2xl lg:text-3xl">
                    This is an invitation to something unprecedented.
                  </p>
                </div>

                {/* Call to Action Button */}
                <div className="text-center">
                  <Link href="/questionnaire">
                    <button className="group relative bg-gradient-to-r from-gray-800 to-black text-white font-bold py-6 px-12 rounded-full text-xl lg:text-2xl hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl border border-gray-700">
                      <span className="relative z-10">I WANT IN</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </section>
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