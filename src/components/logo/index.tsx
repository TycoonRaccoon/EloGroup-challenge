import React, { HTMLAttributes } from 'react'
import Style from './styles'

const Logo = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Style {...props}>
      <img
        src='data:image/webp;base64,UklGRgQFAABXRUJQVlA4TPcEAAAvjYEKEIcgFkzmL92ZwvzPv0AghRtcogaDAUuy1boR6GUsS+Luf7uOMPIomd+I/k8AfcWQRM5WRXKk98cicrYqIinS5kMSkXaJHInpa4u/UxGR8LZ4Dli15jfxceFhk7giiGeOrylVYe5nXCbz8KjINLgEcTxSsMDfqQFI7yodz4e8JVS49uKX4HwVXseicBxlEebpUcM0uST4jpq+Q2zwHfkNXOHe08sAlVWicB7pawDo6Qsc+NwkRSIK6bj0BlRelhUr5W1A5xWxY+HJ3wM4Z/Til1XcVZjMZdzQeZFg8fk6dPbLiqWdvwjq5iruwvS4KAB0XlKxWOP70NwKVnf+IshbOwFgRPLkDgB9hWCxRvoDKE4R6zt/EeWNZQDoTM4VAE6/hMe9NVuhPzF8WB+N1h7h+iI49sUKYDC5NwBIXqy2fkT6mE79VGhZT9OzWxBdGszjTHTnXG0om0qfpZnavioARPLnAaB7nbCORGZRAIXWNTIWi3hkWPUga6gm5T3RPA4DthUAQGhlAoDiE2CtTA9jR6V3UTZUj2HpgR5mNUA2R9wNcVcVwKC1FUD3OS2VnrPQ22jMmkOGsTM9jmrQ3VExpF0pgLIoAEB0UUOjl3u1FZdBmRyzAWV3aXsZgNLqBuD0yJhr2B3DmMn1Mly7K9urAOqyAqB7nAahLTDm17NsaOQbDNhd3V4HkJcxALBDN4QthG6QZ6ehONFlSHuLagibAgBeRgNAcsC8kzmkp+ElSRTG/KwZ2KsYjp1xUcyV9pQAKK2/ABzPgkFsgqeyxlnp+Zg18g4G2ZF8rE1hrR+aZ/l77QUCQJ4lQ96NOGB+upGh7sg3fXCVHyBtRnmF+LVZ+xKN/k+JfiCNn5pn+WdooV+o0Cd68a/WIv2R8VU00db6C+qqYxv9jOSss8sPc9mfCtO+GABe0ACkZ2Sof0hba80g5N5m6pa+RjszTfdECiCtA4DgMGZqC+nj8ZJGRNRmCG51huh1GtKr9C1pTvZNXQBkWQag5HjNUEzT9KZgaG6HoTqxGvhVeAs5b+oAMJZVANWjGMYfozpD9goGBB/BvJPnmMmT+IsEAEiLWAEUj2CA/LFgGOxE3dBcghoOlzYbT04D/Q7UALRFAkDJ9TIg/S2qM4jXYcDpwB3G4HLOkG2ss/FLZABIS1gBiE+yaP5bwYDgxGqAPOIOYyXXYhhsujCvvwR1AINXXACUfagZAOEH5V0khuZEYsEVbGnAGnzYgM4zvmAsP0UCgLrgAAAh52jCOHgWjoGXsc6QnXhYoGec5QbzSc6XAVo+JYVR+aegEwCqWwGATu5iAtCriEgbML+ExDDYh5IJwLhERJrCPtgrWQC9RM4Oc6XfgjsAVKcDADT6UX/g+xbWGcSJ5IGvRnJvJkflH4OCAkCPDnzhnmkh912QGBCdqK4r5B90yUG/BkXFvYYHLIp7oaXcd8FqaF5UVxVaWVZU+kvN9/TrzdGJQr8BVwkTzlVx10iLuW6CigHFi44lI9La4lfpTzk3P1cv4vPDvd0V08a0PuuSGl5Dw6DsRbH7VabVRZ1O+k2IYpvYR6ZXsqjXOAP5OhUDTjeiMnxaoheG5jES/SxEseqTK9NruXSHfiZyd6JhQPAjytejcQZ6aapPeqGl675ikqvprTXJTO/mLK190NbOIzFtPMnV9DZaPSK9mfPZ+k1bLYH+OAA='
        alt='EloGroup Logo'
        draggable={false}
      />
    </Style>
  )
}

export default Logo
