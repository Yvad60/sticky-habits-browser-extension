import { ChartBarIcon } from "@heroicons/react/24/solid"
import type { FC } from "react"

type AppLogoProps = {
  color: "white" | "primary"
  iconOnly?: boolean
}

const AppLogo: FC<AppLogoProps> = ({ color, iconOnly }) => {
  const colorClassName = color === "white" ? "text-white" : "text-teal-600"
  return (
    <div className={`flex items-center gap-1 ${colorClassName}`}>
      <ChartBarIcon className="w-6" />
      {!iconOnly && <span className="font-semibold">Sticky Habits</span>}
    </div>
  )
}
export default AppLogo
