import JurisdictionEligibilityNotice from '@/rendering/jurisdiction-eligibility-notice'
import React from 'react'
export const metadata = {
    title: "Jurisdiction & Eligibility Notice | Lunar Wolf EA",
    description: "Important jurisdiction and eligibility notice for Lunar Wolf EA users, including user responsibility for forex trading, broker selection, and referral participation.",
};

export default function page() {
    return (
        <div>
            <JurisdictionEligibilityNotice />
        </div>
    )
}
