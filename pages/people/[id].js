export async function getStaticProps(context){
    const id=context.params.id;
    const res=await fetch(`https://swapi.dev/api/people/${id}`);
    const data=await res.json();  
     return {
         props : {data}
     }
}

export async function getStaticPaths(){
        const res= await fetch('https://swapi.dev/api/people');
        const data=await res.json();
        const paths=data.results.map((post)=>{
            const urlArr=post.url.split("/");
            const id=urlArr[urlArr.length-2];

            return {
                params: { id: id }

        }
        });

        return {paths,fallback:false}
}

export default function Planets({data}){
    return(
        <div>
            <h1 className="text-center text-xl font-semibold my-6">
            {`Person ${data.name}`}
            </h1>
            <p><span className="font-semibold">Name:</span>{data.name}</p>
            <p><span className="font-semibold">Height:</span>{data.height}</p>
            <p><span className="font-semibold">Mass:</span>{data.mass}</p>
        </div>
    )

}
