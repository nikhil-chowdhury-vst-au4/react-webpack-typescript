import React from 'react'

const Card = (props: { user: unknown; key: number }) => {
  return (
    <div>
      welcome
      {JSON.stringify(props)}
    </div>
  )
}

export default Card
