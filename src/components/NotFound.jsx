import { Link } from "react-router-dom"

const NotFound = () => {

    return (
      <>
          <section className="bg-white py-24">
                  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                      <div className="mx-auto max-w-screen-sm text-center">
                          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-700">404!</h1>
                          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-700 md:text-4xl ">Something&apos;s missing.</p>
                          <p className="mb-4 text-lg font-light text-gray-900 dark:text-gray-900">Sorry, we can&apos;t find that page.<br />You&apos;ll find lots to explore on the home page. </p>
                          <Link to={`/home`} className="inline-flex text-white bg-red-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">Back to Homepage</Link>
                      </div>   
                  </div>
          </section>
      </>
    )
  }
 


export default NotFound