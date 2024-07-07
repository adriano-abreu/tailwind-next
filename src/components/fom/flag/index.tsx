'use client'

import { CircleFlag } from 'react-circle-flags'

interface FlagProps extends React.HTMLAttributes<HTMLDivElement> {
  countryCode: string
}

export function Flag({ countryCode, ...props }: FlagProps) {
  return <CircleFlag countryCode={countryCode} {...props} />
}
