export type LeadStatus = 'Potential' | 'Confirmed' | 'Scheduled'

export type OpportunityType = 'RPA' | 'Digital Product' | 'Analytics' | 'BPM'

export interface CustomerData {
  name: string
  phone: string
  email: string
}

export interface Lead {
  status: LeadStatus
  opportunities: OpportunityType[]
  data: CustomerData
}