import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="نكتب من اجل تعلم المهارات الرائجه في روائج" />
        <p className="description">
          انكتب من اجلالاتصال  نستعرض اهكم تفسير الاحلام والاهتمام والعنايه بالشعر والجسم واهم اطلالات الموضه 
    اساليب الحياه المختلفه وكل ماهو رائج والمهمات
<a href="rwa2ej.com">↖️</a> rwa2ej.com

    والمهارات اللازمة والرائجه في الحياه المختلفه من روائج وروائع اللغه العربيه للصف واللغه الانجليزيه ومهاراتالتعلم ول
        </p>
      </main>

      <Footer />
    </div>
  )
}
