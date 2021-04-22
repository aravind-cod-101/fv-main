import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel'

const ReactSlider = ({children} ) => {

    return (
        <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
        ]}
        showSides={true}
        sidesOpacity={.5}
        sideSize={.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
      >
          {children}
      </InfiniteCarousel>
          )
}

export default ReactSlider