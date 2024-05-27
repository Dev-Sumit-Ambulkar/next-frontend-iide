export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>IIDE - Courses</title>
        <meta
          name="description"
          content="Explore a wide range of courses at IIDE, including Digital Marketing, Data Analytics, Creative Strategy, and more. Enhance your skills with expert-led courses designed to boost your career in the digital space. Join IIDE today and start your journey towards excellence!"
        />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta name="robots" content="index, follow" />
      </head>
      <body>{children}</body>
    </html>
  )
}
