import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'

import{
    Chat,
    EmojiFlags,
    ExpandMoreOutlined,
    LocalHospital,
    People,
    Storefront,
    VideoLibrary
} from "@material-ui/icons"
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const user = useSelector((state) => state.user);
    return (
        <div className="sidebar">
            <SidebarRow title={user.displayName} src={user.photoURL}/>
            <SidebarRow title="COVID_19 Information center" Icon={LocalHospital}/>
            <SidebarRow title="Pages" Icon={EmojiFlags}/>
            <SidebarRow title="Friends" Icon={People}/>
            <SidebarRow title="Messenger" Icon={Chat}/>
            <SidebarRow title="Marketplace" Icon={Storefront}/>
            <SidebarRow title="Videos" Icon={VideoLibrary}/>
            <SidebarRow title="More Items" Icon={ExpandMoreOutlined}/>
            
        </div>
    )
}

export default Sidebar
