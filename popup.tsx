import AppLogo from "./components/StickyHabitsLogo"

import "./index.css"

const IndexPopup = () => {
  return (
    <main className="w-[480px]">
      <div className="flex justify-between bg-teal-700 ">
        <div className="p-2">
          <AppLogo color="white" />
        </div>
      </div>

      <div className="py-3">
        <h1 className="text-teal-700 text-center font-semibold">
          Welcome to Sticky habits
        </h1>
      </div>
    </main>
  )
}

export default IndexPopup
