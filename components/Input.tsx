import Image from "next/image";

function Input(){
    return (
        <div
            className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}
        >
            <Image src={'https://yt3.ggpht.com/yti/APfAmoFEvwA525FagnnvCJ7dcCmwp2P1AOLWo9yBCzgVzO8=s88-c-k-c0x00ffffff-no-rj-mo'} 
                width={'30px'}
                height={'30px'}
            />
        </div>
    )
}