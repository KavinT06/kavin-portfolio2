import React from 'react'

type SectionTitleProps = {
  title: string;
}

function SectionTitle({title}: SectionTitleProps) {
    return (
        
      <div className="overflow-x-hidden w-full pt-5">
        <h2 className="landingSectionTitle max-w-sm sm:max-w-max mx-auto text-center relative text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 pt-4 sm:pt-0 xl:mx-0 xl:text-left xl:w-max">
          {title}
        </h2>
      </div>
    )
}

export default SectionTitle
