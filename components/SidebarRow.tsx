import { SVGProps } from "react"
import { useRouter } from "next/router";

interface Props{
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
    title: string,
    active?: Boolean
}


function SidebarRow({Icon , title , active}: Props) {
  const router = useRouter();
  return (
    <div className={`flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 group ${
      active && "font-bold text-twitter"
    }`}
    onClick={() => active && router.push("/")}
    >
        <Icon className="h-6 w-6"/>    
        <p className="hidden xl:inline group-hover:text-twitter">{title}</p>
    </div>
  )
}

export default SidebarRow