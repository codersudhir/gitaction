import React from 'react'

const Repo = ({}) => {
  return (
    <div>
      
    </div>
  )
}
export async function getServerSideProps(context) {
    let id=context.params
    
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/search/repositories?q=user:codersudhir+fork:true&sort=updated&per_page=10&type=Repositories`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

export default Repo
