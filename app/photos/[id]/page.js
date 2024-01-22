import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function getData(id) {
    const res = await fetch(`https://picsum.photos/id/${id}/info`)

    return res.json();
}

const Photo = async ({ params }) => {
    const data = await getData(params.id);
    console.log(data)

    return (
        <div>
            <h1>{data.author}</h1>
            <Image src={data.download_url} alt='' layout="responsive" width={data.width} height={data.height} />
            <Link href={data.url} >Lien vers la source de l'image</Link>
        </div>
    )
}

export default Photo