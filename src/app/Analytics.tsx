'use client'

import Script from 'next/script'

interface AnalyticsProps {
  GA_MEASUREMENT_ID: string
}

export default function Analytics({ GA_MEASUREMENT_ID }: AnalyticsProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            // Enhanced measurement settings
            enhanced_measurement: {
              scrolls: true,
              outbound_clicks: true,
              site_search: false,
              video_engagement: false,
              file_downloads: true,
              page_views: true
            },
            // Custom parameters for intellectual salon tracking
            custom_parameter_1: 'intellectual_salon',
            custom_parameter_2: 'chicago_recruitment'
          });
          
          // Track custom events for form interactions
          window.trackFormStep = function(step, stepName) {
            gtag('event', 'form_step_completed', {
              event_category: 'questionnaire',
              event_label: stepName,
              value: step,
              custom_parameter: 'founding_member_application'
            });
          };
          
          // Track application submissions
          window.trackFormSubmission = function() {
            gtag('event', 'form_submission', {
              event_category: 'conversion',
              event_label: 'founding_member_application',
              value: 1
            });
          };
          
          // Track page navigation
          window.trackNavigation = function(destination) {
            gtag('event', 'navigation', {
              event_category: 'engagement',
              event_label: destination
            });
          };
          
          // Track CTA clicks
          window.trackCTA = function(ctaName, location) {
            gtag('event', 'cta_click', {
              event_category: 'engagement',
              event_label: ctaName,
              custom_parameter: location
            });
          };
        `}
      </Script>
      
      {/* Conversion tracking for form submissions */}
      <Script id="conversion-tracking" strategy="afterInteractive">
        {`
          // Enhanced conversion tracking
          function trackConversion(eventName, value = 1) {
            gtag('event', 'conversion', {
              'send_to': '${GA_MEASUREMENT_ID}',
              'event_category': 'goal_completion',
              'event_label': eventName,
              'value': value,
              'currency': 'USD'
            });
          }
          
          // Make trackConversion available globally
          window.trackConversion = trackConversion;
        `}
      </Script>
    </>
  )
}