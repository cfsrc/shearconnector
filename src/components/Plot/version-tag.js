import * as React from 'react'

function VersionTag({ className }) {

  return (
    <div className={`${className || ""} 
      opacity-50
      p-1 sm:p-2 bg-white rounded `}>
      <div className="text-xs text-right text-black md:text-sm">
        Version 1.0, April 2023
      </div>
      <div className="hidden sm:block text-xs text-right text-black md:text-sm">
        By Hyeyoung Koh
      </div>
    </div>
  )
}

export default VersionTag