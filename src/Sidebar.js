import userEvent from '@testing-library/user-event'
import React from 'react'
// import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutLined from '@mui/icons-material/ExpandMore';
import {useStateValue} from "./StateProvider"

function Sidebar() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="Sidebar" >
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutLined} title="Market" />
    </div>
  )
}

export default Sidebar