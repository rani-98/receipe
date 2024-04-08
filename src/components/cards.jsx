function Cards(props) {
    return (
        <div className="min-w-56 rounded-lg shadow-lg p-3 h-full">
            <div className="flex flex-col gap-3 h-full">
            <img className="rounded-lg h-full" src={props.image} alt="starter" />

<h1 className="font-bold">{props.recipe.recipename}</h1>

<div className="flex">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
className="w-6 h-6 rounded">
<path strokeLinecap="round" strokeLinejoin="round"
d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0
0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 
21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>  
<span>{props.recipe.username}</span>


</div>

<div className="flex gap-2 text-orange-600">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rounded">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />

</svg>
<span>{props.time} min</span>
<span> | </span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>
<span>{props.servers}peoples</span>


</div>


            </div>
         
    
        </div>
    )
}

export default Cards