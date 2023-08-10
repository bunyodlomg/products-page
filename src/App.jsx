import React from 'react';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Pagination from './components/Pagination';
const App = () => {
  const [val, setVal] = useState(null);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("https://products-fi34.onrender.com/products/");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [url]);
  console.log(data);
  return (
    <div className='app'>
      <Search setVal={setVal} setUrl={setUrl} />
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="w-full border border-collapse table-auto mx-auto">
                <thead className="bg-[#5A5C66] border-b text-white">
                  <tr>
                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                      id
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                      title
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                      description
                    </th>
                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                      price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.products.length ? data.products.map(d => (
                    <tr key={d.id} className="bg-gray-100 border-b hover:bg-gray-300 relative">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{d.id}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.title}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.description}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${d.price}</td>
                    </tr>
                  )) : (
                    <tr>
                      <td>
                        <img className='fixed mx-auto sm:left-[0%] md:left-[20%] lg:left-[30%] xl:left-[35%]' src='https://assets-v2.lottiefiles.com/a/8f195bf4-1179-11ee-88da-277f023b0f0c/z4c7jIndmE.gif' />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination val={val} setUrl={setUrl} total={data && data.total} limit={data && data.limit} skip={data && data.skip} />
    </div>
  )
}

export default App
