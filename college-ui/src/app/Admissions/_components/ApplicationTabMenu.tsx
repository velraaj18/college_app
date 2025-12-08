import React, { useState } from 'react'

type itemProps = {
    header : string;
    subHeader : string;
    imagePath : string
}

const ApplicationTabMenu = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const itemRenderer = (item : itemProps, index: number) => (
        
    );

  return (
    <div>ApplicationTabMenu</div>
  )
}

export default ApplicationTabMenu