import { queryHelpers, render } from '@testing-library/react'
import * as React from 'react'
import { SWRConfig } from 'swr'

/* c8 ignore start */
export const queryByAttr = (attr: string) =>
  queryHelpers.queryByAttribute.bind(null, attr)

export const queryAllByAttr = (attr: string) =>
  queryHelpers.queryAllByAttribute.bind(null, attr)
/* c8 ignore stop */

export const renderWithSWRConfig = (
  children: React.ReactNode
): ReturnType<typeof render> => {
  return render(
    <SWRConfig
      value={{
        dedupingInterval: 0
      }}
    >
      {children}
    </SWRConfig>
  )
}
