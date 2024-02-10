import * as React from 'react'

export const IconMarkdown = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='256'
      height='256'
      viewBox='0 0 256 256'
      fill='none'
      {...props}
    >
      <rect width='256' height='256' fill='#242938' rx='60' />
      <path
        stroke='#fff'
        strokeWidth='10'
        d='M217 69H39C33.4772 69 29 73.4772 29 79V177C29 182.523 33.4772 187 39 187H217C222.523 187 227 182.523 227 177V79C227 73.4772 222.523 69 217 69Z'
      />
      <path
        fill='#fff'
        d='M54 162V94H74L94 119L114 94H134V162H114V123L94 148L74 123V162H54ZM179 162L149 129H169V94H189V129H209L179 162Z'
      />
    </svg>
  )
}
