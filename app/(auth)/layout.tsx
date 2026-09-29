import { Children } from "react"

export default function AuthLayout({children}:  LayoutProps<"/">) {
  return (
    <>{children}</>
  )
}
