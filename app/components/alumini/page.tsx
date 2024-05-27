import React from 'react'

export default function Alumini() {
  const data = [
    { src: '/nykaa.webp', alt: 'Nykaa' },
    { src: '/purple.webp', alt: 'Purple' },
    { src: '/np-digital.webp', alt: 'NP Digital' },
    { src: '/oneplus.webp', alt: 'OnePlus' },
    { src: '/fcbkinnect.webp', alt: 'FCB Kinnect' },
    { src: '/mcdonalds.svg', alt: 'McDonalds' },
    { src: '/performics-convonix.webp', alt: 'Performics Convonix' },
    { src: '/media-net.webp', alt: 'Media.net' },
    { src: '/schbang.webp', alt: 'Schbang' },
    { src: '/merkle-sokrati.webp', alt: 'Merkle Sokrati' },
    { src: '/mediacom.webp', alt: 'Mediacom' },
    { src: '/publicis-media.webp', alt: 'Publicis Media' },
  ]
  return (
    <div id="alumini" className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Our Alumni Work At</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div key={item.alt} className="flex items-center justify-center">
            <img src={`/assets/nxt_assets${item.src}`} alt={item.alt} width={150} height={50} className='object-contain'/>
          </div>
        ))}
      </div>
    </div>
  )
}
