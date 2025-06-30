declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Track pageviews
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = (action: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, parameters)
  }
}

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event('form_submit', {
    form_name: formName,
    event_category: 'engagement',
    event_label: 'ZP Summit Signup'
  })
}

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  event('click', {
    event_category: 'engagement',
    event_label: buttonName
  })
}