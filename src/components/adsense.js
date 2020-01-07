import * as React from "react";




export default ({client, slot, format = 'auto'}) => (
    <div>
    <ins className="adsbygoogle"
    css={{display: 'block'}}
    data-ad-client={client}
    data-ad-slot={slot}
    data-ad-format={format}
    data-full-width-responsive="true">
    </ins>
    </div>
  )


