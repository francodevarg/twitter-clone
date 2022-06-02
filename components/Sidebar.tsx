import Image from "next/image";
// import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HomeIcon
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";



function Sidebar() {


  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image width={'40px'} height={'40px'} src='https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg' alt='' />        
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarRow title="Home" Icon={HomeIcon} active />
        <SidebarRow title="Explore" Icon={HashtagIcon} />
        <SidebarRow title="Notifications" Icon={BellIcon} />
        <SidebarRow title="Messages" Icon={InboxIcon} />
        <SidebarRow title="Bookmarks" Icon={BookmarkIcon} />
        <SidebarRow title="Lists" Icon={ClipboardListIcon} />
        <SidebarRow title="Profile" Icon={UserIcon} />
        <SidebarRow title="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
        Tweet
      </button>
      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5"
      >
            <Image src={'https://yt3.ggpht.com/yti/APfAmoFEvwA525FagnnvCJ7dcCmwp2P1AOLWo9yBCzgVzO8=s88-c-k-c0x00ffffff-no-rj-mo'} 
                width={'40px'}
                height={'40px'}
                className="rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold text-gray-700">Franco</h4>
          <p className="text-[#6e767d]">@francodev25</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;