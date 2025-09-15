import React, { createContext, useState } from 'react'

const ResultsContext = createContext()
const baseUrl = 'https://google.serper.dev/'

const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

 const getResults = async (query) => {
  setIsLoading(true)
  try {
        console.log("API KEY:", import.meta.env.VITE_SERPER_API_KEY)
    const res = await fetch(`${baseUrl}search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": import.meta.env.VITE_SERPER_API_KEY, 
      },
      body: JSON.stringify({ q: query }),
    })
    const data = await res.json()
    console.log("API Response:", data)

    setResults(data.organic || [])
  } catch (err) {
    console.error("Fetch error:", err)
  } finally {
    setIsLoading(false)
  }
}


  return (
    <ResultsContext.Provider
      value={{
        results,
        getResults,
        isLoading,
        setSearchTerm,
        searchTerm
      }}
    >
      {children}
    </ResultsContext.Provider>
  )
}

export { ResultsContext }
export default ResultsContextProvider
