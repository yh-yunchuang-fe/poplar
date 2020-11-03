import React from "react"

type BTProps = { bg: string; children: React.ReactNode }
export const Button = ({ bg, children }: BTProps) => {
  return <button style={{ backgroundColor: bg }}>{children}</button>
}
