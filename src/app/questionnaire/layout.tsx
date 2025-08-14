import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply for Founding Membership | Pantheon Chicago Intellectual Salon',
  description: 'Apply for founding membership in Chicago\'s first intellectual salon for systems thinkers. Join 10-12 exceptional individuals in collaborative problem-solving and rigorous analysis.',
  keywords: [
    'pantheon application',
    'chicago intellectual salon application',
    'founding member application',
    'systems thinking assessment',
    'intellectual community application',
    'critical thinking evaluation',
    'collaborative problem solving application',
    'chicago founding members',
    'intellectual assessment',
    'systems thinkers chicago'
  ],
  openGraph: {
    title: 'Apply for Founding Membership | Pantheon',
    description: 'Apply for founding membership in Chicago\'s first intellectual salon for systems thinkers. Multi-step assessment for exceptional individuals.',
    url: 'https://www.thepantheon.club/questionnaire',
    type: 'website',
    images: [
      {
        url: '/og-questionnaire.jpg',
        width: 1200,
        height: 630,
        alt: 'Pantheon Founding Member Application - Join Chicago\'s Intellectual Salon',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply for Founding Membership | Pantheon',
    description: 'Apply for founding membership in Chicago\'s first intellectual salon for systems thinkers. Multi-step assessment for exceptional individuals.',
    images: ['/twitter-questionnaire.jpg'],
  },
  alternates: {
    canonical: 'https://www.thepantheon.club/questionnaire',
  },
}

export default function QuestionnaireLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}