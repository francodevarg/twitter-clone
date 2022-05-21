import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/outline';
import Image from 'next/image';
import SidebarRow from './SidebarRow';


function Sidebar(){
    return <div>
        <Image width={'40px'} height={'40px'} src='https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg' alt='' />        
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notifications"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/>
    </div>
}

export default Sidebar;