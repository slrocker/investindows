import * as React from "react";

export default class Ad extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }


  render () {
    return (
      <div className='ad'>
        <ins className='adsbygoogle'
          style={{ display: 'block', textAlign:'center', }}
          data-ad-client='ca-pub-4815974767842427'
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-slot="3375985459"
           />
        
      </div>
    );
  }
}
