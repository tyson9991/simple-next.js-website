
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="w-5/6 m-auto">
      <Component {...pageProps} />
      </div>
    </Layout>
   

  )
}

export default MyApp
